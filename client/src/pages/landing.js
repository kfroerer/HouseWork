import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Room from "../components/Room";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Login from "./login";
import Register from './register';

class Landing extends Component {
    


    render () {
        return(
            <Container fluid>
                <Jumbotron>
                    <h1>Welcome to HouseWork!</h1>
                </Jumbotron>
                    <Register></Register>
                    <Login></Login>


            </Container>
        )
    }
}

