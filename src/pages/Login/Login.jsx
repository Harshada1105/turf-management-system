import "./Login.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function Login() {
  return (
    <div className="login-page">
      <Link to="/" className="back-btn">
        <FiArrowLeft />
      </Link>

      <div className="login-card">
        <div className="login-left">
          <h1>Welcome Back</h1>

          <p>Login and continue booking your favorite sports facilities.</p>

          <img
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800"
            alt="Football Player"
          />
        </div>

        <div className="login-right">
          <h2>Login</h2>

          <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter password" />

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit">Login</button>

            <label>Password</label>
          </form>

          <p className="bottom-text">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
