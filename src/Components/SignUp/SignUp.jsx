import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import StaticHeader from '../StaticHeader/StaticHeader'
import CommonError from '../Error/CommonError'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      fullName: '',
      userName: '',
      email: '',
      password: '',
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.changeFullName = this.changeFullName.bind(this)
    this.changeUserName = this.changeUserName.bind(this)
    this.changePassword = this.changePassword.bind(this)

    this.createUser = this.createUser.bind(this)
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    })
  }

  changeUserName(event) {
    this.setState({
      userName: event.target.value,
    })
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    })
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    })
  }

  createUser(event) {
    event.preventDefault()
    const registred = {
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    }
    axios
      .post('http://localhost:4000/app/signin', registred)
      .then((response) => {
        console.log(response.status)
        if (response.status == '200') {
          window.location.assign('/Contracts')
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
          <h1>Neuen Kunden anlegen</h1>

          <div className="form-div">
            <form onSubmit={this.createUser}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.changeFullName}
                value={this.state.fullName}
                className="form-control form-group"
              ></input>
              <input
                type="text"
                placeholder="User Name"
                onChange={this.changeUserName}
                value={this.state.userName}
                className="form-control form-group"
              ></input>
              <input
                type="email"
                placeholder="Email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group"
              ></input>
              <input
                type="password"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group"
              ></input>

              <div className="container-login">
                <input
                  type="submit"
                  className="bsingle__content btn"
                  value="Anlegen"
                ></input>
              </div>
            </form>
          </div>
        </div>
        {this.state.error}
      </div>
    )
  }
}

export default SignUp
