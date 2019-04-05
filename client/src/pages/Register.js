import React, { Component} from "react";
import { Button, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from '../utils/API';
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


export default class Register extends Component {
    constructor(props) {
      super(props);
  

      this.state = {
        username: "",  
        email: "",
        password: "",
        authenticated: false
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

    handleRegister = async event => {
      event.preventDefault();
      const {username, email, password } = this.state;
      const { history } = this.props;
      API.createHouse({
          username,
          email,
          password
      }).then(history.push('/login'))
      .catch(err => console.log('Registration failed!', err));     
     }

    render() {
        return (
          <Container fluid>
          <Jumbotron>
          <h1>Please Register
          </h1>
          </Jumbotron>

          <div className="Register">
          
            <Form onSubmit={this.handleRegister}>
            <Form.Group controlId="username" bsSize="large">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  id="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                </Form.Group>

                <Form.Group controlId="email" bsSize="large">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    autoFocus
                    type="email"
                    id="email"
                    placeholder="email"
                    value={this.state.email}
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
                disabled={!this.validateForm()}
                type="submit"
              >
                Register
              </Button>
            </Form>
          </div>
          </Container>
        );
      }
}
    