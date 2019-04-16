import React, { Component } from "react";
import { Button, Form, FormGroup, FormControl, FormLabel, ButtonToolbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Row, Slide, Slider, Caption} from 'react-materialize';
import { Container } from "../components/Grid";

export default class Landing extends Component {
    constructor(props) {
      super(props);
    }
    
    onClickRegister = event => {
      event.preventDefault();
      this.props.history.push("/register");
    }

    onClickLogin = event => {
      event.preventDefault();
      this.props.history.push("/login");
    }

    render() {
        return (
                   
          <Row className="carouselContainer">
          <Slider fullscreen={true}>
            <Slide>
              <li>
                <img src={require('../assets/images/house.jpg')}/>
              </li>
              <Caption> 
                <h1>Welcome To HouseWork</h1>
                <h3> We help you make your house work </h3>
              </Caption>
            </Slide>
          </Slider>
          <Slider fullscreen={true}>
            <Slide>
              <li>
                <img src={require('../assets/images/kitchen.jpg')}/>
              </li>
              <Caption> 
                <h1>Welcome To HouseWork</h1>
                <h3> We help you make your house work </h3>
              </Caption>
            </Slide>
          </Slider>
          </Row>

                    
        
        // <Row className="actionButtons">
        // <ButtonToolbar >
        //   <Link to="/register">
        //   <Button variant="outline-primary" size="lg">
        //     Register 
        //   </Button>
        //   </Link>
        //   <Link to="/login">
        //   <Button variant="outline-primary" size="lg">
        //     Login
        //   </Button>
        //   </Link>
        // </ButtonToolbar>
        // </Row>
        
        

       
        );
      }
}
    