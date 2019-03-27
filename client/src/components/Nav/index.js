import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/"
        style={{ textAlign: "center" }}
      >
        HouseWork
      </a>
      <div id="loginSignUp" style={{ float: "right" }}>
        <button className="btn btn-light" data-toggle="modal" data-target="#modal-log-in" id="logInBtn" uk-toggle style={{ float: "right", marginLeft: "3px"}}>Log In</button>
        <button className="btn btn-light" data-toggle="modal" data-target="#modal-sign-up" id="signUpBtn" uk-toggle style={{ float: "left" }}>Sign Up</button>
      </div>

      {/* modal to sign up */}
      <div className="modal fade" id="modal-sign-up" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form method="POST">
                <div className="form-group">
                  <label for="houseName">House Name</label>
                  <input type="text" class="form-control" id="houseName" aria-describedby="houseHelp" placeholder="Enter House Name"></input>
                </div>
                <div className="form-group">
                  <label for="inputPassword">Password</label>
                  <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" id="enter">Start Organizing!</button>
            </div>
          </div>
        </div>
      </div>

      {/* modal to log in */}
      <div className="modal fade" id="modal-log-in" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Log In</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form method="POST">
                <div className="form-group">
                  <label for="houseName">Existing House Name</label>
                  <input type="text" class="form-control" id="houseName" aria-describedby="houseHelp" placeholder="Enter Existing House Name"></input>
                </div>
                <div className="form-group">
                  <label for="inputPassword">Password</label>
                  <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" id="enter">Get Back To Work!</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
