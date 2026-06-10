import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function ForgotPassword() {
  return (
    <div className="forgot-page">

      <Link to="/login" className="back-btn">
        <FiArrowLeft />
      </Link>

      <div className="forgot-card">

        <h2>Forgot Password?</h2>

        <p>
          Enter your email address and we'll send
          you a password reset link.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>
          Send Reset Link
        </button>

      </div>

    </div>
  );
}

export default ForgotPassword;