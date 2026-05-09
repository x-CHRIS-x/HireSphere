import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Check } from '@phosphor-icons/react';
import { jobs } from '../data/jobs';
import './JobDetailPage.css';

export default function JobDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find(j => j.id === Number(id));

  if (!job) {
    return (
      <main className="detail-page">
        <div className="container">
          <div className="not-found">
            <h1>Job not found</h1>
            <p>This listing does not exist or has been removed.</p>
            <button onClick={() => navigate('/jobs')} className="btn-back">Back to listings</button>
          </div>
        </div>
      </main>
    );
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  return (
    <main className="detail-page">
      <div className="container">
        <button onClick={() => navigate(-1)} className="btn-back">
          <ArrowLeft size={16} weight="bold" />
          Back
        </button>

        <article className="detail-card">
          <header className="detail-header">
            <span className="detail-type">{job.type}</span>
            <h1>{job.title}</h1>
            <p className="detail-company">{job.company}</p>
            <div className="detail-meta">
              <span><MapPin size={14} weight="bold" /> {job.location}</span>
              <span>{job.salary}</span>
              <span><Clock size={14} weight="bold" /> Posted {formatDate(job.postedDate)}</span>
            </div>
          </header>

          <div className="detail-body">
            <section>
              <h2>Description</h2>
              <p>{job.description}</p>
            </section>

            <section>
              <h2>Requirements</h2>
              <ul className="detail-requirements">
                {job.requirements.map((req, i) => (
                  <li key={i}>
                    <Check size={14} weight="bold" className="req-icon" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            <button className="btn-apply" disabled>Apply</button>
          </div>
        </article>
      </div>
    </main>
  );
}
