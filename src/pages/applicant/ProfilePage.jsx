import './ProfilePage.css';

export default function ProfilePage() {
  return (
    <main className="profile-page">
      <div className="container">
        <header className="page-header">
          <h1>Profile</h1>
        </header>

        <div className="profile-card">
          <div className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input type="text" defaultValue="Maria" disabled />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" defaultValue="Santos" disabled />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue="applicant@hiresphere.com" disabled />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input type="tel" placeholder="Enter phone number" disabled />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Education level</label>
                <select disabled>
                  <option>Bachelor's degree with honors</option>
                </select>
              </div>
              <div className="form-group">
                <label>Years of experience</label>
                <input type="number" defaultValue="3" disabled />
              </div>
            </div>
            <div className="form-group">
              <label>Skills</label>
              <textarea rows="3" placeholder="List your relevant skills..." disabled></textarea>
            </div>
            <div className="form-group">
              <label>Resume</label>
              <div className="file-upload" aria-disabled="true">
                <p>Upload your resume (PDF, DOC)</p>
              </div>
            </div>
            <button className="btn-save" disabled>Save changes</button>
          </div>
        </div>
      </div>
    </main>
  );
}
