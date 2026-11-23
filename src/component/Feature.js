import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";

// Import Image
import Img1 from "../assets/images/features/img-1.png";
import Img2 from "../assets/images/features/img-2.png";
import Img3 from "../assets/images/features/img-3.png";
import Img4 from "../assets/images/Ehatech_Images/rakshaai mockup.png";

const Feature = () => {
  const [activeTab, setActiveTab] = useState("v-pills-work");
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const handleNavigateChat = () => {
    window.open("https://speedychat.io/", "_blank");
  };

  const handleNavigateWeb = () => {
    window.open("https://speedychat.io/", "_blank");
  };

  const handleNavigateRaksha = () => {
    window.open("https://www.rakshaai.co/", "_blank");
  };
  return (
    <React.Fragment>
      <section className="section" id="features">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center mb-5">
                <h2 className="">EhaTech at a Glance</h2>
                <p className="text-muted">
                  Our tailored services are designed to enhance your experience
                  with tailored functionality. Explore it to upgrade your
                  traditional work!
                </p>
              </div>
            </Col>
          </Row>
          <div className="features-content">
            <Row className="align-items-center">
              <Col lg={6} className="order-2 order-lg-1">
                <TabContent id="v-pills-tabContent" activeTab={activeTab}>
                  <TabPane tabId="v-pills-work" className="fade show">
                    <img
                      src={Img1}
                      alt=""
                      className="img-fluid d-block mx-auto"
                    />
                  </TabPane>
                  <TabPane tabId="v-pills-marketing" className="fade show">
                    <img
                      src={Img2}
                      alt=""
                      className="img-fluid d-block mx-auto"
                    />
                  </TabPane>
                  <TabPane tabId="v-pills-feedback" className="fade show">
                    <img
                      src={Img3}
                      alt=""
                      className="img-fluid d-block mx-auto"
                    />
                  </TabPane>
                  <TabPane tabId="v-pills-raksha" className="fade show">
                    <img
                      src={Img4}
                      alt=""
                      className="img-fluid d-block mx-auto"
                    />
                  </TabPane>
                </TabContent>
              </Col>
              <Col lg={5} className="offset-lg-1 order-1 order-lg-2">
                <Nav
                  className="flex-column"
                  pills
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                
                  <NavItem>
                    <NavLink
                      href="#"
                      className={classnames(
                        { active: activeTab === "v-pills-marketing" },
                        "rounded"
                      )}
                      onClick={() => {
                        toggleTab("v-pills-marketing");
                      }}
                      id="v-pills-work-tab"
                    >
                      <h4 className="text-dark f-18">SpeedyChat</h4>
                      <p className="text-muted f-15">
                        A top-tier application equipped with various toolkits,
                        providing functionalities like PDF consolidation,
                        AI-powered support, resume and presentation crafting,
                        and more.
                      </p>
                      <p
                        className="text-primary mb-0 read-more"
                        onClick={handleNavigateChat}
                      >
                        More Information
                        <span className="right-icon ml-2">&#8594;</span>
                      </p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                      className={classnames(
                        { active: activeTab === "v-pills-raksha" },
                        "rounded"
                      )}
                      onClick={() => {
                        toggleTab("v-pills-raksha");
                      }}
                      id="v-pills-raksha-tab"
                    >
                      <h4 className="text-dark f-18">RakshaAI</h4>
                      <p className="text-muted f-15">
                        India's first AI-powered scam detection platform.
                        Verify website safety, detect UPI fraud, and check
                        suspicious phone numbers in seconds — completely free.
                      </p>
                      <p
                        className="text-primary mb-0 read-more"
                        onClick={handleNavigateRaksha}
                      >
                        More Information
                        <span className="right-icon ml-2">&#8594;</span>
                      </p>
                    </NavLink>
                  </NavItem>
                    <NavItem>
                    <NavLink
                      href="#"
                      className={classnames(
                        { active: activeTab === "v-pills-work" },
                        "rounded"
                      )}
                      onClick={() => {
                        toggleTab("v-pills-work");
                      }}
                      id="v-pills-work-tab"
                    >
                      <h4 className="text-dark f-18">ExpediText</h4>
                      <p className="text-muted f-15">
                        A high-excellence software solution leveraging
                        cutting-edge AI algorithms to extract and evaluate data
                        across diverse file formats, delivering actionable
                        business intelligence for optimal outcomes
                      </p>
                      <p
                        className="text-primary mb-0 read-more"
                        onClick={handleNavigateWeb}
                      >
                        More Information
                        <span className="right-icon ml-2">&#8594;</span>
                      </p>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Feature;
