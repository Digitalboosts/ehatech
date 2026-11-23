import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

// Import Background Image
import Background from "../assets/images/service-icon-bg.png";
import FileProcessing from "../assets/images/Ehatech_Images/file_processing_white_icon.png";
import Ai from "../assets/images/Ehatech_Images/ai icon_white.png";
import OCR from "../assets/images/Ehatech_Images/optical logo_white.png";
import { Link } from "react-router-dom";

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb-5">
                  <h2 className="">Our commitments</h2>
                  <p className="text-muted">
                    We offer a range of exceptional services to enhance your
                    experience and are boosted by our dedication to customer
                    satisfaction.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <div className="card service-box text-center p-4">
                  <div
                    className="service-icon-bg mx-auto avatar-xxl p-4"
                    style={{ backgroundImage: `url(${Background})` }}
                  >
                    <div className="service-box-icon justify-content-center">
                      <img src={FileProcessing} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">
                    File Processing
                  </h4>
                  <p className="service-subtitle mb-4 f-15">
                    It is a collection of programs stored in electronic files
                    for various purposes by offering more data redundancy and
                    less flexibility in accessing data.
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="card service-box text-center p-4">
                  <div
                    className="service-icon-bg mx-auto avatar-xxl p-4"
                    style={{ backgroundImage: `url(${Background})` }}
                  >
                    <div className="service-box-icon justify-content-center">
                      <img src={Ai} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">
                    Artificial Intelligence
                  </h4>
                  <p className="service-subtitle mb-4 f-15">
                    It is a dummy of human intelligence processes by machines
                    mostly for computer systems, enabling tasks like learning,
                    problem-solving, and decision-making.
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="card service-box text-center p-4">
                  <div
                    className="service-icon-bg mx-auto avatar-xxl p-4"
                    style={{ backgroundImage: `url(${Background})` }}
                  >
                    <div className="service-box-icon justify-content-center">
                      <img src={OCR} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">
                    Optical character reader
                  </h4>
                  <p className="service-subtitle mb-4 f-15">
                    OCR is a method that converts an image of text into a
                    machine-reliable text format by translating the characters
                    into code that can be used for data processing.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
