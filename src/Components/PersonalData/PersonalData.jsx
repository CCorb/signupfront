import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Card from 'react-bootstrap/esm/Card'
import StaticHeader from '../StaticHeader/StaticHeader'
import CommonError from '../Error/CommonError'

class PersonalData extends Component {
  componentDidMount() {
    axios
      .get('http://localhost:4000/app/user/' + this.id)
      .then((response) => {
        this.setState({
          _id: response.data.user._id,
          fullName: response.data.user.fullName,
          userName: response.data.user.userName,
          email: response.data.user.email,
          password: response.data.user.password,
        })
        console.log(this.state)
      })
      .catch((err) => {
        //window.location.assign('/error')
      })
  }

  constructor() {
    super()
    this.id = ''
    const queryParams = new URLSearchParams(window.location.search)

    if (queryParams) {
      this.id = queryParams.get('id')
    }

    this.state = {
      _id: this.id,
      fullName: '',
      userName: '',
      email: '',
      password: '',
    }

    this.changeEmail = this.changeEmail.bind(this)
    this.changeFullName = this.changeFullName.bind(this)
    this.changeUserName = this.changeUserName.bind(this)
    this.changePassword = this.changePassword.bind(this)

    this.changeUser = this.changeUser.bind(this)
  }

  changeFullName(event) {
    this.setState({ fullName: event.target.value })
  }

  changeUserName(event) {
    this.setState({
      userName: event.target.value,
    })
  }

  changeEmail(event) {
    this.setState({ email: event.target.value })
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    })
  }

  changeUser(event) {
    event.preventDefault()
    const updateableUser = {
      user: {
        fullName: this.state.fullName,
        userName: this.state.userName,
        email: this.state.email,
      },
    }

    console.log(updateableUser)

    axios
      .patch('http://localhost:4000/app/user/' + this.state._id, updateableUser)
      .then((response) => {
        console.log(response.status)
        if (response.status === 200) {
          //TODO: Add ui interaction
        } else {
          console.log(response.status)
        }
      })
      .catch((err) => {
        this.setState({ error: <CommonError err></CommonError> })
      })
  }

  render() {
    return (
      <div>
        <StaticHeader></StaticHeader>

        <div className="container">
          <h1>Ihre Daten</h1>
          {/*<div className="form-div">*/}
          <form onSubmit={this.changeUser}>
            <Card className="card-element video">
              <Card.Body>
                <div className="gridContainer">
                  <div className="dataLeft">Name</div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    onChange={this.changeFullName}
                    value={this.state.fullName}
                    className="form-control form-group"
                  ></input>
                  <div className="dataLeft">Benutzername</div>
                  <input
                    type="text"
                    placeholder="User Name"
                    onChange={this.changeUserName}
                    value={this.state.userName}
                    className="form-control form-group"
                  ></input>
                  <div className="dataLeft">Email</div>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={this.changeEmail}
                    value={this.state.email}
                    className="form-control form-group"
                  ></input>
                </div>
              </Card.Body>
            </Card>

            <div className="update-user-btn-container">
              <input
                type="submit"
                className="bsingle__content btn"
                value="Speichern"
              ></input>
            </div>
          </form>
        </div>
        {this.state.error}
      </div>
    )
  }
}

export default PersonalData
