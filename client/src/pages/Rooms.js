import React, { Component } from "react";
import Room from "../components/Room";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import rooms from "../rooms.json";
import { Input,  FormBtn } from "../components/Form";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import PageMenu from '../components/PageMenu';



class Rooms extends Component {
  state = {
    rooms,
    newMemberName: "",
  };

  componentDidMount() {
    this.loadRooms();
  }

  loadRooms = () => {
    API.getRooms()
      .then(res =>
        this.setState({ rooms: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteRoom = id => {
    API.deleteRoom(id)
      .then(res => this.loadRooms())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleMemberFormSubmit = event => {
    event.preventDefault();
    if (this.state.newMemberName) {
      API.saveMember({
        name: this.state.newMemberName
      })
        .then(res => this.loadRooms())
        .catch(err => console.log(err));
    }
    this.setState({newMemberName: ""})
  };

  renderMemberForm = () => (
        <Form size="small" onSubmit={this.handleMemberFormSubmit}>
        <Segment>
          <Header as='h4' color='white' textAlign='center'>
          Add Housemates To Your House
          </Header>
          <Form.Input 
            value={this.state.newMemberName}
            onChange={this.handleInputChange}
            name="newMemberName"
            placeholder="New Housemate's Name"
            id="memberName"/>
          <Button color='teal' fluid size="small">
            Add Housemate
          </Button>
        </Segment>
        
        </Form>
   
)

  render() {
    return (
      <Container fluid >
      <PageMenu style={{marginBottom: '90px'}}/>
        

        {/* Room Display */}
        <div style={{ overflow: "auto", marginTop: '120px', marginBottom: '30px', marginLeft: '45px' }}>
          {this.state.rooms.map(room => (
            <Link key={room.id} to={"/rooms/" + room.id}>
              <Room
                cardClicked={this.cardClicked}
                id={room.id}
                key={room.id}
                image={room.image}
                title={room.title}
              />
            </Link>
          ))}
        </div>

        <div className="container">
          {this.renderMemberForm()}
        </div>

      </Container>
    );
  }
}

export default Rooms;
