import React, { Component } from 'react'
import {
  Container,
  Image,
  Menu,
  Container,
  Link
} from 'semantic-ui-react';

export default class Menu extends Component {
  handlelogoutClick = () => {
    Cookies.remove('token');
  }

  render() {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' circular src={`require(${logo})`} />
            HouseWork
          </Menu.Item>
          <Menu.Item as='a' href="/rooms" >Rooms</Menu.Item>
          <Menu.Item as='a' href="/tasks">Tasks</Menu.Item>
          <Menu.Item position='right' style={{ marginBottom: '-19px' }}>
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