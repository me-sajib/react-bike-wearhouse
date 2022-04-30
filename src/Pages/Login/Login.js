import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../Shared/Social/SocialLogin";
import Spinner from "../Shared/Spinner";
import "./css/Login.css";
const Login = () => {
  const [alreadyUser] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const loginUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    fetch("http://localhost:5000/addToken/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        // save token to local storage
        localStorage.setItem("token", data.token);
      });
  };

  useEffect(() => {
    if (alreadyUser) {
      navigate("/");
    }
  }, [alreadyUser]);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);
  return (
    <div className="bg-dark form-body">
      <div className=" container">
        <div className="row w-75 mx-auto">
          <h3>Login</h3>
          <form className="form-user" onSubmit={loginUser}>
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
            {loading && <Spinner />}
            {
              // if any error
              error && <div className="alert alert-danger">{error.message}</div>
            }
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
