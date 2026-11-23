import React, { Component } from "react";
import { Container, Row } from "reactstrap";



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
