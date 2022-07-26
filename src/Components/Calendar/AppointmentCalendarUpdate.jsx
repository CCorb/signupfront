import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Calendar from 'react-calendar'
import Card from 'react-bootstrap/esm/Card'
import '../../Style.css'
import StaticHeader from '../StaticHeader/StaticHeader'
import CommonError from '../Error/CommonError'

class AppointmentCalendarUpdate extends Component {
  componentDidMount() {
    if (this.calendarId)
      axios
        .get('http://localhost:4000/app/calendar/' + this.calendarId)
        .then((response) => {
          this.setState(response.data)
          console.log(this.state)
        })
        .catch((err) => {
          this.setState({ error: <CommonError err></CommonError> })
        })
  }

  constructor() {
    super()
    const queryParams = new URLSearchParams(window.location.search)
    this.userId = null
    if (queryParams) {
      this.calendarId = queryParams.get('id')
      this.userId = queryParams.get('userid')
    }

    this.state = {
      appointmentTimeTo: '',
      appointmentTimeFrom: '',
      id: '',
      appointmentDate: '',
    }

    this.changeTimeTo = this.changeTimeTo.bind(this)
    this.changeTimeFrom = this.changeTimeFrom.bind(this)
    this.changeDate = this.changeDate.bind(this)
    this.updateAppointment = this.updateAppointment.bind(this)
  }

  changeTimeTo(event) {
    this.setState({ appointmentTimeTo: event.currentTarget.value })
  }

  changeTimeFrom(event) {
    this.setState({ appointmentTimeFrom: event.currentTarget.value })
  }

  changeDate(event) {
    this.setState({ appointmentDate: event.currentTarget.value })
  }

  updateAppointment(event) {
    event.preventDefault()
    console.log('updateAppointment')
    if (this.state.id) {
      const updateDate = {
        id: this.state.id,
        appointmentTimeTo: this.state.appointmentTimeTo,
        appointmentTimeFrom: this.state.appointmentTimeFrom,
        appointmentDate: this.state.appointmentDate,
      }
      axios
        .patch('http://localhost:4000/app/calendar', updateDate)
        .then((response) => {
          window.location.assign('/Appointments?id=' + this.userId)
        })
    }
  }

  render() {
    return (
      <div>
        <StaticHeader></StaticHeader>
        <div className="container">
          <h1>Ihre Beratungstermine</h1>

          <form onSubmit={this.updateAppointment}>
            <Card className="card-element video">
              <Card.Body>
                <div className="gridContainer">
                  <div className="dataLeft">Datum</div>
                  <input
                    type="text"
                    placeholder="Datum"
                    onChange={this.changeDate}
                    value={this.state.appointmentDate}
                    className="form-control form-group"
                  ></input>
                  <div className="dataLeft">Uhrzeit von</div>
                  <input
                    type="text"
                    placeholder="Uhrzeit von"
                    onChange={this.changeTimeFrom}
                    value={this.state.appointmentTimeFrom}
                    className="form-control form-group"
                  ></input>
                  <div className="dataLeft">Uhrzeit bis</div>
                  <input
                    type="text"
                    placeholder="Uhrzeit bis"
                    onChange={this.changeTimeTo}
                    value={this.state.appointmentTimeTo}
                    className="form-control form-group"
                  ></input>
                </div>
              </Card.Body>
            </Card>

            <div className="update-user-btn-container">
              <input
                type="submit"
                className="bsingle__content btn"
                value="Speichern"
              ></input>
            </div>
          </form>
        </div>
        {this.state.error}
      </div>
    )
  }
}

export default AppointmentCalendarUpdate
