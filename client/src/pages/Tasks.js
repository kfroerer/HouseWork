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

const setTaskStyling = ({ date }) => {
    const now = new Date();
    const dueAlert = moment.duration({ from: now, to: date }).asHours();
    if (dueAlert < 0) {
        return { backgroundColor: '#FF5E0080', border: 'none', paddingTop: '10px'};
    } else if (dueAlert < 24) {
        return { backgroundColor: '#FFBB0080', border: 'none', paddingTop: '10px'};
    }
    return { backgroundColor: '#00CCCC80', border: 'none', paddingTop: '10px'};
}

const setFontStyling = ({ date }) => {
    const now = new Date();
    const dueAlert = moment.duration({ from: now, to: date }).asHours();
    if (dueAlert < 24) {
        return { color: 'white' };
    } 
    return { color: 'white' };
}

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

    loadTasks = () => {
        API.getTasksByRoom(this.props.match.params.id)
            .then(res => {
                this.setState({
                    tasks: res.data,
                    title: "",
                    owner: "",
                    description: "",
                    date: "",
                    frequency: ""
                })
            })
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

    mapTasks = () => this.state.tasks.map(task => (
        <ListItem key={task.id}>
            <strong>
                <div className="card" style={setTaskStyling(task)}>
                    <div className="container">
                        <div className="col-sm-10">
                            <Link to={"/tasks/" + task.id}>
                                <div className="row" style={setFontStyling(task)}>
                                    <div className="col-sm">
                                        {task.title}
                                    </div>
                                    <div className="col-sm" >
                                        {moment(task.date).endOf('day').fromNow()}
                                    </div>
                                    <div className="col-sm">
                                        {task.owner}
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-2" >
                            <DeleteBtn onClick={() => this.deleteTask(task.id)} />
                        </div>
                    </div>
                </div>
            </strong>

        </ListItem>
    ))

    renderForm = () => (
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
    )

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
                        {this.mapTasks()}
                    </List>
                ) : (
                        <h3 style={{ paddingTop: "10px", paddingBottom: "10px" }}>Looks Like You Have No Tasks Scheduled Here!</h3>
                    )}

                {/* form for creating a new task, figuring this should be a modal eventually  */}
                {this.renderForm()}
            </Container>
        );
    }
}

export default Task;