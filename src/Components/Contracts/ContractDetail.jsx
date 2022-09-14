import "react-smart-data-table/dist/react-smart-data-table.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import SmartDataTable from 'react-smart-data-table'
import Card from "react-bootstrap/Card";
import StaticHeader from "../StaticHeader/StaticHeader";
import axios from "axios";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import CommonError from "../Error/CommonError";

class ContractDetail extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:4000/app/contracts/" + this.id)
      .then((contract) => {
        this.setState(contract.data);
        console.log("state updated with: ");
        console.log(contract.data);
      })
      .catch((err) => {
        this.setState({ error: <CommonError err></CommonError> });
      });
  }

  id = "";

  constructor(props) {
    super();

    const queryParams = new URLSearchParams(window.location.search);

    if (queryParams) {
      this.id = queryParams.get("id");
    }
    console.log(props);
    if (!this.state)
      this.state = {
        contract: {
          contractNumber: "",
          contractName: "",
          contractDate: "",
          contractUser: "",
          contractBinary: "",
          contractType: "",
          contractService: "",
          contractBinaries: [
            {
              documentName: "",
              documentDate: "",
            },
          ],
        },
      };
    //this.viewContract = this.viewContract.bind(this)
    //this.openDocument = this.openDocument.bind(this)

    if (props && props.contract) {
      this.setState(props);
    }
  }
  /*
  * Moved to ContractDocuments
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
      .catch((error) => {
        window.location.assign('/error')
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
*/
  render() {
    console.log(this.id);

    return (
      <div>
        <StaticHeader></StaticHeader>
        <div className="container">
          <h1>
            <a href="http://localhost:3000/Contracts">Ihre Verträge</a>
          </h1>

          <h1>{this.state.contract.contractName}</h1>

          <Card className="card-element video">
            <Card.Body>
              <div className="card-element-spacer">
                <div className="card-title">
                  <Link
                    to={{
                      pathname: "/contractdetail/basisdata",
                      state: this.state,
                    }}
                  >
                    Basisdaten
                  </Link>
                </div>

                <div className="card-title ">
                  <Link
                    to={{
                      pathname: "/contractdetail/performance",
                      state: this.state,
                    }}
                  >
                    Leistungen
                  </Link>
                </div>

                <div className="card-title">
                  <Link
                    to={{
                      pathname: "/contractdetail/services",
                      state: this.state,
                      id: this.state.contract._id,
                    }}
                  >
                    Services
                  </Link>
                </div>

                <div className="card-title">
                  <Link
                    to={{
                      pathname: "/contractdetail/documents",
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
          <div className="documents"></div>
        </div>
        {this.state.error}
      </div>
    );
  }
}

export default ContractDetail;
