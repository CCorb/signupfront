import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Calendar from 'react-calendar'
/*import 'react-calendar/dist/Calendar.css'*/
import '../../Style.css'
import StaticHeader from '../StaticHeader/StaticHeader'
import CommonError from '../Error/CommonError'

class AppointmentCalendar extends Component {
  componentDidMount() {
    if (this.userId)
      axios
        .get('http://localhost:4000/app/calendar/user/' + this.userId)
        .then((response) => {
          this.setState(response.data)
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
      this.userId = queryParams.get('id')
    }
    this.selectedDate = null
    this.state = {
      dates: [
        /*{
          appointmentName: '',
          appointmentDate: '2021-05-21',
          appointmentTimeFrom: '10:00:00',

          appointmentTimeTo: 'Info',
          appointmentMembers: [
            { id: 'CCO1', fullName: 'CCO' },
            { id: 'CCO2', fullName: 'CCO2' },
          ],
        },
        {
          appointmentName: '2tes Meeting im State',
          appointmentDate: '2021-05-31',
          appointmentTimeFrom: '10:00:00',

          appointmentTimeTo: 'Info',
          appointmentMembers: [
            { id: 'CCO1', fullName: 'CCO' },
            { id: 'CCO2', fullName: 'CCO2' },
          ],
        },*/
      ],
    }

    this.popDay = this.popDay.bind(this)
    this.isConsultant = this.isConsultant.bind(this)
    this.updateAppointment = this.updateAppointment.bind(this)
  }

  updateAppointment(event) {
    console.log('update: ' + this.selectedDate)
    if (this.selectedDate) {
      window.location.assign(
        '/Appointments/update?id=' +
          this.selectedDate +
          '&userid=' +
          this.userId,
      )
    }
  }

  popDay(event) {
    event.preventDefault()
    console.log(event.currentTarget)
    let id = event.currentTarget.id
    this.state.dates.map((date) => {
      if (date.id == id) {
        this.selectedDate = id
        Array.from(event.currentTarget.parentElement.childNodes).map((node) => {
          node.classList.remove('selected')
        })
        event.currentTarget.classList.add('selected')
        let button = document.getElementById('changeDate')
        button.firstElementChild.classList.remove('disabled')
      }
    })
  }

  isConsultant(user) {
    if (this.userId != user.id) {
      return <div className="gridItem">{user.fullName}</div>
    }
  }

  render() {
    return (
      <div>
        <StaticHeader></StaticHeader>
        <div className="container">
          <h1>Ihre Beratungstermine</h1>

          <div className="appointments container">
            <div className="appointmentList">
              <div className="appointmentdate-grid header">
                <div className="gridItem">
                  <h2>Datum</h2>
                </div>
                <div className="gridItem">
                  <h2>Uhrzeit</h2>
                </div>
                <div className="gridItem">
                  <h2>Betreff</h2>
                </div>
                <div className="gridItem">
                  <h2>Teilnehmer</h2>
                </div>
              </div>
              {this.state.dates.map((date) => (
                <div
                  className="appointmentdate-grid"
                  id={date.id}
                  onClick={this.popDay}
                >
                  <div className="gridItem">
                    {date.appointmentDate.substring(0, 10)}
                  </div>
                  <div className="gridItem">{date.appointmentTimeFrom}</div>
                  <div className="gridItem">{date.appointmentName}</div>
                  <div className="gridItem">
                    {date.appointmentMembers.map(
                      (member, idx) => (idx > 0 ? ', ' : '') + member.fullName,
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="video-category-footer" id="changeDate">
            <input
              type="submit"
              className="bsingle__content btn disabled"
              value="Termin ändern"
              onClick={this.updateAppointment}
            ></input>
          </div>
        </div>
        {this.state.error}
      </div>
    )
  }
}

export default AppointmentCalendar
