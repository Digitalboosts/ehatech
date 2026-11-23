import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";


// Import News Image
import Img1 from "../assets/images/Ehatech_Images/cover photo.jpg";
import Img2 from "../assets/images/Ehatech_Images/awards.jpg";
import Img3 from "../assets/images/Ehatech_Images/projects.jpg";
import Img4 from "../assets/images/Ehatech_Images/news.jpg";
import { Link } from "react-router-dom";

export default class News extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row className=" justify-content-center">
              <Col lg={7}>
                <div className="text-center mb-5">
                  <h2>Latest News</h2>
                  <p className="text-muted">
                    {" "}
                    Stay connected and up to date with our events and
                    announcements.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <div className="blog-box mb-4 mb-lg-0">
                  <img
                    src={Img1}
                    alt=""
                    className="img-fluid d-block mx-auto rounded shadow"
                  />
                </div>
              </Col>

              <Col lg={6}>
                <div className="blog-box">
                  <div className="d-flex blog-box-content align-items-center">
                    <img
                      src={Img2}
                      alt=""
                      className="img-fluid d-block rounded shadow blog-img me-3 flex-shrink-0"
                    />
                    <div className="flex-grow-1">
                      <h5 className="f-17 mb-1">
                        <Link to="#" className="text-dark">
                          Awards
                        </Link>
                      </h5>
                      <p className="text-muted f-15">
                        With determination and perseverance, we attained the
                        success we dreamed of.
                      </p>
                      <ul className="list-inline text-muted f-14 mb-0">
                        {/* <li className="list-inline-item">
                          {" "}
                          <FeatherIcon
                            className="icon-size-15 mr-1 icon"
                            icon="calendar"
                          />{" "}
                          07 Jan 2020
                        </li>{" "} */}
                        {/* <li className="list-inline-item">
                          {" "}
                          <FeatherIcon
                            className="icon-size-15 mr-1 icon"
                            icon="clock"
                          />{" "}
                          15 min ago
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex blog-box-content align-items-center">
                    <img
                      src={Img3}
                      alt=""
                      className="img-fluid d-block rounded shadow blog-img me-3 flex-shrink-0"
                    />
                    <div className="flex-grow-1">
                      <h5 className="f-17 mb-1">
                        <Link to="#" className="text-dark">
                          New upcoming projects
                        </Link>
                      </h5>
                      <p className="text-muted f-15">
                        The great reimagination of work is on processing…..
                      </p>
                      <ul className="list-inline text-muted f-14 mb-0">
                        {/* <li className="list-inline-item">
                          {" "}
                          <FeatherIcon
                            className="icon-size-15 mr-1 icon"
                            icon="calendar"
                          />{" "}
                          07 Jan 2020
                        </li>{" "}
                        <li className="list-inline-item">
                          {" "}
                          <FeatherIcon
                            className="icon-size-15 mr-1 icon"
                            icon="clock"
                          />{" "}
                          20 min ago
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex blog-box-content align-items-center">
                    <img
                      src={Img4}
                      alt=""
                      className="img-fluid d-block rounded shadow blog-img me-3 flex-shrink-0"
                    />
                    <div className="flex-grow-1">
                      <h5 className="f-17 mb-1">
                        <Link to="#" className="text-dark">
                          Ehatech News
                        </Link>
                      </h5>
                      <p className="text-muted f-15">
                        Stay connected to our news, events, and announcements
                        about us.
                      </p>
                      <ul className="list-inline text-muted f-14 mb-0">
                        {/* <li className="list-inline-item">
                          {" "}
                          <FeatherIcon
                            className="icon-size-15 mr-1 icon"
                            icon="calendar"
                          />{" "}
                          07 Jan 2020
                        </li>{" "}
                        <li className="list-inline-item">
                          {" "}
                          <FeatherIcon
                            className="icon-size-15 mr-1 icon"
                            icon="clock"
                          />{" "}
                          30 min ago
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
