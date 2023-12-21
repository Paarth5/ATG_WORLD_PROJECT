import React from "react";

const login = () => {
  return (
    <div>
      <h1 className="login-head">Sign In</h1>
      <div className="login-form-cont">
        <div className="login-form">
          <form class="row g-3">
            <div class="col-12">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Email"
              />
            </div>
            <div class="col-12">
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Password"
              />
            </div>

            <div class="col-12">
              <button type="submit" class="Register-submitbtn">
                Sign In
              </button>
            </div>
          </form>
          <div class="col-12">
            <button type="submit" class="Sign-in-option">
              <img src=".\assets\images\facebook.svg" alt="Facebook" />
              Sign up with Facebook
            </button>
          </div>
          <div class="col-12">
            <button type="submit" class="Sign-in-option">
              <img src=".\assets\images\google.svg" alt="Google asad" />
              Sign up with Google
            </button>
            <a href="#" className="forgotpass">
              Forgot Password?
            </a>
          </div>
        </div>
        <div>
          <img src=".\assets\images\login_img.svg" alt="Login" />
          <p className="tandc">
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
