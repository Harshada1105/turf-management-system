import "./Register.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Register() {
  const navigate = useNavigate();
  return (
    <>
    <div className="register-page">
      <Link to="/" className="back-btn">
        <FiArrowLeft />
        <span></span>
      </Link>

      <div className="register-card">
        <div className="register-left">
          <h1>Join TurfMaster</h1>

          <p>
            Create your account and start booking premium sports facilities
            instantly.
          </p>

          <img
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800"
            alt="Sports"
          />
        </div>

        <div className="register-right">
          <h2>Create Account</h2>

          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create password" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm password" />
            </div>

            <button type="submit" className="register-submit">
              Create Account
            </button>
          </form>

          <p className="login-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Register;

