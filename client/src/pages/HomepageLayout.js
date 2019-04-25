//need to separate into individual files: HomepageHeading, DesktopContainer, MobileContainer 
//then change homepagelayout
//homepageHeading needs logic for the buttons
//add invite housemates option in heading

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MobileContainer from '../components/MobileContainer';
import DesktopContainer from '../components/DesktopContainer';
import Footer from '../components/Footer';
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */


export default class HomepageLayout extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      authenticated: null
    }
    
}

handleloginClick = (event) => {
  event.preventDefault();
  const { history } = this.props;
  history.push('/login');
}

handleregisterClick = event => {
  event.preventDefault();
  this.props.history.push("/register");
}



render() {
  const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  )
  
  ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  }
  return (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Keep Track So You Don't Have To.
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Tired of falling behind on deep cleaning? We've got you covered. 
              We help remind you about day-to-day, weekly, bi-weekly, monthly, and 
             even yearly tasks so your house will always be clean! No dust bunnies here!
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Team Work Makes the Dream Work
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              No one wants to do this alone. With HouseWork, it's easy to add 
              and assign tasks to your roommates, partner, or children. With coming
              features like allowance tracking, they'll be just as excited as you are. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={7}>
            <Image src={require('../assets/images/livingroom.jpg')} size="huge" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Link to="/register">
            <Button onClick={()=> this.handleregisterClick} secondary size='huge'>Try It Out</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I never have to guess what needs to be done!"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            <b>Joshua</b> 
            <p>-PhD Student</p></p>
          </Grid.Column>
          
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I love being able to assign others to help."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <b>Mary</b> 
              <p>-Salt Lake City, Utah</p>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Why HouseWork?</a>
        </Divider>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Features You Can Expect
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Use our pre-built default settings or create your own. Each task has a
          recurring frequency and will automatically reset once marked complete. 
          Task lists are also arranged and color coded for priority. Never guess 
          what needs to be done next!
        </p>
      </Container>
    </Segment>
      
    <Footer />
  </ResponsiveContainer>
  )
}
}