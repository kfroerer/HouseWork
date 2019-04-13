import React, { Component } from "react";
import { Button, Form, FormGroup, FormControl, FormLabel, ButtonToolbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import './style.css'

export default class Landing extends Component {
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
                 
        <div className="landingPage">
        <ButtonToolbar>
          <Link to="/register">
          <Button variant="outline-primary" size="lg">
            Register 
          </Button>
          </Link>
          <Link to="/login">
          <Button variant="outline-primary" size="lg">
            Login
          </Button>
          </Link>
        </ButtonToolbar>
      

          </div>
       </Container>
       
        );
      }
}
    