import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../Shared/Social/SocialLogin";
import Spinner from "../Shared/Spinner";

const Registration = () => {
  const [alreadyUser] = useAuthState(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // register user
  const registrationUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return toast.error("Please fill all fields");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    await createUserWithEmailAndPassword(email, password, {
      sendEmailVerification: true,
    });

    if (user) {
      return toast.success("Account created successfully");
    }
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  useEffect(() => {
    if (alreadyUser) {
      navigate("/");
    }
  }, [alreadyUser]);

  return (
    <div className="bg-dark form-body">
      <div className="form-body container">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Registration</h3>
                <form
                  className="requires-validation"
                  onSubmit={registrationUser}
                >
                  <div className="col-md-12 mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                  </div>

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
                  <div className="col-md-12 mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="confirmPassword"
                      placeholder="confirm Password"
                      required
                    />
                  </div>
                  {
                    // if loading is true
                    loading && <Spinner />
                  }
                  {
                    // if any error
                    error && (
                      <div className="alert alert-danger">{error.message}</div>
                    )
                  }
                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                  </div>

                  <div className="already-login text-light">
                    already have an account? <Link to="/login">Login now </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SocialLogin />
    </div>
  );
};

export default Registration;
