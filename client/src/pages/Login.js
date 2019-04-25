import React, { Component } from "react";
// import { Button, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Container } from "../components/Grid";
// import { Row, Col, Card } from 'react-materialize';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import API from '../utils/API';
import Cookies from 'js-cookie';
import PageMenu from '../components/PageMenu';
// import "./style.css"

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
    const { username, password } = this.state;
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
          <Header as='h2' color='white' textAlign='center'>
            Log-in to your account
          </Header>
          <Form size='large' onSubmit={this.handleLogin}>
            <Segment stacked>
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
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
                id="password"
              />
  
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            <p>New to us?</p>   
            <Link to="/register">
            <Button color='teal' size='medium'>Sign Up</Button>
            </Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )




      // <Container fluid>
      //   <Row>
      //     <Col m={6} s={12}>
      //       <Card className="white" textClassName="teal-text" title=" Please login">


      //         <div className="Login">

      //           <Form onSubmit={this.handleLogin}>
      //             <FormGroup controlId="username" bsSize="large">
      //               <FormLabel>Username</FormLabel>
      //               <FormControl
      //                 value={this.state.username}
      //                 onChange={this.handleChange}
      //                 id="username"
      //                 placeholder="username"
      //                 type="text"
      //               />
      //             </FormGroup>

      //             <FormGroup controlId="password" bsSize="large">
      //               <FormLabel>Password</FormLabel>
      //               <FormControl
      //                 value={this.state.password}
      //                 onChange={this.handleChange}
      //                 placeholder="password"
      //                 type="password"
      //                 id="password"
      //               />
      //             </FormGroup>
      //             <Button
      //               block
      //               bsSize="large"
      //               // disabled={!this.validateForm()}
      //               type="submit"
      //             >
      //               Login
      //         </Button>
      //           </Form>
      //         </div>
      //       </Card>
      //     </Col>
      //   </Row>

      // </Container>
      }
}
