import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import { Link } from 'react-router-dom';

import API from '../utils/API';
import Cookies from 'js-cookie';
import { Container } from "../components/Grid";

export default class styledLogin extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          authenticated: false
        };
      }
  
      validateForm = () => {
          return this.state.email.length > 0 && this.state.password.length > 0;
      }
  
      handleChange = event => {
        console.log(event.target.id, event.target.value)
          this.setState({
              [event.target.id]: event.target.value
          });
      };
  
      handleLogin = async (event) => {
        event.preventDefault();
        const {username, password} = this.state;
        const { isAuthenticated, history } = this.props;
        API.authUser({ username, password, history })
          .then(data => data.data)
          .then(data => {
              Cookies.set('token', data.token);
              //make conditional
                isAuthenticated();
                history.push('/rooms');
          })
          .catch(err => console.log('Login failed!', err));
    }
  
  render() {
    return (
        
    <MDBContainer style={{ paddingTop: "2%"}}>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h2 className="my-3" style={{color: "white", marginLeft: "58px"}}>
                  <MDBIcon icon="lock" /> Login:
                </h2>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Type your username"
                    id="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    icon="envelope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your password"
                    id="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="amber-darken-3"
                  className="mb-3"
                  type="submit"
                  onSubmit={this.handleLogin}
                >
                  Login
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member? <Link to="/register"><MDBBtn color="amber-darken-3">Sign Up</MDBBtn></Link></p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  
  );
};
}
