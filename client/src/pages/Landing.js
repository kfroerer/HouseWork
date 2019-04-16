import React, { Component } from "react";
import { Button, Form, FormGroup, FormControl, FormLabel, ButtonToolbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Row, Slide, Slider, Caption} from 'react-materialize';
import { Container } from "../components/Grid";
import bathroom from '../assets/images/bathroom.jpg'

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
          <Slider fullscreen={true}>
            <Slide>
              <li>
                <img src={bathroom}/>
              </li>
              <Caption> 
                <h1>Welcome To HouseWork</h1>
                <h3> We help you make your house work </h3>
              </Caption>
            </Slide>
          </Slider>
       
          
        <div>
        <Row style={{alignContent: "center"}}>
        <ButtonToolbar >
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
        </Row>
        </div>
        

       </Container>
       
        );
      }
}
    