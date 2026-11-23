import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Import Background Image
import Background from "../../assets/images/hero-1-bg-img.png";
import hero from "../../assets/images/Ehatech_Images/hero section image.png";
class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="hero-1-bg bg-light"
          style={{ backgroundImage: `url(${Background})` }}
          id="home"
        >
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col lg={6}>
                <h1 className="display-4 fw-medium mb-4">
                  Welcome to EhaTech!
                </h1>
                <h1 className="hero-1-title fw-normal text-dark mb-4">
                  Your Transformation starts here!{" "}
                </h1>
                <p className="text-muted mb-4 pb-3">
                  For a better tomorrow! We help your profession successfully
                  navigate digital transformation and drive real growth, drawing
                  on the combined power of experience and contextual knowledge,
                  across a vast sea of expertise.
                </p>
                {/* <div style={{width:'200px', marginTop:'-20px' }}>
                  <img src={microsoft} alt="" style={{width:'200px', borderRadius:'10px', overflow:'hidden', border:'2px solid #ccc', marginBottom:'10px'}} />
                </div> */}
                <a href="#about" className="btn btn-primary">
                  Get Started <span className="ml-2 right-icon">&#8594;</span>
                </a>
              </Col>
              <Col lg={6} md={10}>
                <div className=" mt-5 mt-lg-0">
                  <img
                    src={hero}
                    alt=""
                    className="img-fluid d-block mx-auto"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
