import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Room from "../components/Room";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import rooms from "../rooms.json";


class Rooms extends Component {
  state = {
    rooms,
    title: "",
    author: "",
    synopsis: ""
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveRoom({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadRooms())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Pick A Room!</h1>
        </Jumbotron>

        {/* Room Display */}
        {this.state.rooms.map(room => (
          <Link key={room.id} to={"/rooms/" + room.id}>
            <Room
              cardClicked={this.cardClicked}
              id={room.id}
              key={room.id}
              image={room.image}
            />
          </Link>
        ))}
      </Container>
    );
  }
}

export default Rooms;
