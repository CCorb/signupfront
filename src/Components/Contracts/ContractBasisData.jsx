import React, { Component } from "react";
import Card from "react-bootstrap/esm/Card";
import { FiDownload } from "react-icons/fi";
import ContractDetail from "./ContractDetail";
import axios from "axios";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import StaticHeader from "../StaticHeader/StaticHeader";

class ContractBasisData extends Component {
  constructor(props) {
    super();
    const queryParams = new URLSearchParams(window.location.search);

    if (queryParams) {
      this.id = queryParams.get("id");
    }

    if (!this.id) {
      if (props.location.id) {
        this.id = props.location.id;
      }
    }

    if (props.location.state) this.state = props.location.state;
  }

  render() {
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
          <Card className="card-element video">
            <Card.Title>Basisdaten zum Vertrag</Card.Title>
            <Card.Body className="card-body">
              Typ : {this.state.contract.contractType}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default ContractBasisData;
