import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBlog, faComment, faCircleCheck, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import BlogManagement from '../guest/blogdashboard';
function AdminPanel() {
  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar">
        <h2><span style={{ color: 'white' }}>My</span>_Brand</h2>
        <ul>
          <li><a href="./Home"><FontAwesomeIcon icon={faHouse} /> Home</a></li>
          <li><a href="./BlogManagement"><FontAwesomeIcon icon={faBlog} /> Blogs</a></li>
          <li><a href="./LoginPage" id="logoutBtn"><FontAwesomeIcon icon={faRightFromBracket} /> Logout</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <main>
        <div className="home__container">
          <header>
            <h1>Welcome to Admin Dashboard</h1>
          </header>
          <div className="notifications">
            <p>You have 5 new subscribers</p>
          </div>
          <div className="home__info">
            <div className="actions">
              <a href="./BlogManagement">Create New Blog</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminPanel;
