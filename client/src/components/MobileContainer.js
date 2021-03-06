import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import HomepageHeading from './HomepageHeading';
import bigImage from '../assets/images/livingroom.jpg';
import kitchen from '../assets/images/kitchen2.jpg';

export default class MobileContainer extends Component {
  constructor(props){
    super(props)
  
     this.state = {}
  }


    getWidth = () => {
        const isSSR = typeof window === 'undefined'
      
        return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
      }

    handleSidebarHide = () => this.setState({ sidebarOpened: false })
  
    handleToggle = () => this.setState({ sidebarOpened: true })

    handleloginClick = () => {
      const { onClick: parentOnClick } = this.props;
      parentOnClick();
    }

    handleregisterClick = () => {
      const { onClick: parentOnClick } = this.props;
      parentOnClick();
    }


    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Responsive
          as={Sidebar.Pushable}
          getWidth={this.getWidth}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
          <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Rooms</Menu.Item>
            <Menu.Item as='a'>Tasks</Menu.Item>

            <Link to="/login">
            <Menu.Item   basic inverted color='teal' 
              onClick={this.props.handleloginClick}>Log in</Menu.Item>
            </Link>
            <Link to="/register">
            <Menu.Item basic inverted color='teal'
              onClick={this.handleregisterClick}>Register</Menu.Item>
            </Link>
          </Sidebar>
  
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 50, padding: '1em 0em', backgroundImage: `url(${kitchen})`, backgroundPosition: 'center bottom'}}
              vertical
            >
              <Container>
                <Menu pointing secondary size='large' style={{background: 'transparent'}}>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon circular color="white" name='sidebar' style={{color: 'black', marginBottom: '7px'}} />
                  </Menu.Item>
                  <Menu.Item position='right' style={{marginBottom: '-15px'}}>
                    <Link to="/login">
                    <Button as='a' secondary style={{marginRight: '-15px', color: '#06d2d2'}}
                    onClick={this.props.handleloginClick}>
                      Log in
                    </Button>
                    </Link>
                    <Link to="/register">
                    <Button as='a' secondary style={{ marginLeft: '0.5em', marginRight: '-20px', color: '#06d2d2' }}
                      onClick={this.props.handleregisterClick}>
                      Register
                    </Button>
                    </Link>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile/>
            </Segment>
            

  
            {children}
          </Sidebar.Pusher>
        </Responsive>
      )
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }