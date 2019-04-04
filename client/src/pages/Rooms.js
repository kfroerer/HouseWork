import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Room from "../components/Room";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import rooms from "../rooms.json";
import { Input,  FormBtn } from "../components/Form";



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
  };

  renderMemberForm = () => (
        
    <form>
        <label htmlFor="memberName">Add Housemates To Your House</label>
        <Input
            value={this.state.newMemberName}
            onChange={this.handleInputChange}
            name="newMemberName"
            placeholder="New Housemate's Name"
            id="memberName"
        />
        <FormBtn
            disabled={!(this.state.newMemberName)}
            onClick={this.handleMemberFormSubmit}
        >
            Add Housemate!
        </FormBtn>
    </form>
)

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>PICK A ROOM!</h1>
        </Jumbotron>

        {/* Room Display */}
        <div style={{ overflow: "auto" }}>
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
        </div>

        <div className="container">
          {this.renderMemberForm()}
        </div>

      </Container>
    );
  }
}

export default Rooms;
