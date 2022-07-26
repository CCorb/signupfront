import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import StaticHeader from '../StaticHeader/StaticHeader'
import { Link } from 'react-router-dom'
import CommonError from '../Error/CommonError'

class NewTutorial extends Component {
  componentDidMount() {
    axios.get('http://localhost:4000/app/videos').then((videos) => {
      this.setState(videos.data)
    })
  }

  constructor() {
    super()

    this.file = null

    this.state = {
      videoName: '',
      videoLink: FormData,
      videoCategory: '',
    }
    this.changeLink = this.changeLink.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
    this.changeCategory = this.changeCategory.bind(this)

    this.saveVideo = this.saveVideo.bind(this)
  }

  changeLink(event) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
    this.setState({
      videoLink: event.target.files,
    })
    console.log(this.state)
  }

  changeTitle(event) {
    this.setState({
      videoName: event.target.value,
    })
  }

  changeCategory(event) {
    this.setState({
      videoCategory: event.target.value,
    })
  }

  saveVideo() {
    console.log(this.file)
    const newVideo = new FormData()
    newVideo.append('File', this.file)
    newVideo.append('videoCategory', this.state.videoCategory)
    newVideo.append('videoName', this.state.videoName)

    console.log(newVideo)

    axios
      .post('http://localhost:4000/app/videos', newVideo, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        window.location.assign('/Tutorials')
      })
      .catch((err) => {
        console.log(err).catch((err) => {
          this.setState({ error: <CommonError err></CommonError> })
        })
      })
  }

  render() {
    return (
      <div>
        <StaticHeader></StaticHeader>
        <div className="container">
          <h1>Neues Video hochladen</h1>

          <div className="videoContent">
            <div className="form-div video">
              <Card className="card-element video">
                <Card.Body>
                  <input
                    type="text"
                    placeholder="Video Title"
                    onChange={this.changeTitle}
                    value={this.state.videoName}
                    className="form-control form-group"
                  ></input>
                  <input
                    type="text"
                    placeholder="Video Kategorie"
                    onChange={this.changeCategory}
                    value={this.state.videoCategory}
                    className="form-control form-group"
                  ></input>
                  <form>
                    <input
                      type="file"
                      name="file"
                      placeholder="Video Link"
                      onChange={this.changeLink}
                      /*value={this.state.videoLink}*/
                      className="form-control form-group"
                    ></input>
                  </form>
                </Card.Body>
              </Card>

              <input
                type="submit"
                className="bsingle__content btn"
                value="Neues Video einbetten"
                onClick={this.saveVideo}
              ></input>
            </div>
          </div>
        </div>
        {this.state.error}
      </div>
    )
  }
}

export default NewTutorial
