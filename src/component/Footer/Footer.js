import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FooterLink from "../Footer/Footer_link";

// Footer Image
import footer_image from "../../assets/images/hero-1-bg-img.png";
import logolight from "../../assets/images/Ehatech_Images/white logo.png";
import microsoft from '../../assets/images/microsoft.jpeg'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          id: 1,
          title: "Quick Links",
          child: [
            { title: "Home", link: "#home" },
            { title: "About us", link: "#about" },
            { title: "Services", link: "#services" },
          ],
        },
        {
          id: 2,
          title: "Product",
          child: [
            { title: "ExpediText",target: "_blank", link: "https://expeditext.com/",  },
            { title: "SpeedyChat", link: "https://speedychat.io/", target: "_blank" },
            { title: "Digital Boosts", link: "https://www.digitalboosts.com/", target: "_blank" },
          ],
        },
        {
          id: 3,
          title: "Contact",
          child: [
            // { title: " +91-9341171960", link:"tel:+919341171960" },
            { title: "info@ehatech.co", link: "mailto:info@ehatech.co" },
            { title: "Mahalakshmi Steels, A 1104, PLOT NO 13 NEAR YASHWANT NAGAR, MOUNT CASTLE, BAKORI ROAD, Wagholi, Pune",  link: "#" }, { title: "", link: "#" },
          ],
        },
      ],
    };
  }


  render() {
    return (
      <React.Fragment>
        {/* Footer Start */}
        <footer
          className="footer"
          style={{ backgroundImage: "url(" + footer_image + ")" }}
        >
          <Container>
            <Row>
              <Col lg={4}>
                <div className="mb-5">
                  <Link to="#">
                    <img src={logolight} alt="" className="" height="28" />
                  </Link>
                  <p className="text-white-50 my-4">
                    We are positioned for long-term sustainable growth. Here,
                    you’ll match your ingenuity with the latest technology to
                    make incredible things. Together, let’s create positive,
                    long-lasting change.
                  </p>
                  {/* <Link to="#" className="text-white-70">
                    <FeatherIcon className="icon mr-1" icon="instagram" /> Join
                    Us In Instagram
                  </Link> */}
                   <div style={{width:'200px' }}>
                  {/* <img src={microsoft} alt="" style={{width:'200px', borderRadius:'10px', overflow:'hidden', border:'2px solid #ccc', marginBottom:'10px'}} /> */}
                </div>
                </div>
              </Col>
              <Col lg={7} className="offset-lg-1">
                <Row>
                  {/* Render Footer Link */}
                  {this.state.links.map((item, key) => (
                    <Col md={4} key={key}>
                      <h4 className="text-white f-22 fw-normal mb-3">
                        {item.title}
                      </h4>
                      <ul className="list-unstyled footer-sub-menu">
                        {item.child.map((linkItem, key) => (
                          <li key={key}>
                            <a className="footer-link" href={linkItem.link}>
                              {linkItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            {/* Render Footer Link End */}
            <FooterLink />
          </Container>
        </footer>
        {/* Footer End */}
      </React.Fragment>
    );
  }
}

export default Footer;
