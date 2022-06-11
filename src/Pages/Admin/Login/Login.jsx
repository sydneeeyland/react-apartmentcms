import React from 'react'

function Login() {
  return (
    <React.Fragment>
      <section class="h-100">
        <div class="container h-100">
          <div class="row justify-content-sm-center h-100">
            <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div class="text-center my-5">
                <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="100" />
              </div>
              <div class="card shadow-lg">
                <div class="card-body p-5">
                  <h1 class="fs-4 card-title fw-bold mb-4 text-center">Login</h1>
                  <form method="POST" class="needs-validation" novalidate="" autocomplete="off">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label for="floatingInput">Username</label>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label for="floatingInput">Password</label>
                    </div>

                    <div class="d-flex align-items-center">
                      <div class="form-check">
                        <input type="checkbox" name="remember" id="remember" class="form-check-input" />
                        <label for="remember" class="form-check-label">Remember Me</label>
                      </div>
                      <button type="submit" class="btn btn-primary ms-auto">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="text-center mt-5 text-muted">
                Copyright © 2022 — Apartment
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Login