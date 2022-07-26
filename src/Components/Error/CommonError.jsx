import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import { Route, BrowserRouter } from 'react-router-dom'

class CommonError extends Component {
  constructor(props) {
    super()

    this.errorText = ''
    if (props) {
      console.log(props)
      if (props.errorText) {
        this.errorText = props.errorText
      }
    }

    this.state = {
      errorCode: '',
      errorText: '',
    }
  }

  closeDialog(event) {
    event.target.parentElement.remove()
  }

  render() {
    return (
      <div>
        <div className="errorDialog">
          <div className="closeButton" onClick={this.closeDialog}>
            X
          </div>
          <h1>Oops .. </h1>
          Something went wrong {/*<p>{this.state.errorCode}</p>*/}
          <p>{this.errorText}</p>
        </div>
      </div>
    )
  }
}

export default CommonError
