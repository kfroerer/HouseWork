import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Description extends Component {
  state = {
    task: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getTask(this.props.match.params.id)
      .then(res => this.setState({ task: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>
            {this.state.task.title}
          </h1>
        </Jumbotron>
        <article>
          <p>
            {this.state.task.description}
          </p>
        </article>
        <Link to="/">← Back to Room</Link>
      </Container>
    );
  }
}

export default Description;
