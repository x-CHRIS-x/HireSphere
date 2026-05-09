import { NavLink, useNavigate } from 'react-router-dom';
import { List, SignOut } from '@phosphor-icons/react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login');
    setMenuOpen(false);
  }

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-inner container">
        <NavLink to={isLoggedIn ? (user.role === 'admin' ? '/admin' : user.role === 'encoder' ? '/encoder' : '/dashboard') : '/'} className="navbar-brand">
          <span className="brand-mark">HS</span>
          <span className="brand-text">HireSphere</span>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <List size={24} weight="bold" />
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {!isLoggedIn && (
            <>
              <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/jobs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Jobs
              </NavLink>
            </>
          )}

          {isLoggedIn && user.role === 'admin' && (
            <>
              <NavLink to="/admin" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Dashboard
              </NavLink>
              <NavLink to="/admin/postings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Job postings
              </NavLink>
              <NavLink to="/admin/applicants" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Applicants
              </NavLink>
              <NavLink to="/admin/scoring" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Scoring
              </NavLink>
            </>
          )}

          {isLoggedIn && user.role === 'applicant' && (
            <>
              <NavLink to="/dashboard" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Dashboard
              </NavLink>
              <NavLink to="/jobs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Jobs
              </NavLink>
              <NavLink to="/my-applications" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                My applications
              </NavLink>
              <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Profile
              </NavLink>
            </>
          )}

          {isLoggedIn && user.role === 'encoder' && (
            <>
              <NavLink to="/encoder" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Data entry
              </NavLink>
              <NavLink to="/encoder/records" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Applicant records
              </NavLink>
            </>
          )}

          <div className="nav-actions">
            {isLoggedIn ? (
              <>
                <span className="nav-user">{user.name}</span>
                <button className="btn-ghost" onClick={handleLogout}>
                  <SignOut size={16} weight="bold" />
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login" className="btn-accent" onClick={() => setMenuOpen(false)}>
                Sign in
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
