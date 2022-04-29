import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/Social/SocialLogin";
import "./css/Login.css";
const Login = () => {
  return (
    <div className="bg-dark form-body">
      <div className=" container">
        <div className="row w-75 mx-auto">
          <h3>Login</h3>
          <form className="form-user">
            <div className="col-md-12 mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="E-mail Address"
                required
              />
            </div>

            <div className="col-md-12 mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="form-button mt-3">
              <button id="submit" type="submit" className="btn btn-primary">
                LOGIN
              </button>
            </div>
            <div className="already-login text-light">
              Don't have an account?{" "}
              <Link to="/registration">registration now </Link>
            </div>
          </form>
        </div>
      </div>
      <SocialLogin />
    </div>
  );
};

export default Login;
