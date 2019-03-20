import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import rooms from "../rooms.json";

class Task extends Component {
    state = {
        room: {},
        tasks: {}
    };
    // When this component mounts, grab the room with the _id of this.props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getRoom(this.props.match.params.id)
            .then(res => this.setState({ room: res.data }))
            .catch(err => console.log(err));
    }

    loadTasks = () => {
        API.getTasks()
            .then(res =>
                this.setState({ tasks: res.data, title: "", author: "", synopsis: "" })
            )
            .catch(err => console.log(err));
    };

    deleteTask = id => {
        API.deleteTask(id)
            .then(res => this.loadRooms())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <Container fluid>

                <Jumbotron>
                    <h1>
                        {this.state.room.title} Tasks
              </h1>
                </Jumbotron>
                <Link to="/">← Back to Rooms</Link>
                {/* Chore list begins */}
                {this.state.tasks.length ? (
                    <List>
                        {this.state.tasks.map(task => (
                            <ListItem key={task._id}>
                                <Link to={"/tasks/" + task._id}>
                                    <strong>
                                        {task.title}
                                    </strong>
                                </Link>
                                <DeleteBtn onClick={() => this.deleteTask(task._id)} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}

                {/* form for creating a new task, figuring this should be a modal eventually  */}
                <form>
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Task Name (required)"
                    />
                    <Input
                        value={this.state.owner}
                        onChange={this.handleInputChange}
                        name="owner"
                        placeholder="Owner (required)"
                    />
                    <Input
                        value={this.state.date}
                        onChange={this.handleInputChange}
                        name="date"
                        placeholder="Date (required)"
                    />
                    <TextArea
                        value={this.state.synopsis}
                        onChange={this.handleInputChange}
                        name="description"
                        placeholder="Description (Optional)"
                    />
                    <FormBtn
                        disabled={!(this.state.author && this.state.title)}
                        onClick={this.handleFormSubmit}
                    >
                        Add Chore!
              </FormBtn>
                </form>
            </Container>
        );
    }
}

export default Task;