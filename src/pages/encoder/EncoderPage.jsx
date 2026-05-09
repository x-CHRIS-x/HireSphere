import { applicants } from '../../data/applicants';
import './EncoderPage.css';

export default function EncoderPage() {
  return (
    <main className="encoder-page">
      <div className="container">
        <header className="page-header">
          <h1>Data entry</h1>
        </header>

        <section className="entry-section">
          <h2>Add applicant data</h2>
          <div className="entry-card">
            <div className="entry-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First name</label>
                  <input type="text" placeholder="Enter first name" disabled />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input type="text" placeholder="Enter last name" disabled />
                </div>
              </div>
              <div className="form-group">
                <label>Position applied for</label>
                <select disabled>
                  <option value="">Select a position</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Education level (1–5)</label>
                  <input type="number" min="1" max="5" placeholder="1-5" disabled />
                </div>
                <div className="form-group">
                  <label>Years of experience</label>
                  <input type="number" min="0" placeholder="0" disabled />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Technical skills score</label>
                  <input type="number" min="0" max="100" placeholder="0-100" disabled />
                </div>
                <div className="form-group">
                  <label>Examination results</label>
                  <input type="number" min="0" max="100" placeholder="0-100" disabled />
                </div>
              </div>
              <button className="btn-submit" disabled>Submit</button>
            </div>
          </div>
        </section>

        <section className="records-section">
          <h2>Recent records</h2>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Education</th>
                  <th>Experience</th>
                  <th>Skills</th>
                  <th>Exam</th>
                  <th>Date entered</th>
                </tr>
              </thead>
              <tbody>
                {applicants.slice(0, 4).map(a => (
                  <tr key={a.id}>
                    <td className="td-name">{a.name}</td>
                    <td className="tabular-nums">{a.education}</td>
                    <td className="tabular-nums">{a.experience}</td>
                    <td className="tabular-nums">{a.technicalSkills}</td>
                    <td className="tabular-nums">{a.examinationResults}</td>
                    <td className="td-date">{a.applicationDate}</td>
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
