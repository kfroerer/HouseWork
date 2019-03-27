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
    frequency: ""
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getTask(this.props.match.params.id)
      .then(res => this.setState({ task: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { title, owner, date, frequency, description } = this.state;
    if (this.state.title && this.state.owner && this.state.date) {
        API.updateTask(this.state.task.id, {
            title,
            owner,
            date,
            frequency,
            description,
        })
            .then(({ data }) => this.getTask(data))
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

        <Link to={"/rooms/" + this.state.task.roomId}>← Back to Tasks</Link>

        <div class="card" style={{ marginBottom: "1rem", marginTop: "1rem" }}>
          <div class="card-body">
            <h5 class="card-title">Description</h5>
            <p class="card-text">{this.state.task.description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Due {moment(this.state.task.date).startOf('day').fromNow()}</li>
            <li class="list-group-item">Date: {moment(this.state.task.date).format('LL')}</li>
            <li class="list-group-item">Owned By {this.state.task.owner}</li>
          </ul>
          <div class="card-body">
            <button type="button" className="btn btn-light" data-toggle="modal" data-target="#modal-edit" id="editTaskbtn" uk-toggle style={{ float: "right", backgroundColor: "#FF5E00", color: "white" }}>Edit Task</button>
          </div>
        </div>

        <div className="modal fade" id="modal-edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    placeholder={this.state.task.title}
                  />
                  <Input
                    value={this.state.owner}
                    onChange={this.handleInputChange}
                    name="owner"
                    placeholder={this.state.task.owner}
                  />
                  <Date
                    value={this.state.date}
                    onChange={this.handleInputChange}
                    name="date"
                    placeholder={moment(this.state.task.date).format('MM/DD/YYYY')}
                  />
                  <Frequency
                    value={this.state.frequency}
                    onChange={this.handleInputChange}
                    name="frequency"
                    placeholder={this.state.task.frequency}
                  />
                  <TextArea
                    value={this.state.synopsis}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder={this.state.task.description}
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
