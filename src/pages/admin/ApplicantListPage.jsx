import { applicants, criteriaInfo } from '../../data/applicants';
import './ApplicantListPage.css';

const applicantStatuses = [
  'Pending', 'Under review', 'Shortlisted', 'Under review', 'Pending', 'Shortlisted'
];

export default function ApplicantListPage() {
  return (
    <main className="applicant-list-page">
      <div className="container">
        <header className="page-header">
          <h1>Applicants</h1>
        </header>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Education</th>
                <th>Experience</th>
                <th>Technical skills</th>
                <th>Exam results</th>
                <th>Status</th>
                <th>Applied</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((a, i) => (
                <tr key={a.id}>
                  <td className="td-name">{a.name}</td>
                  <td className="tabular-nums">{a.education}</td>
                  <td className="tabular-nums">{a.experience} yrs</td>
                  <td className="tabular-nums">{a.technicalSkills}</td>
                  <td className="tabular-nums">{a.examinationResults}</td>
                  <td>
                    <span className={`status-tag status-${applicantStatuses[i].toLowerCase().replace(' ', '-')}`}>
                      {applicantStatuses[i]}
                    </span>
                  </td>
                  <td className="td-date">{a.applicationDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
