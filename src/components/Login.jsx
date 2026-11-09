
import { useState } from "react";
import "./Login.css";

function Login() {
  const [loginMethod, setLoginMethod] = useState("password");
  const [userInput, setUserInput] = useState("");

  return (
    <div className="login-container">

      {/* Left branding section */}
      <div className="login-brand">
        <div className="brand-logo">F<span>E</span>T</div>

        <div className="brand-content">
          <p className="brand-tag">SMART WORK. SMART EARNINGS.</p>
          <h1>One Team.<br />One Vision.<br /><span>Shared Success.</span></h1>
          <p className="brand-description">
            Track your freelance earnings, manage multiple platforms
            and grow together with your team.
          </p>
        </div>

        <div className="brand-footer">
          FREELANCER EARNINGS TRACKER
        </div>
      </div>

      {/* Right login section */}
      <div className="login-section">
        <div className="login-card">

          <div className="login-heading">
            <p className="welcome-label">WELCOME BACK</p>
            <h2>Sign in to your account</h2>
            <p>Access your team's earnings workspace.</p>
          </div>

          <div className="login-tabs">
            <button
              className={loginMethod === "password" ? "active" : ""}
              onClick={() => setLoginMethod("password")}
            >
              Password
            </button>

            <button
              className={loginMethod === "otp" ? "active" : ""}
              onClick={() => setLoginMethod("otp")}
            >
              OTP Login
            </button>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>

            <label>Email or Mobile Number</label>
            <input
              type="text"
              placeholder="Enter email or +91 mobile number"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            />

            {loginMethod === "password" ? (
              <>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <div className="forgot-password">
                  <a href="#forgot-password">Forgot password?</a>
                </div>
                <button type="submit" className="login-button">
                  Sign In
                </button>
              </>
            ) : (
              <button type="button" className="login-button">
                Send OTP
              </button>
            )}

          </form>

          <div className="login-bottom">
            Don't have an account? <a href="#register">Contact your administrator</a>
          </div>

          <p className="security-note">
            SECURE TEAM ACCESS
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;