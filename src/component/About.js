import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// Import Background Image
import Img1 from "../assets/images/Ehatech_Images/expedichat mockup.png";
import Img2 from "../assets/images/Ehatech_Images/Expeditext mockup.png";
import Img3 from "../assets/images/Ehatech_Images/rakshaai mockup.png";
import FileProcessing from "../assets/images/Ehatech_Images/file processing_small icon.png";
import AI from "../assets/images/Ehatech_Images/ai_small icon.png";
import OCR from "../assets/images/Ehatech_Images/optical_small icon.png";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb-5">
                  <h2 className="">Who we are</h2>
                  <p className="text-muted">
                    At EhaTech, we go beyond helping businesses transform
                    through innovative technology. We aim to help them find a
                    meaningful solution for our customers and the communities
                    they serve.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <h2 className="fw-normal line-height-1_4 mb-4">
                  Productive & Customizable For{" "}
                  <span className="fw-medium">Developers</span>
                </h2>
                <p className="text-muted mb-4">
                  The integration of file processing, AI, and OCR capabilities
                  can revolutionize various sectors by automating workflows, and
                  enhancing data analysis including information accessibility.
                </p>
                <p className="f-17 text-muted">
                  <img
                    src={FileProcessing}
                    className="icon-xs text-primary icon-fill-primary icon mr-2"
                    alt=""
                  />{" "}
                  File Processing
                </p>
                <p className="f-17 text-muted">
                  <img
                    src={AI}
                    className="icon-xs text-primary icon-fill-primary icon mr-2"
                    alt=""
                  />{" "}
                  Artificial Intelligence
                </p>
                <p className="f-17 text-muted mb-4">
                  <img
                    src={OCR}
                    className="icon-xs text-primary icon-fill-primary icon mr-2"
                    alt=""
                  />{" "}
                  Optical character reader
                </p>
                <a href="#services" className="read-more f-18">
                  More Information{" "}
                  <span className="ml-2 right-icon f-24">&#8594;</span>
                </a>
              </Col>
              
              <Col lg={3}>
                <div className="card border-0">
                  <div className="bg-soft-primary about-img rounded">
                    <img
                      src={Img1}
                      alt=""
                      className="img-fluid d-block mx-auto"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-uppercase text-muted mb-2 f-13">
                      Let there be change with us
                    </p>
                    <h4 className="f-18">SpeedyChat</h4>
                    <p className="text-muted">
                      A professional-grade application with a versatile tool
                      that offers features such as PDF merging, AI assistant,
                      resume and PPT creation, and more.
                    </p>
                    <Link to="https://speedychat.io/" target="_blank" className="read-more">
                      Read More <span className="ml-2 right-icon">&#8594;</span>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="card border-0">
                  <div className="bg-soft-warning about-img rounded">
                    <img
                      src={Img3}
                      alt=""
                      className="img-fluid d-block mx-auto"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-uppercase text-muted mb-2 f-13">
                      Let there be change with us
                    </p>
                    <h4 className="f-18">RakshaAI</h4>
                    <p className="text-muted">
                      India's first AI-powered scam detection platform. Verify
                      website safety, detect UPI fraud, and check suspicious
                      phone numbers in seconds — completely free.
                    </p>
                    <Link to="https://www.rakshaai.co/" target="_blank" className="read-more">
                      Read More <span className="ml-2 right-icon">&#8594;</span>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="card border-0">
                  <div className="bg-soft-info about-img rounded">
                    <img
                      src={Img2}
                      alt=""
                      className="img-fluid d-block mx-auto"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-uppercase text-muted mb-2 f-13">
                      Let there be change with us
                    </p>
                    <h4 className="f-18"> ExpediText</h4>
                    <p className="text-muted">
                      A professional-grade software that utilizes advanced AI
                      algorithms to extract and analyze information from various
                      file types, providing actionable insights for business
                      success.
                    </p>
                    <Link to="https://expeditext.com/" target="_blank" className="read-more">
                      Read More <span className="ml-2 right-icon">&#8594;</span>
                    </Link>
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
