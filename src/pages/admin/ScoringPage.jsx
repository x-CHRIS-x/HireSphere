import { useState } from 'react';
import { applicants, criteriaInfo } from '../../data/applicants';
import './ScoringPage.css';

const defaultWeights = {
  education: 25,
  experience: 30,
  technicalSkills: 25,
  examinationResults: 20,
};

export default function ScoringPage() {
  const [weights, setWeights] = useState(defaultWeights);
  const totalWeight = Object.values(weights).reduce((s, w) => s + w, 0);

  function handleWeightChange(key, value) {
    setWeights(prev => ({ ...prev, [key]: Number(value) }));
  }

  return (
    <main className="scoring-page">
      <div className="container">
        <header className="page-header">
          <h1>Applicant scoring</h1>
        </header>

        <section className="weights-panel">
          <h2>Criteria weights</h2>
          <div className="weights-grid">
            {Object.entries(criteriaInfo).map(([key, info]) => (
              <div key={key} className="weight-control">
                <div className="weight-label-row">
                  <label htmlFor={`w-${key}`}>{info.label}</label>
                  <span className="weight-value tabular-nums">{weights[key]}%</span>
                </div>
                <input
                  id={`w-${key}`}
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={weights[key]}
                  onChange={(e) => handleWeightChange(key, e.target.value)}
                  className="weight-slider"
                />
              </div>
            ))}
          </div>
          <div className="weights-footer">
            <span className={`weights-total tabular-nums ${totalWeight === 100 ? 'valid' : 'invalid'}`}>
              Total: {totalWeight}%
            </span>
            <button className="btn-calculate" disabled>
              Calculate rankings
            </button>
          </div>
        </section>

        <section className="scoring-table-section">
          <h2>Applicant data</h2>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  {Object.values(criteriaInfo).map(info => (
                    <th key={info.label}>{info.label}</th>
                  ))}
                  <th>Score</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map(a => (
                  <tr key={a.id}>
                    <td className="td-name">{a.name}</td>
                    <td className="tabular-nums">{a.education}</td>
                    <td className="tabular-nums">{a.experience}</td>
                    <td className="tabular-nums">{a.technicalSkills}</td>
                    <td className="tabular-nums">{a.examinationResults}</td>
                    <td className="td-empty">—</td>
                    <td className="td-empty">—</td>
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
