import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const result = login(email, password);
    if (result.success) {
      if (result.role === 'admin') navigate('/admin');
      else if (result.role === 'encoder') navigate('/encoder');
      else navigate('/dashboard');
    } else {
      setError(result.error);
    }
  }

  return (
    <main className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <span className="login-brand-mark">HS</span>
            <h1>Sign in to HireSphere</h1>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <p className="login-error">{error}</p>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="login-btn">Sign in</button>
          </form>

          <div className="login-footer-text">
            <p>Don't have an account? <span className="link-disabled">Register</span></p>
          </div>
        </div>
      </div>
    </main>
  );
}
