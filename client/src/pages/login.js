import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import "./Login.css";
import API from "../utils/API";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",  
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.email.length > 0 && this.state.password.length > 0 ;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    //api authenticate user
    this.props.history.push("/")

  }
//do I need a method=POST on this form???? 
  render() {
    return (
      <div className="Login">
      
        <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="username" bsSize="large">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              type="test"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group><Form.Group controlId="email" bsSize="large">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}