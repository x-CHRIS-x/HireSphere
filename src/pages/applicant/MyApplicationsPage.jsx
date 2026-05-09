import { Link } from 'react-router-dom';

export default function MyApplicationsPage() {
  return (
    <main style={{ padding: '2rem 0 4rem', minHeight: '70vh' }}>
      <div className="container">
        <header className="page-header">
          <h1>My applications</h1>
        </header>

        <div className="empty-state">
          <p>You have not submitted any applications yet.</p>
          <Link to="/jobs" className="btn-primary">Browse job openings</Link>
        </div>
      </div>
    </main>
  );
}
