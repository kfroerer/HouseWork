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
    description: "",
    status: false
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getTask(this.props.match.params.id)
      .then(res => {
        this.setState({ task: res.data });
        const { title, owner, date, frequency, description, roomId, status} = this.state.task;
        this.setState({ title, owner, date, frequency, description, roomId, status});
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  completeTask = () => {
    let newDate;
    let completeStatus;
    const { date, frequency, task } = this.state
    if (this.state.frequency === "Daily") {
      newDate = moment(date).add(1, 'day').format('YYYY-MM-DD');
    } else if (frequency === "Weekly") {
      newDate = moment(date).add(7, 'day').format('YYYY-MM-DD');
    } else if (frequency === "Bi-Weekly") {
      newDate = moment(date).add(14, 'day').format('YYYY-MM-DD');
    } else if (frequency === "Monthly") {
      newDate = moment(date).add(1, 'month').format('YYYY-MM-DD');
    } else if (frequency === "Annually") {
      newDate = moment(date).add(1, 'year').format('YYYY-MM-DD');
    } else {
      completeStatus = true;
    }
    API.updateTask(task.taskId, {
      status: completeStatus,
      date: newDate
    })
    .then(window.location.reload());
  }

  handleFormSubmit = event => {
    const { task, title, owner, date, frequency, description } = this.state;
    if (title && owner && date) {
      API.updateTask(task.taskId, {
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
    const isComplete = this.state.status;
    return (
      <Container fluid>
        <Jumbotron>
          <h1>
            {this.state.title}
          </h1>
        </Jumbotron>

        <Link to={"/rooms/" + this.state.roomId} style={{ color: "#FF5E00" }}>← Back to Tasks</Link>

        <div className="card" style={{ marginBottom: "1rem", marginTop: "1rem" }}>
          <div className="card-body">
            <h3 className="card-title">Description</h3>
            <p className="card-text">{this.state.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Due {moment(this.state.date).endOf('day').fromNow()}</li>
            <li className="list-group-item">Date: {moment(this.state.date).format('LL')}</li>
            <li className="list-group-item">Owned By {this.state.owner}</li>
            <li className="list-group-item">This Task is {(!isComplete) ? (
              "Reoccuring"
            ) : (
              "Complete"
            )}</li>
          </ul>
          <div className="card-body">
            <button type="button" onClick={this.completeTask} className="btn btn-light" id="complete" style={{ backgroundColor: "#00cccc", color: "white" }}>Complete!</button>
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
