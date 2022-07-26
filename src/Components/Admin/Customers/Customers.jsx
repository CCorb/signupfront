import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import CommonError from '../../Error/CommonError'

class Customers extends Component {
  constructor() {
    super()
    this.state = {
      Users: [
        {
          fullName: '',
          userName: '',
          email: '',
        },
      ],
    }

    this.getProducts()
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/app/user')
      .then((response) => {
        this.setState(response.data)
      })
      .catch((err) => {
        this.setState({ error: <CommonError err></CommonError> })
      })
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Ihre Produkte</h1>
          {this.state.Users.forEach((user) => (
            <Card className="card-element video">
              <Card.Title className="card-title">{user.fullName}</Card.Title>
              {/* Produkte zu User finden */}
              <Card.Body>{user.productDescription}</Card.Body>
            </Card>
          ))}
        </div>
        {this.state.error}
      </div>
    )
  }
}

export default Customers
