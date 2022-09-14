import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Contracts from "../Contracts/Contracts";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Tutorial from "../Tutorials/Tutorial";
import PersonalData from "../PersonalData/PersonalData";
import Calendar from "../Calendar/Calendar";
import Card from "react-bootstrap/Card";
import { FaPlayCircle, FaFileContract } from "react-icons/fa";
import { BsCalendar, BsPersonSquare } from "react-icons/bs";
import StaticHeader from "../StaticHeader/StaticHeader";
import CommonError from "../Error/CommonError";

class Home extends Component {
  componentDidMount() {
    console.log(this.id);
    if (this.id)
      axios
        .get("http://localhost:4000/app/user/" + this.id)
        .then((user) => {
          this.setState(user.data);
        })
        .catch((err) => {
          this.setState({ error: <CommonError err></CommonError> });
        });
  }

  constructor() {
    super();
    this.state = {};
    this.id = "";
    const queryParams = new URLSearchParams(window.location.search);

    if (queryParams) {
      this.id = queryParams.get("id");
    }

    this.renderUserPanel = this.renderUserPanel.bind(this);
    this.renderAdminPanel = this.renderAdminPanel.bind(this);
  }

  renderUserPanel() {
    return (
      <div className="container">
        <h1>Willkommen bei die Vorsorger</h1>
        <h1>{this.state.user.fullName}</h1>
        <nav>
          <div className="nav-container">
            <Link to="/Contracts">
              <Card className="card-element">
                <Card.Title>Meine Verträge</Card.Title>
                <Card.Body className="card-body">
                  <FaFileContract className="card-icon" />
                </Card.Body>
              </Card>
            </Link>
            <Link to={"/Appointments?id=" + this.id}>
              <Card className="card-element">
                <Card.Title>Beratungstermine</Card.Title>
                <Card.Body>
                  <BsCalendar className="card-icon" />
                </Card.Body>
              </Card>
            </Link>
            <Link to={"/Settings?id=" + this.id}>
              <Card className="card-element">
                <Card.Title className="card-title">Meine Daten</Card.Title>
                <Card.Body>
                  <BsPersonSquare className="card-icon" />
                </Card.Body>
              </Card>
            </Link>
            <Link to="/Tutorials">
              <Card className="card-element">
                <Card.Title>Videos</Card.Title>
                <Card.Body>
                  <FaPlayCircle className="card-icon" />
                </Card.Body>
              </Card>
            </Link>
          </div>
        </nav>
      </div>
    );
  }

  renderAdminPanel() {
    return (
      <div className="container">
        <h1>Admin Dashboard</h1>
        <nav>
          <div className="nav-container">
            <Link to="/Admin/Products">
              <Card className="card-element">
                <Card.Title>Produkte verwalten</Card.Title>
                <Card.Body className="card-body">
                  <FaFileContract className="card-icon" />
                </Card.Body>
              </Card>
            </Link>
            <Link to="/Admin/Tutorials">
              <Card className="card-element">
                <Card.Title>Videos</Card.Title>
                <Card.Body>
                  <BsCalendar className="card-icon" />
                </Card.Body>
              </Card>
            </Link>
            <Link to={"/Admin/Customers"}>
              <Card className="card-element">
                <Card.Title className="card-title">Kunden verwalten</Card.Title>
                <Card.Body>
                  <BsPersonSquare className="card-icon" />
                </Card.Body>
              </Card>
            </Link>
          </div>
        </nav>
      </div>
    );
  }

  render() {
    if (this.state.user) {
      if (!this.state.user.isAdmin) {
        return (
          <div>
            <StaticHeader user={this.state.fullName}></StaticHeader>
            {this.renderUserPanel()}
            {this.state.error}
          </div>
        );
      } else {
        return (
          <div>
            <StaticHeader user={this.state.fullName}></StaticHeader>
            {this.renderAdminPanel()}
            {this.state.error}
          </div>
        );
      }
    } else {
      return <div>loading...</div>;
    }
  }
}

export default Home;
