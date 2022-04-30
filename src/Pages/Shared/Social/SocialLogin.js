import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Spinner from "../Spinner";
import "./css/SocialLogin.css";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, loading, error] =
    useSignInWithGoogle(auth);
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (googleUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser]);

  return (
    <div className="text-light pt-5">
      <div className="container">
        {/* or text top of the social button */}
        <div className="d-flex">
          <div className="hr-row mt-3"></div>
          <div className="mx-2">or</div>
          <div className="hr-row mt-3"></div>
        </div>

        {
          // if loading show spinner
          loading && <Spinner />

          /* social button */
        }
        <div className="d-flex py-5 justify-content-center">
          <div className="mx-2">
            <button
              className="btn btn-primary"
              onClick={() => signInWithGoogle()}
            >
              <i className="fa-brands fa-google"></i>
            </button>
          </div>
          <div className="mx-2">
            <button className="btn btn-info">
              <i className="fa-brands fa-github"></i>
            </button>
          </div>
          <div className="mx-2">
            <button className="btn btn-success">
              <i className="fa-brands fa-facebook-square"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
