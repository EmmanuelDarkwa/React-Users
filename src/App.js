import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
// import User from "./components/User";
import Users from "./components/Users";
import AddUserForm from "./components/AddUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Nancy Sarkodie",
          email: "nancy@email.com", 
          gen: 12,
        },

        {
          name: "Emmanuel Ampadu",
          email: "emmanuel@email.com", 
          gen: 20,
        },

        {
          name: "Edwin Ampadu",
          email: "eddy@email.com", 
          gen: 24,
        },

        {
          name: "Warmz Incredible",
          email: "warmz@email.com", 
          gen: 20,
        },
      ]
    }
  }

  addNewUser = (user) =>{
    this.setState({
      users: [...this.state.users, user]
    })
  }
  render() {
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
              <AddUserForm addUser={this.addNewUser}/>
            </Col>
            <Col>
              <Users usersData={this.state.users} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
