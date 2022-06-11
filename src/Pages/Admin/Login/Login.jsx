import React from "react";

function Login() {
  return (
    <React.Fragment>
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-5">
                <img
                  src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                  alt="logo"
                  width="100"
                />
              </div>
              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4 text-center">
                    Login
                  </h1>
                  <form
                    method="POST"
                    className="needs-validation"
                    novalidate=""
                    autocomplete="off"
                  >
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Username</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Password</label>
                    </div>

                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="remember"
                          id="remember"
                          className="form-check-input"
                        />
                        <label for="remember" className="form-check-label">
                          Remember Me
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary ms-auto">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="text-center mt-5 text-muted">
                Copyright © 2022 — Apartment
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Login;
