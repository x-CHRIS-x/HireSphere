import { Briefcase, Users, ClockCounterClockwise, ChartBar } from '@phosphor-icons/react';
import './AdminDashboard.css';

const stats = [
  { label: "Active postings", value: "6", icon: Briefcase },
  { label: "Total applicants", value: "23", icon: Users },
  { label: "Pending review", value: "14", icon: ClockCounterClockwise },
  { label: "Evaluated", value: "9", icon: ChartBar },
];

const recentActivity = [
  { applicant: "Angela Dela Cruz", position: "Frontend developer", status: "Under review", date: "May 7, 2026" },
  { applicant: "Jerome Garcia", position: "HR coordinator", status: "Pending", date: "May 6, 2026" },
  { applicant: "Patricia Villanueva", position: "Junior backend developer", status: "Shortlisted", date: "May 5, 2026" },
  { applicant: "Rafael Mendoza", position: "Data entry encoder", status: "Pending", date: "May 5, 2026" },
  { applicant: "Maria Santos", position: "Marketing associate", status: "Under review", date: "May 4, 2026" },
];

export default function AdminDashboard() {
  return (
    <main className="admin-dash">
      <div className="container">
        <header className="page-header">
          <h1>Dashboard</h1>
        </header>

        <div className="stats-row">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon">
                <s.icon size={20} weight="duotone" />
              </div>
              <div>
                <p className="stat-value tabular-nums">{s.value}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="recent-section">
          <h2>Recent applications</h2>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((r, i) => (
                  <tr key={i}>
                    <td className="td-name">{r.applicant}</td>
                    <td>{r.position}</td>
                    <td><span className={`status-tag status-${r.status.toLowerCase().replace(' ', '-')}`}>{r.status}</span></td>
                    <td className="td-date">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
