import React, { useState } from "react";
import "../css/templates/mainNav.css";

function MainNavbar(){
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <>
      <div className="logoNav"></div>

      <div className={`menuOff ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>Profile</li>
          <li>Log Out</li> 
        </ul>     
      </div>

      <div className={`menuNav ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default MainNavbar;
