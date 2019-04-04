import React, { Component } from "react";
import { Button, Form, FormGroup, FormControl, FormLabel, ButtonToolbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";

export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: "",
        loginModalShow: false,
        registerModalShow: false,
        authenticated: null
      };

      // this.routeChange = this.routeChange.bind(this);

    }

    validateForm () {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    
    onClickRegister = event => {
      event.preventDefault();
      this.props.history.push("/register");
      //render register page
      

    }

    // routeLogin () {
    //   let path = '/login';
    //   this.props.history.push(path);
    // }

    // routeRegister () {
    //   let path = '/register';
    //   this.props.history.push(path)
    // }
    render() {
        return (
          <Container fluid>
        <Jumbotron>
          <h1>Welcome to HouseWork!
            Please log in or register.
          </h1>
        </Jumbotron>
          
        <div>
        <ButtonToolbar>
          <Link to="/register">
          <Button variant="outline-primary" size="lg">
            Register 
          </Button>
          </Link>
          <Button variant="outline-primary" size="lg">
            Login
          </Button>
        </ButtonToolbar>
        </div>


       </Container>
       
        );
      }
}
    