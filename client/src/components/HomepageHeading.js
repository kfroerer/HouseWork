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
    constructor(props){
      super(props)
    }

    handleregisterClick = () => {
      const { onClick: parentOnClick } = this.props;
      parentOnClick();
    }

    render() {
        const  { mobile } = this.props
    return (    
    <Container text style={{backgroundColor: 'transparent'}}>
      <Header
        as='h1'
        content='HouseWork'
        inverted
        style={{
          fontSize: mobile ? '3.5em' : '7em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '.5em' : '1.5em',
          color: '#06d2d2',
          letterSpacing: '4px',
          textShadow: '2px 2px black',
          paddingBottom: '80px'
        }}
      />
      <Header
        as='h2'
        content='We help you make your house work.'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '1.0em' : '0.5em',
          marginBottom: mobile ? '2.5em': '2.0em',
          textShadow: '1px 1px black',
        }}
      />
      <Link to="/register">
      <Button inverted color='black' size='big' onClick={this.handleloginClick} style={{marginBottom: '5px'}}>
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