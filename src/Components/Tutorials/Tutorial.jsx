import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import StaticHeader from "../StaticHeader/StaticHeader";
import { Link } from "react-router-dom";
import { Player, ControlBar, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";
import CommonError from "../Error/CommonError";

class Tutorial extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:4000/app/videos")
      .then((videos) => {
        this.setState(videos.data);
      })
      .catch((err) => {
        this.setState({ error: <CommonError err></CommonError> });
      });
  }

  constructor() {
    super();
    this.state = {};
    this.createCategorizedVideos = this.createCategorizedVideos.bind(this);
    this.newVideo = this.newVideo.bind(this);
    this.getVideo = this.getVideo.bind(this);
  }

  addCategory(category, videoCategory) {
    let element = {
      Category: videoCategory,
      Videos: [],
    };
    category.push(element);
    return category;
  }

  getCategories() {
    let categories = [];
    if (this.state.videos) {
      this.state.videos.forEach((video) => {
        if (categories.length == 0) {
          categories = this.addCategory(categories, video.videoCategory);
        } else {
          let categoryfound = false;
          categories.forEach((category) => {
            if (category.Category == video.videoCategory) {
              categoryfound = true;
            }
          });
          if (!categoryfound) {
            categories = this.addCategory(categories, video.videoCategory);
          }
        }
      });
    }
    return categories;
  }

  createCategorizedVideos() {
    let categories = this.getCategories();
    categories.forEach((element) => {
      this.state.videos.filter((video) => {
        if (video.videoCategory === element.Category) {
          element.Videos.push(video);
        }
      });
    });
    return categories;
  }

  newVideo() {
    window.location.assign("/newTutorial");
  }

  getVideo(element) {
    console.log(element);
    return (
      <Player>
        <source src={"http://localhost:4000/app/vid/" + element._id}></source>
        <BigPlayButton position="center" />
        <ControlBar autoHide={true} />
      </Player>
    );
  }

  render() {
    return (
      <div>
        <StaticHeader></StaticHeader>
        <div className="container">
          <h1>Videos</h1>
          <div className="videoContent">
            {this.createCategorizedVideos().map((category) => (
              <div className="form-div video">
                <h1>{category.Category}</h1>
                {category.Videos.map((video) => (
                  <Card className="card-element video">
                    <Card.Title className="card-title">
                      {video.videoName}
                    </Card.Title>
                    <Card.Body>{this.getVideo(video)}</Card.Body>
                  </Card>
                ))}
              </div>
            ))}
          </div>

          <div className="video-category-footer">
            <input
              type="submit"
              onClick={this.createCategorizedVideos}
              className="bsingle__content btn"
              value="Neue Kategorie erstellen"
            ></input>
            <input
              type="submit"
              className="bsingle__content btn"
              value="Neues Video einbetten"
              onClick={this.newVideo}
            ></input>
          </div>
        </div>
        {this.state.error}
      </div>
    );
  }
}

export default Tutorial;
