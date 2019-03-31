import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, Date, Frequency } from "../components/Form";
import rooms from "../rooms.json";
import moment from 'moment';

class Task extends Component {
    state = {
        room: {},
        tasks: {},
        routeId: null,
        title: "",
        owner: "",
        date: "",
        frequency: ""
    };
    // When this component mounts, grab the room with the _id of this.props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    componentDidMount() {
        const routeId = Number(this.props.match.params.id);
        const room = rooms.find(room => room.id === routeId);
        this.setState({ room, routeId });
        this.loadTasks();
    }

    loadTasks = (newTask) => {
        const { routeId } = this.state;
        console.warn('fire load tasks', routeId);
        API.getTasksByRoom(this.props.match.params.id)
            .then(res => {
                console.warn('load res', res);
                this.setState({
                    tasks: res.data,
                    title: "",
                    owner: "",
                    description: "",
                    date: "",
                    frequency: ""
                })
            }
            )
            .catch(err => console.log('An error has occured', err));
    };

    deleteTask = id => {
        API.deleteTask(id)
            .then(res => this.loadTasks())
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
        const { title, owner, date, frequency, description, room: { id: roomId } } = this.state;
        if (this.state.title && this.state.owner && this.state.date) {
            API.saveTask({
                title,
                owner,
                date,
                frequency,
                description,
                roomId,
            })
                .then(({ data }) => this.loadTasks(data))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>

                <Jumbotron>
                    <h1>
                        {this.state.room.title} Tasks
                    </h1>
                </Jumbotron>
                <Link to="/rooms" style={{ color: "#FF5E00" }}>← Back to Rooms</Link>
                {/* Chore list begins */}
                {this.state.tasks.length ? (
                    <List>
                        {this.state.tasks.map(task => (                            
                            <ListItem key={task.id}>
                                <Link to={"/tasks/" + task.id}>
                                    <strong>
                                        <div className="container" style={{backgroundColor: ""}}>
                                            <div className="row">
                                                <div className="col-sm">
                                                    {task.title} 
                                                </div>
                                                <div className="col-sm">
                                                    {moment(task.date).endOf('day').fromNow()}
                                                </div>
                                                <div className="col-sm">
                                                    {task.owner}
                                                </div>
                                            </div>
                                        </div>
                                    </strong>
                                </Link>
                                <DeleteBtn onClick={() => this.deleteTask(task.id)} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3 style={{ paddingTop: "10px", paddingBottom: "10px" }}>Looks Like You Have No Tasks Scheduled Here!</h3>
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
                        value={this.state.synopsis}
                        onChange={this.handleInputChange}
                        name="description"
                        placeholder="Description (Optional)"
                    />
                    <FormBtn
                        disabled={!(this.state.owner && this.state.title && this.state.date)}
                        onClick={this.handleFormSubmit}
                    >
                        Add Task!
              </FormBtn>
                </form>
            </Container>
        );
    }
}

export default Task;