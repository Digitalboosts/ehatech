import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios

import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
} from "reactstrap";

import ContactImg from "../assets/images/Ehatech_Images/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
console.log("formData",formData)
  const [, setData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Object to pass
    const dataToPost = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/10e782f5-e1de-4571-8f00-4ebbfa5542a8",
        dataToPost
      )
      .then((response) => {
        console.log("Form submitted:", response.data);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        getData(); // Reload data after submitting
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const getData = () => {
    axios
      .get("https://sheet.best/api/sheets/10e782f5-e1de-4571-8f00-4ebbfa5542a8")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <>
      <section className="section" id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center mb-5">
                <h2 className="">Get in Touch with us!</h2>
                <p className="text-muted">
                  Our Knowledgeable team is always ready to help you. Don’t
                  hesitate to reach out!
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col lg={6} md={10}>
              <div className="mb-5 mb-lg-0">
                <div className="text-center">
                  <img
                    src={ContactImg}
                    alt=""
                    className="img-fluid d-block w-75 mx-auto"
                  />
                  <h4 className="mt-4">Are you facing any problems?</h4>
                  <p className="text-muted mb-4">
                    Reach out to us if you're having any queries or issues. Just
                    Ping us!
                  </p>
                  <p className="mt-4">Or you can contact at</p>
                  <Row>
                    <Col md={6} style={{margin:'auto'}}>
                        <div className="badge f-14 bg-soft-dark text-muted justify-content-center">
                          <span className="text-dark mr-1">Email:</span>{" "}
                          <a href="mailto:info@ehatech.co">info@ehatech.co</a>{" "}
                        </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={5} className="offset-lg-1">
              <h4 className="line-height-1_4 mb-4">Let's connect</h4>
              <div className="custom-form mt-4 mt-lg-0">
                <div id="message"></div>
                <Form
                  method="post"
                  name="contact-form"
                  id="contact-form"
                  onSubmit={handleSubmit}
                >
                  <Row>
                    <Col md={12}>
                      <FormGroup className="app-label">
                        <Label for="name" className="form-label">
                          Name
                        </Label>
                        <Input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Enter your name .."
                          onChange={handleChange}
                          value={formData.name}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup className="app-label">
                        <Label for="email" className="form-label">
                          Email address
                        </Label>
                        <Input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter your email .."
                          onChange={handleChange}
                          value={formData.email}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup className="app-label">
                        <Label for="subject" className="form-label">
                          Message
                        </Label>
                        <textarea
                          name="message"
                          id="subject"
                          type="text"
                          className="form-control"
                          placeholder="Enter Subject .."
                          style={{ height: '150px' }}
                          onChange={handleChange}
                          value={formData.message}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <Button
                        color="primary"
                        id="submit"
                        name="send"
                        type="submit"
                        className="btn btn-primary"
                      >
                        Send Message
                      </Button>
                      <div id="simple-msg"></div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
