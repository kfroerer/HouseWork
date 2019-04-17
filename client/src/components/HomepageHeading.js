import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class HomepageHeading extends Component {


    render() {
        const  {mobile } = this.props
    return (    
    <Container text style={{backgroundImage: "../assets/images/kitchen.jpg"}}>
      <Header
        as='h1'
        content='HouseWork'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content='We help you make your house work.'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <Link to="/register">
      <Button primary size='huge' onClick={this.handleClick}>
        Get Started
        <Icon name='right arrow' />
      </Button>
      </Link>
    </Container>
  )
    }
}
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool
  }
  
  export default HomepageHeading;