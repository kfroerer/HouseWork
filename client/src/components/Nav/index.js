import React, { Component } from "react";
import { Navbar, Button, NavItem, Modal, TextInput, Toast } from 'react-materialize';
import InviteButton from "../InviteButton";
import Cookies from 'js-cookie';
import "./style.css";


export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };
  }

  handlelogout = () => {
    const { history } = this.props;
    Cookies.remove('token');
    this.setState({
      autheticated: false
    })
    alert("You've logged out");
    history.push('/landing');
  }

  logoutButton = () => {
    return (
      <Toast onClick={this.handlelogout} options={{ html: "You've logged out" }} >Log Out</Toast>
    )
  }

  handleloginClick = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/login');

  }

  loginButton = () => {
    return (
      <Button onClick={this.handleloginClick} >Log In</Button>
    )
  }



  render() {
    const isAuthenticated = this.props.isAuthenticated;
    let button;
    if (isAuthenticated) {
      button = <logoutButton />;
    } else {
      button = <loginButton />;
    }


    return (
      <Navbar fixed="true" alignLinks="right" className="teal lighten-2">
        <InviteButton />
        <NavItem>
          {button}
        </NavItem>
      </Navbar>
    );
  }
}
