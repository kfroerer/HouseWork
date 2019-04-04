import React from "react";
import "./style.css";
import axios from 'axios';

function handleSend(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  axios({
      method: "POST", 
      url:"/send", 
      data: {
          name: name,   
          email: email,  
          message: message
      }
  }).then((response)=>{
      if (response.data.msg === 'success'){
          document.getElementById('sentStatus').innerHTML = "Email Sent!"
          resetForm()
      }else if(response.data.msg === 'fail'){
          document.getElementById('sentStatus').innerHTML = "Email Failed to Send..."
      }
  })
}

function resetForm(){
  document.getElementById('contact-form').reset();
}

function resetSend() {
  document.getElementById('sentStatus').innerHTML = " "
}

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/"
        style={{ textAlign: "center" }}
      >
        HouseWork
      </a>
      <div id="loginSignUp" style={{ float: "right" }}>
        <button className="btn btn-light" data-toggle="modal" data-target="#modal-invite" id="invite" style={{ float: "left" }}>Invite Your House Mates!</button>
      </div>

      {/* modal to sign up */}
      <div className="modal fade" id="modal-sign-up" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  <label htmlFor="houseNameSU">House Name</label>
                  <input type="text" className="form-control" id="houseNameSU" aria-describedby="houseHelp" placeholder="Enter House Name"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="inputPasswordSU">Password</label>
                  <input type="password" className="form-control" id="inputPasswordSU" placeholder="Password"></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary radius" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary radius" id="enter">Start Organizing!</button>
            </div>
          </div>
        </div>
      </div>

      {/* modal to log in */}
      <div className="modal fade" id="modal-log-in" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  <label htmlFor="houseName">Existing House Name</label>
                  <input type="text" className="form-control" id="houseName" aria-describedby="houseHelp" placeholder="Enter Existing House Name"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
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

      {/* modal to send email invites */}
      <div className="modal fade" id="modal-invite" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Invite Your House To Join!</h5>
              <button type="button" onClick={resetSend} className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <h3 id="sentStatus"> </h3>
              </div>
              <form id="contact-form" onSubmit={handleSend.bind(this)} method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" id="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
