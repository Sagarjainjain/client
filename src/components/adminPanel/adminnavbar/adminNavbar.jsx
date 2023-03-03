import React, { useState } from "react";
import "./styles.css";
import { FcMenu } from "react-icons/fc";
import { FcCollapse } from "react-icons/fc";
const AdminNavbar = () => {
  const [togglemenu, setTogglemenu] = useState(false);

  return (
    <div className="cv-admin_panel-nav">
      <div className="cv-admin_panel-logo">
        <h1>Content Verse</h1>
        <h5>Admin Panel</h5>
      </div>
      <div className="cv-admin_panel-links">
        <ul>
          <li>Movies</li>
        </ul>
        <ul>
          <li>Web Series</li>
        </ul>
        <ul>
          <li>Blogs</li>
        </ul>
        <button>Log Out</button>
      </div>
      <div className="cv-admin_panel-menu">
        {togglemenu ? (
          <FcCollapse size={26} onClick={() => setTogglemenu(false)} />
        ) : (
          <FcMenu size={26} onClick={() => setTogglemenu(true)} />
        )}
        {togglemenu && (
          <div className="cv-admin_panel-menu_container">
            <div className="cv-admin_panel-menu_container-links">
              <ul>
                <li>Movies</li>
              </ul>
              <ul>
                <li>Web Series</li>
              </ul>
              <ul>
                <li>Blogs</li>
              </ul>
              <button>Log Out</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNavbar;
