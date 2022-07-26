import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

class StaticHeader extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <Link to="/">
        <div className="static-header">
          <img alt="logo" src="../HNL_logo_endversion_dieVorsorger.jpg"></img>
        </div>
      </Link>
    )
  }
}

export default StaticHeader
