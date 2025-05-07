import React, { useState } from 'react';
import logo from '../Img/shopping-logo-design-template.PNG';
import Stoteicon from '../Img/reshot-icon-shopping-cart.svg';
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'
import './Nav.css';

function Nav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div>
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/">
            <img src={logo} className="logo" alt="Company Logo" />
          </Link>
          <img src={Stoteicon} className="storelogo" alt="Shopping Cart Icon" onClick={toggleSidebar}
          />
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
    </div>
  );
}

export default Nav;
