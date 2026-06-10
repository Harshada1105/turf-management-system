import { useState, useEffect } from "react";
import { FiBell, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (menuOpen) {
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

        <div className="logo" onClick={() => navigate("/")}>
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
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Bookings</a>
        <a href="#">Sports</a>
        <a href="#">About</a>
        <a href="#">Notifications</a>
        <a href="#" onClick={() => navigate("/login")}>
          Login
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
            setMenuOpen(false);
          }}
        >
          Register
        </a>
      </div>
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
}

export default Navbar;
