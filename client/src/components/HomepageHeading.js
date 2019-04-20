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
          fontSize: mobile ? '3em' : '6em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '.5em' : '1.5em',
          color: '#06d2d2',
          letterSpacing: '5px'
        }}
      />
      <Header
        as='h2'
        content='We help you make your house work.'
        inverted
        style={{
          fontSize: mobile ? '1em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '1.0em' : '1.5em',
          marginBottom: mobile ? '2.5em': '2.0em'
        }}
      />
      <Link to="/register">
      <Button inverted color='black' size='big' onClick={this.handleloginClick}>
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