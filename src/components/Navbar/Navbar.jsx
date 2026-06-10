import { useState, useEffect } from "react";
import { FiBell, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
  if(menuOpen){
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="mobile-menu-btn">
          {menuOpen ? (
            <FiX onClick={() => setMenuOpen(false)} />
          ) : (
            <FiMenu onClick={() => setMenuOpen(true)} />
          )}
        </div>

        <div className="logo">
          ⚽ TurfMaster
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Bookings</li>
          <li>Sports</li>
          <li>About</li>
        </ul>

        <div className="nav-right">
          <FiBell className="bell-icon" />
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Bookings</a>
        <a href="#">Sports</a>
        <a href="#">About</a>
        <a href="#">Notifications</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
      {menuOpen && (
  <div
    className="menu-overlay"
    onClick={() => setMenuOpen(false)}
  ></div>
)}
    </>
  );
}

export default Navbar;