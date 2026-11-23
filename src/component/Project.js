import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

//import icon
import FeatherIcon from "feather-icons-react";

// feature Image
import Img2 from "../assets/images/Ehatech_Images/sourav-profile.png";
import Img3 from "../assets/images/Ehatech_Images/Rabi.png";
import Img4 from "../assets/images/Ehatech_Images/shankar.png";
import Img5 from "../assets/images/Ehatech_Images/Vishal.png";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        // {
        //   id: 2,
        //   img: Img2,
        //   title: "Sourav Kumar",
        //   designation: "Full Stack Engineer",
        //   view: "https://www.linkedin.com/in/souravkkr1/",
        // },
        // {
        //   id: 3,
        //   img: Img3,
        //   title: "Rabinarayan Pradhan",
        //   designation: "Full Stack Engineer",
        //   view: "https://www.linkedin.com/in/rabinarayan-pradhan-14ab9422b/",
        // },
        // {
        //   id: 4,
        //   img: Img4,
        //   title: "Shankar Kumar",
        //   designation: "Backend Engineer",
        //   view: "",
        // },
        // {
        //   id: 5,
        //   img: Img5,
        //   title: "Vishal Gholve",
        //   designation: "Backend Engineer",
        //   view: "https://www.linkedin.com/in/vishal-gholve-444b9122b/",
        // },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section  id="project">
          <Container>
            
            <Row>
              
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
