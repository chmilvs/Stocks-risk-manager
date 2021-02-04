import { Link } from "react-router-dom";
import { useState } from "react";
import "./AuthForm.css";

function AuthForm() {
  let [signup, visSignup] = useState(false);
  return (
    <div className="auth">
      <form>
        <div className="col-6 col-12-xsmall">
          <input type="text" name="name" id="name" placeholder="Username" />
        </div>
        <div className="col-6 col-12-xsmall">
          <input
            type="email"
            name="password"
            id="email"
            placeholder="Password"
          />
        </div>
        {signup === false ? (
          <div>
            <Link to="/dashboard" className="button primary small">
              Log In
            </Link>
            <Link
              to="/auth"
              onClick={() => visSignup((signup = true))}
              className="button primary small"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <></>
        )}
        {signup === true ? (
          <>
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input
                type="email"
                name="password"
                id="email"
                placeholder="Email"
              />
            </div>
            <div>
              <Link to="/dashboard" className="button primary small">
                Log In
              </Link>
              <Link
                to="/auth"
                onClick={() => visSignup((signup = true))}
                className="button primary small"
              >
                Sign Up
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

export default AuthForm;
