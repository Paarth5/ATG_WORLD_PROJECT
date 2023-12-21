import React from "react";
import Register from "./register.jsx";
import Login from "./login.jsx";
const navbar = () => {
  return (
    <div className="nav-cont">
      <div className="navbar">
        <img src="./assets/images/logo.svg" alt="logo" className="logo" />
        <div className="search-bar">
          <input
            type="image"
            src="./assets/images/mag_glass.jpg"
            alt="Search"
            className="mag-glass"
          ></input>
          <input
            type="text"
            name="search_bar"
            id="search_bar"
            placeholder="Search for your favourite groups in ATG"
            className="search"
          />
        </div>
        <p className="login">
          Create account.
          <div
            class="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabindex="-1"
          >
            <div class="modal-dialog modal-lg modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title" id="exampleModalToggleLabel">
                    Let's learn, share & inspire each other with our passion for
                    computer engineering. Sign up now 🤘🏼
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-toggler">
                  Already have an account?{" "}
                  <a
                    class="modal-toggler-link"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                  >
                    Sign In
                  </a>
                </div>
                <div class="modal-body">
                  <Register />
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1"
          >
            <div class="modal-dialog modal-lg modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title" id="exampleModalToggleLabel2">
                    Let's learn, share & inspire each other with our passion for
                    computer engineering. Sign up now 🤘🏼
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-toggler">
                  Don’t have an account yet?{" "}
                  <a
                    class="modal-toggler-link"
                    data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal"
                  >
                    Create new for free!
                  </a>
                </div>
                <div class="modal-body">
                  <Login />
                </div>
              </div>
            </div>
          </div>
          {/* <div
            class="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                    Modal 2
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  Hide this modal and show the first with the button below.
                </div>
                <div class="modal-footer">
                  <button
                    class="btn btn-primary"
                    data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal"
                  >
                    Back to first
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          <button
            class="login-more-btn"
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
          >
            It's free! <img src=".\assets\images\downArrow.svg" alt="More" />
          </button>
        </p>
      </div>
    </div>
  );
};

export default navbar;
