import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navLinks] = useState([
    { path: "/home", label: "Home" },
    { path: "/page2", label: "Page Two" },
    { path: "/page3", label: "Page Three" },
    { path: "/page4", label: "Page Four" },
  ]);

  return (
    <header>
      <nav>
        <a>
          <img src="/" alt="Logo" />
        </a>
      </nav>

      <div>
        <ul>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path}>
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
