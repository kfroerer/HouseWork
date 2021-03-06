import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import HomepageHeading from './HomepageHeading';
import kitchen from '../assets/images/kitchen2.jpg';

class DesktopContainer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    getWidth = () => {
        const isSSR = typeof window === 'undefined'
      
        return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
      }

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
      const { fixed } = this.state
  
      return (
        <Responsive getWidth={this.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em', backgroundImage: `url(${kitchen})`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}
              vertical
            >
              <Menu style={{marginTop: "-19px"}}
                fixed
                inverted
                // pointing={!fixed}
                // secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item as='a' active>
                    Home
                  </Menu.Item>
                  <Menu.Item as='a'>Rooms</Menu.Item>
                  <Menu.Item as='a'>Tasks</Menu.Item>
                  <Menu.Item position='right' style={{marginBottom: '-19px'}}>
                    <Link to="/login">
                    <Button basic inverted color='teal' 
                      onClick={this.props.handleloginClick}>
                      Log in
                    </Button>
                    </Link>

                    <Link to="/register">
                    <Button basic inverted color='teal'  primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Register
                    </Button>
                    </Link>
                  </Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading></HomepageHeading>
            </Segment>
            {/* <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
              >
              <HomepageHeading />

            </Segment> */}
          </Visibility>
  
          {children}
        </Responsive>
      )
    }
  }
  
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }

  export default DesktopContainer;