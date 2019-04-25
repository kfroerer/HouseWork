import React, { Component} from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Row, Col, Card } from 'react-materialize'; 
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import PageMenu from '../components/PageMenu';
import { Link } from 'react-router-dom';

import API from '../utils/API';
import "./style.css"


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
    

    // validateForm () {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // }

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
        <div className='login-form'>
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `} </style>
      
        <PageMenu />
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large' onSubmit={this.handleRegister}>
              <Segment stacked>
            <Header as='h2' color='white' textAlign='center' style={{marginBottom:'20px', marginTop: '10px'}}>
              Create your account
            </Header>
                <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder="Username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                id="username"
                 />
                <Form.Input
                fluid
                icon='mail'
                iconPosition='left'
                placeholder='Email'
                type='text'
                value={this.state.password}
                onChange={this.handleChange}
                id="email"
              />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="password"
                />
    
                <Button color='teal' fluid size='large'>
                  Register
                </Button>
              </Segment>
            </Form>
            <Message>
              <p>Already have an account?</p>   
              <Link to="/login">
              <Button color='teal' size='medium'>Login</Button>
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
      }
    }







      //     <Container fluid>
      //     <Row>
      //       <Col m={6} s={12}>
      //       <Card className="white" textClassName="teal-text" title="Register">
      //       <div className="Register">
          
      //       <Form onSubmit={this.handleRegister}>
      //       <Form.Group controlId="username" bsSize="large">
      //           <Form.Label>Username</Form.Label>
      //           <Form.Control
      //             autoFocus
      //             type="text"
      //             id="username"
      //             placeholder="username"
      //             value={this.state.username}
      //             onChange={this.handleChange}
      //           />
      //           </Form.Group>

      //           <Form.Group controlId="email" bsSize="large">
      //               <Form.Label>Email</Form.Label>
      //               <Form.Control
      //               autoFocus
      //               type="email"
      //               id="email"
      //               placeholder="email"
      //               value={this.state.email}
      //               onChange={this.handleChange}
      //               />
      //           </Form.Group>

      //         <FormGroup controlId="password" bsSize="large">
      //           <FormLabel>Password</FormLabel>
      //           <FormControl
      //             value={this.state.password}
      //             onChange={this.handleChange}
      //             placeholder="password"
      //             type="password"
      //             id="password"
      //           />
      //         </FormGroup>
      //         <Button
      //           block
      //           bsSize="large"
      //           disabled={!this.validateForm()}
      //           type="submit"
      //         >
      //           Register
      //         </Button>
      //       </Form>
      //     </div>
      //     </Card>
      //       </Col>
      //       </Row>

      //     </Container>
      //   );
      // }

    