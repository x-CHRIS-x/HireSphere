import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import JobListingsPage from './pages/JobListingsPage';
import JobDetailPage from './pages/JobDetailPage';

import AdminDashboard from './pages/admin/AdminDashboard';
import ApplicantListPage from './pages/admin/ApplicantListPage';
import ScoringPage from './pages/admin/ScoringPage';

import ApplicantDashboard from './pages/applicant/ApplicantDashboard';
import MyApplicationsPage from './pages/applicant/MyApplicationsPage';
import ProfilePage from './pages/applicant/ProfilePage';

import EncoderPage from './pages/encoder/EncoderPage';

function ProtectedRoute({ children, allowedRoles }) {
  const { isLoggedIn, user } = useAuth();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function getHomeRoute(user) {
  if (!user) return '/';
  if (user.role === 'admin') return '/admin';
  if (user.role === 'encoder') return '/encoder';
  return '/dashboard';
}

function AppRoutes() {
  const { isLoggedIn, user } = useAuth();

  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={isLoggedIn ? <Navigate to={getHomeRoute(user)} replace /> : <LoginPage />} />
      <Route path="/jobs" element={<JobListingsPage />} />
      <Route path="/jobs/:id" element={<JobDetailPage />} />

      {/* Admin */}
      <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/postings" element={<ProtectedRoute allowedRoles={['admin']}><JobListingsPage /></ProtectedRoute>} />
      <Route path="/admin/applicants" element={<ProtectedRoute allowedRoles={['admin']}><ApplicantListPage /></ProtectedRoute>} />
      <Route path="/admin/scoring" element={<ProtectedRoute allowedRoles={['admin']}><ScoringPage /></ProtectedRoute>} />

      {/* Applicant */}
      <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['applicant']}><ApplicantDashboard /></ProtectedRoute>} />
      <Route path="/my-applications" element={<ProtectedRoute allowedRoles={['applicant']}><MyApplicationsPage /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute allowedRoles={['applicant']}><ProfilePage /></ProtectedRoute>} />

      {/* Encoder */}
      <Route path="/encoder" element={<ProtectedRoute allowedRoles={['encoder']}><EncoderPage /></ProtectedRoute>} />
      <Route path="/encoder/records" element={<ProtectedRoute allowedRoles={['encoder']}><EncoderPage /></ProtectedRoute>} />

      {/* 404 */}
      <Route path="*" element={
        <main style={{ padding: '4rem 1.5rem', textAlign: 'center', minHeight: '60vh' }}>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem', marginBottom: '0.4rem' }}>
            Page not found
          </h1>
          <p style={{ color: '#78716c' }}>The page you are looking for does not exist.</p>
        </main>
      } />
    </Routes>
  );
}

function AppLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <div id="main-content">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  );
}
