import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

const AdminSignup = () => {
  return (
    <div className="cv-admin_panel-signup">
      <div className="cv-admin_panel-signup_card">
        <h1>Admin Panel</h1>
        <form>
          <input
            className="cv-admin_panel-inputs"
            type="text"
            placeholder="Username"
          />
          <input
            className="cv-admin_panel-inputs"
            type="text"
            placeholder="Password"
          />

          <Link to="/admin-panel">
            <button>
              Signup
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AdminSignup