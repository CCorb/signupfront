import 'react-smart-data-table/dist/react-smart-data-table.css'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import SmartDataTable from 'react-smart-data-table'
import Card from 'react-bootstrap/Card'
import faker from 'faker'
import StaticHeader from '../StaticHeader/StaticHeader'
import axios from 'axios'
import CommonError from '../Error/CommonError'

class Contracts extends Component {
  async componentDidMount() {
    axios
      .get('http://localhost:4000/app/contracts')
      .then((contracts) => {
        this.setState(contracts.data)
      })
      .catch((err) => {
        this.setState({ error: <CommonError err></CommonError> })
      })
  }

  constructor() {
    super()
    this.state = {
      contracts: [
        {
          _id: '',
          contractPrice: [{ price: '', recurrence: '' }],
        },
      ],
    }
    this.viewContract = this.viewContract.bind(this)
  }

  viewContract(event) {
    let parent = event.target
    while (!parent.classList.contains('card-element')) {
      parent = parent.offsetParent
    }
    console.log(parent.id)

    event.preventDefault()
    axios
      .get('http://localhost:4000/app/contracts/' + parent.id)
      .then((response) => {
        window.location.assign('/contractdetail?id=' + parent.id)
      })
      .catch((err) => {
        this.setState({ error: <CommonError err></CommonError> })
      })
  }

  createDataEntry(contract) {
    let id
    if (contract._id) {
      id = contract._id
      console.log(contract._id)
      console.log(contract._id.$oid)
    }

    return (
      <Card className="card-element video" onClick={this.viewContract} id={id}>
        <Card.Body>
          <div className="card-element-spacer">
            <div className="card-title">{contract.contractName}</div>
            <div className="card-title ">
              {contract.contractPrice.price}
              <div className="price-recurrence">
                {contract.contractPrice.recurrence}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  }

  render() {
    this.state.contracts.map((contract) => {})
    return (
      <div>
        <StaticHeader></StaticHeader>
        <div className="container">
          <h1>Ihre Verträge</h1>
          {console.log(this.state)}
          {this.state.contracts.map((contract) =>
            this.createDataEntry(contract),
          )}
        </div>
        {this.state.error}
      </div>
    )
  }
}

export default Contracts
