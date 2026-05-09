import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from '@phosphor-icons/react';
import { jobs } from '../data/jobs';
import './JobListingsPage.css';

export default function JobListingsPage() {
  const [filter, setFilter] = useState('All');

  const types = ['All', ...new Set(jobs.map(j => j.type))];
  const filtered = filter === 'All' ? jobs : jobs.filter(j => j.type === filter);

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  return (
    <main className="jobs-page">
      <div className="container">
        <header className="page-header">
          <h1>Job openings</h1>
        </header>

        <div className="jobs-filter">
          <label htmlFor="type-filter" className="filter-label">Filter by type:</label>
          <select
            id="type-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            {types.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <span className="filter-count">{filtered.length} position{filtered.length !== 1 ? 's' : ''}</span>
        </div>

        <div className="jobs-list">
          {filtered.map(job => (
            <Link to={`/jobs/${job.id}`} key={job.id} className="job-card">
              <div className="job-card-top">
                <span className="job-type-tag">{job.type}</span>
                <h2 className="job-title">{job.title}</h2>
                <p className="job-company">{job.company}</p>
              </div>
              <div className="job-card-bottom">
                <span className="job-meta">
                  <MapPin size={14} weight="bold" />
                  {job.location}
                </span>
                <span className="job-meta">{job.salary}</span>
                <span className="job-meta">
                  <Clock size={14} weight="bold" />
                  {formatDate(job.postedDate)}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <p>No positions found for this filter.</p>
          </div>
        )}
      </div>
    </main>
  );
}
