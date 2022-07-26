import React, { Component } from 'react'
import Card from 'react-bootstrap/esm/Card'
import { FiDownload } from 'react-icons/fi'
import ContractDetail from './ContractDetail'
import axios from 'axios'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import StaticHeader from '../StaticHeader/StaticHeader'
import CommonError from '../Error/CommonError'

class ContractDocuments extends Component {
  constructor(props) {
    super()
    const queryParams = new URLSearchParams(window.location.search)

    if (queryParams) {
      this.id = queryParams.get('id')
    }

    if (!this.id) {
      if (props.location.id) {
        this.id = props.location.id
      }
    }

    if (props.location.state) this.state = props.location.state

    this.viewContract = this.viewContract.bind(this)
    this.openDocument = this.openDocument.bind(this)
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
        this.setState(response.data)
      })
      .catch((err) => {
        this.setState({ error: <CommonError err></CommonError> })
      })
  }

  openDocument(pdf) {
    pdf.preventDefault()
    console.log(pdf.target.parentElement.id)
    if (
      pdf.target.parentElement.fileType &&
      pdf.target.parentElement.fileType == 'application/pdf'
    ) {
      if (pdf.target.parentElement.id && pdf.target.parentElement.id.length > 0)
        window.open(
          'data:application/pdf;base64,' +
            encodeURI(pdf.target.parentElement.id),
        )
    } else {
      console.log(pdf.target.parentElement.id)
    }
  }

  render() {
    /*this.state = {
      contractName: 'test',
      contractBinaries: [
        {
          fileType: 'application/pdf',
          content: 'asdf',
          documentName: 'Simple PDF File',
          documentDate: '2021-04-21',
        },
        {
          fileType: 'application/pdf',
          content: 'asdf',
          documentName: 'Simple PDF File 2',
          documentDate: '2021-04-22',
        },
      ],
    }*/

    return (
      <div>
        <StaticHeader></StaticHeader>
        <div className="container">
          <h1>Ihre Verträge</h1>

          <h1>{this.state.contract.contractName}</h1>

          <Card className="card-element video">
            <Card.Body>
              <div className="card-element-spacer">
                <div className="card-title">
                  <Link
                    to={{
                      pathname: '/contractdetail/basisdata',
                      state: this.state,
                    }}
                  >
                    Basisdaten
                  </Link>
                </div>

                <div className="card-title ">
                  <Link
                    to={{
                      pathname: '/contractdetail/performance',
                      state: this.state,
                    }}
                  >
                    Leistungen
                  </Link>
                </div>

                <div className="card-title">
                  <Link
                    to={{
                      pathname: '/contractdetail/services',
                      state: this.state,
                    }}
                  >
                    Services
                  </Link>
                </div>

                <div className="card-title">
                  <Link
                    to={{
                      pathname: '/contractdetail/documents',
                      state: this.state,
                      id: this.state.contract._id,
                    }}
                  >
                    Dokumente
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="container">
          <div className="documents">
            {this.state.contract.contractBinaries.map((document) => (
              <Card className="card-element video">
                <Card.Body>
                  <div className="card-element-spacer">
                    <div className="card-title">{document.documentName}</div>
                    <div className="card-title">{document.documentDate}</div>
                    <div className="card-title">
                      <a
                        className="card-title"
                        onClick={this.openDocument}
                        id={document.content}
                        fileType={document.fileType}
                      >
                        <FiDownload></FiDownload>
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        {this.state.error}
      </div>
    )
  }
}
export default ContractDocuments
