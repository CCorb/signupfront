import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import CommonError from '../../Error/CommonError'

class Products extends Component {
  componentDidMount() {
    axios
      .get('http://localhost:4000/app/products')
      .then((response) => {
        this.setState(response.data)
      })
      .catch((err) => {
        this.setState({ error: <CommonError err></CommonError> })
      })
  }

  constructor() {
    super()
    this.state = {
      Products: [{ productName: '', productDescription: '' }],
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Ihre Produkte</h1>
          {this.state.Products.map((product) => (
            <Card className="card-element video">
              <Card.Title className="card-title">
                {product.productName}
              </Card.Title>
              <Card.Body>{product.productDescription}</Card.Body>
            </Card>
          ))}

          <div className="video-category-footer">
            <input
              type="submit"
              className="bsingle__content btn"
              value="Produkte Hinzufügen"
            ></input>
          </div>
        </div>
        {this.state.error}
      </div>
    )
  }
}

export default Products
