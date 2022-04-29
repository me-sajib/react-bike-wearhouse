import React from "react";
import "./css/SocialLogin.css";

const SocialLogin = () => {
  return (
    <div className="text-light pt-5">
      <div className="container">
        {/* or text top of the social button */}
        <div className="d-flex">
          <div className="hr-row mt-3"></div>
          <div className="mx-2">or</div>
          <div className="hr-row mt-3"></div>
        </div>

        {/* social button */}
        <div className="d-flex py-5 justify-content-center">
          <div className="mx-2">
            <button className="btn btn-primary">
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
