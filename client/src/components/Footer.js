import React from 'react';
import {Segment, Container, Grid, List, Header } from 'semantic-ui-react';

const Footer = () => {

return(

<Segment attached="bottom" inverted vertical style={{ padding: '1.5em 0em', height: "140px" }}>
<Container>
  <Grid>
    <Grid.Row>
    <Grid.Column width={12}>
        <Header as='h4' inverted>
          Contributors
        </Header>
        <List horizontal>
          <List.Item>
            {/* <Image  /> */}
            <List.Content inverted>
              <List.Header style={{color: 'white', fontSize: "1.5rem", marginBottom: "5px"}}>
                Kendra Jones
                </List.Header>
                Full-Stack Developer
              </List.Content> 
            </List.Item>
          <List.Item>
             {/* <Image  /> */}
             <List.Content>
              <List.Header style={{color: 'white', fontSize: "1.5rem", marginBottom: "5px"}}>
                Kellam Witherington
                </List.Header>
                Front-end Developer
              </List.Content> 
           </List.Item>
           <List.Item>
             {/* <Image  /> */}
             <List.Content>
              <List.Header style={{color: 'white', fontSize: "1.5rem", marginBottom: "5px"}}>
                Victoria Ramirez
                </List.Header>
                Backend Developer
              </List.Content> 
           </List.Item>

        </List>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Container>
</Segment>
)
}

export default Footer