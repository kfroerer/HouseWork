import React, { Component} from "react";
import { Button, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from '../utils/API';
import Cookies from 'js-cookie';
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


export default class Login extends Component {
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
          <Container fluid>
          <Jumbotron>
          <h1>Please log in
          </h1>
          </Jumbotron>

          <div className="Login">
          
            <Form onSubmit={this.handleLogin}>
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
                  placeholder="password"
                  type="password"
                  id="password"
                />
              </FormGroup>
              <Button
                block
                bsSize="large"
                // disabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>
            </Form>
          </div>
          </Container>
        );
      }
}
    