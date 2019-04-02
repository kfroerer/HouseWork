import React, { Component} from "react";
import { Button, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
const API = require('../utils/API');
const Cookies = require('js-cookie');


export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: ""
      };
    }

    validateForm () {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        API.authUser.then(data => {
            Cookies.set('token', data.token)
        })
    }

    render() {
        return (
          <div className="Login">
          
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="username" bsSize="large">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  autoFocus
                  type="test"
                  id="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                </Form.Group>
             
              <FormGroup controlId="password" bsSize="large">
                <FormLabel>Password</FormLabel>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  id="password"
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
    