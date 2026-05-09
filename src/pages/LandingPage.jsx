import { Link } from 'react-router-dom';
import {
  UserCircle, Buildings, Clipboard, ListChecks,
  Bell, CalendarCheck, ShieldCheck, Robot, Archive,
  ArrowRight
} from '@phosphor-icons/react';
import './LandingPage.css';

const features = [
  { icon: UserCircle, title: "Applicant portal", desc: "Register, browse openings, and submit applications online." },
  { icon: Buildings, title: "Admin dashboard", desc: "Manage job postings, review applicants, and make hiring decisions." },
  { icon: Clipboard, title: "Encoder module", desc: "Input and verify applicant data within the system." },
  { icon: ListChecks, title: "Application tracking", desc: "Monitor application status from submission to hiring." },
  { icon: Bell, title: "Notifications", desc: "Receive updates on application progress and interview schedules." },
  { icon: CalendarCheck, title: "Interview scheduling", desc: "Coordinate interview appointments between HR and candidates." },
  { icon: ShieldCheck, title: "Data security", desc: "Safe storage and handling of applicant records." },
  { icon: Robot, title: "AI-assisted evaluation", desc: "Intelligent preliminary assessment of applicant qualifications." },
  { icon: Archive, title: "Archive management", desc: "Manage inactive and closed applications." },
];

export default function LandingPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-content">
            <h1 className="hero-title">
              Find the right talent, faster
            </h1>
            <p className="hero-desc">
              HireSphere helps organizations manage recruitment from job posting
              to hiring. Evaluate applicants across multiple criteria and make
              data-driven decisions.
            </p>
            <div className="hero-actions">
              <Link to="/login" className="btn-primary">
                Sign in
                <ArrowRight size={18} weight="bold" />
              </Link>
              <Link to="/jobs" className="btn-secondary">
                Browse openings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-heading">What HireSphere does</h2>
          <div className="features-grid">
            {features.map((f, i) => (
              <article key={i} className="feature-item">
                <div className="feature-icon">
                  <f.icon size={20} weight="duotone" />
                </div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
