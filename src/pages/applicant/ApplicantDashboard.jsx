import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './ApplicantDashboard.css';

export default function ApplicantDashboard() {
  const { user } = useAuth();

  return (
    <main className="applicant-dash">
      <div className="container">
        <header className="page-header">
          <h1>Welcome, {user?.name?.split(' ')[0] || 'Applicant'}</h1>
        </header>

        <section className="dash-section">
          <h2>My applications</h2>
          <div className="empty-state">
            <p>You have not submitted any applications yet.</p>
            <Link to="/jobs" className="btn-primary">Browse job openings</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
