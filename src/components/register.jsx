import React from "react";

const login = () => {
  return (
    <div>
      <h1 className="login-head">Create Account</h1>
      <div className="login-form-cont">
        <div className="login-form">
          <form class="row g-3">
            <div class="col-md-6">
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="First-Name"
              />
            </div>
            <div class="col-md-6">
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="First-Name"
              />
            </div>
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
            <div class="col-md-12">
              <input
                type="text"
                class="form-control"
                id="inputCity"
                placeholder="Confirm Password"
              />
            </div>
            <div class="col-12">
              <button type="submit" class="Register-submitbtn">
                Create Account
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
              <img src=".\assets\images\google.svg" alt="Google" />
              Sign up with Google
            </button>
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
