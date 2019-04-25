import React, { Component } from 'react'
import {
  Container,
  Image,
  Menu,
  Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from '../assets/images/logo.jpg'


export default class PageMenu extends Component {
  handlelogoutClick = () => {
    Cookies.remove('token');
  }

  render() {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' href="/" header>
            <Image size='mini' circular src={`require(${logo})`} />
            HouseWork
          </Menu.Item>
          <Menu.Item as='a' href="/rooms" >Rooms</Menu.Item>
          <Menu.Item as='a' href="/tasks">Tasks</Menu.Item>
          <Menu.Item position='right' 
          // style={{ marginBottom: '-10px' }}
          >
            <Link to="/">
              <Button basic inverted color='teal' >
                Logout
                            </Button>
            </Link>
          </Menu.Item>
        </Container>

      </Menu>
    )
  }
}