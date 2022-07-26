import React, { Component, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './Style.css'
import { Link, Redirect } from 'react-router-dom'
import CommonError from './Components/Error/CommonError'
import { navigate } from './index.js'
//import { Route, BrowserRouter } from 'react-router-dom'

class App extends Component {
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

    this.login = this.login.bind(this)

    this.error = null
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

  login(event) {
    event.preventDefault()
    const registred = {
      userName: this.state.userName,
      password: this.state.password,
    }
    axios
      .post('http://localhost:4000/app/signin', registred)
      .then((response) => {
        window.location.assign('/home?id=' + response.data._id)
      })
      .catch((resp) => {
        console.log(resp)
        var data = resp.data
        this.setState({ error: <CommonError data></CommonError> })
      })
  }

  render() {
    return (
      <div className="container">
        <div className="header image">
          <img alt="logo" src="HNL_logo_endversion_dieVorsorger.jpg"></img>
        </div>
        <div className="header text">
          <h1>Melde dich mit deinem Account an</h1>
        </div>

        <div className="container">
          <div className="form-div">
            <form onSubmit={this.login}>
              <input
                type="text"
                placeholder="User Name"
                onChange={this.changeUserName}
                value={this.state.userName}
                className="form-control form-group"
              ></input>
              <input
                type="password"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group"
              ></input>
              <Link to="/Signup">Noch kein Account?</Link>
              <div className="container-login">
                <input
                  type="submit"
                  className="bsingle__content btn"
                  value="Login"
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

export default App
