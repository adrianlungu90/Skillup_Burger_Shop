import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const [isAuthenticated, setAuthenticate] = useState(false);

  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="login-page-container">
      <div
        className={`form-container ${
          showLoginForm ? "show-login" : "show-register"
        }`}
      >
        <h3>Login</h3>
        <form action="submit" id="login-form">
          {/* Login form fields go here */}
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button" onClick={() => (window.location = "/")}>
            Submit
          </button>
        </form>
      </div>

      <div
        className={`form-container ${
          showLoginForm ? "show-register" : "show-login"
        }`}
      >
        <h3>Register</h3>
        <form action="submit" id="register-form">
          {/* Register form fields go here */}
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button" onClick={() => (window.location = "/")}>
            Submit
          </button>
        </form>
      </div>

      <div className="toggle-buttons">
        <button
          className={`toggle-button ${showLoginForm ? "active" : ""}`}
          onClick={toggleForms}
          style={{ backgroundColor: "rgb(156, 0, 60)" }}
        >
          Login
        </button>
        <button
          className={`toggle-button ${!showLoginForm ? "active" : ""}`}
          onClick={toggleForms}
          style={{ backgroundColor: "rgb(156, 0, 60)" }}
        >
          Register
        </button>
      </div>
      <div className="icon-list">
        {/* Add Google, Facebook, and GitHub sign-in buttons */}
        <IconContext.Provider
          value={{
            color: "white",
            className: "icons-class",
            size: "2em",
          }}
        >
          <a href="https://www.facebook.com/1hamburgerstand/">
            <FaFacebook />
          </a>
          <a href="https://www.google.com/search?sca_esv=590241271&sxsrf=AM9HkKlqcHlSw-hLTVN8zN73N85iDBMJmA:1702408011755&q=endless+hamburgers&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiQo7GGzIqDAxWPgP0HHZJkDlYQ0pQJegQIDhAB&biw=1920&bih=963&dpr=1">
            {" "}
            <FaGoogle />
          </a>
          <a href="https://github.com/jonsuh/hamburgers">
            {" "}
            <FaGithub />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Login;
