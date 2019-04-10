import React from "react";
import { Navbar, Button, NavItem, Modal, TextInput, Toast } from 'react-materialize';
import axios from 'axios';
import Cookies from 'js-cookie';
import "./style.css";

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

function logOut() {
  Cookies.remove('token');
}


function Nav() {
  return (
    <Navbar fixed="true" alignLinks="right" className="teal lighten-2">
      <NavItem >
        <Button href='#modal-invite' className="modal-trigger">Invite Housemates</Button>

        <Modal id='modal-invite' header="Invite Housemates"> 
         
          <h3 id="sentStatus"></h3>
            <div className="row">
            <form className="col s12" id="contact-form" onSubmit={handleSend.bind(this)} method="POST">
              <div className="row">
                <div className="input-field col s6">
                  <TextInput icon="account_circle"  id="name" type="text" label="Name" />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <TextInput icon="email" id="email" type="email" label="Email" />
                </div>
              </div>

              <div className="row">
              <div className="input-field col s6">
                  <TextInput icon="message" id="message" type="text" label="Message"></TextInput>
                </div>
              </div>
            </form>
          </div>

          
        
        <Button type="submit" id="enter">Submit</Button>
        </Modal>
      </NavItem>

      <NavItem>
       <Toast onClick={logOut} options={ {html: "You've logged out"}} >Log Out</Toast>
      </NavItem>

  
    
      {/* modal to send email invites */}
      {/* <div className="modal fade" id="modal-invite" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <button type="submit" id="enter" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    
</Navbar>
  );
}

export default Nav;
