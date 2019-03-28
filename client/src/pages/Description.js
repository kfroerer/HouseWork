import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import moment from 'moment';
import { Input, TextArea, FormBtn, Date, Frequency } from "../components/Form";

class Description extends Component {
  state = {
    task: {},
    routeId: null,
    title: "",
    owner: "",
    date: "",
    frequency: "",
    description: ""
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getTask(this.props.match.params.id)
      .then(res => {
        this.setState({ task: res.data });
        const { title, owner, date, frequency, description, roomId } = this.state.task;
        this.setState({ title, owner, date, frequency, description, roomId });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    const { title, owner, date, frequency, description } = this.state;
    if (this.state.title && this.state.owner && this.state.date) {
      API.updateTask(this.state.task.id, {
        title,
        owner,
        date,
        frequency,
        description,
      })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>
            {this.state.task.title}
          </h1>
        </Jumbotron>

        <Link to={"/rooms/" + this.state.task.roomId} style={{ color: "#FF5E00" }}>← Back to Tasks</Link>

        <div className="card" style={{ marginBottom: "1rem", marginTop: "1rem" }}>
          <div className="card-body">
            <h3 className="card-title">Description</h3>
            <p className="card-text">{this.state.task.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Due {moment(this.state.task.date).endOf('day').fromNow()}</li>
            <li className="list-group-item">Date: {moment(this.state.task.date).format('LL')}</li>
            <li className="list-group-item">Owned By {this.state.task.owner}</li>
          </ul>
          <div className="card-body">
            <button type="button" className="btn btn-light" data-toggle="modal" data-target="#modal-edit" id="editTaskbtn" style={{ float: "right", backgroundColor: "#FF5E00", color: "white" }}>Edit Task</button>
          </div>
        </div>

        <div className="modal fade" id="modal-edit" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Task</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                  />
                  <Input
                    value={this.state.owner}
                    onChange={this.handleInputChange}
                    name="owner"
                  />
                  <Date
                    value={this.state.date}
                    onChange={this.handleInputChange}
                    name="date"
                  />
                  <Frequency
                    value={this.state.frequency}
                    onChange={this.handleInputChange}
                    name="frequency"
                  />
                  <TextArea
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                  />
                  <div className="modal-footer">
                    <FormBtn
                      disabled={!(this.state.owner && this.state.title && this.state.date)}
                      onClick={this.handleFormSubmit}
                    >
                      Update Task!
                    </FormBtn>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Description;
