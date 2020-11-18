import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  NavLink,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import knowledge from "assets/img/logo/knowledge.png";
import target from "assets/img/logo/target.png";
import change from "assets/img/logo/change-2.png";
import homeImage from "assets/img/logo/home-img.jpg";

function HomePage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <div className="main">
        <div className="section text-left top-section">
          <Container>
            <Row>
              <Col className="mx-auto" md="4">
                <h2 className="custom-title">What we do</h2>
                <h5 className="custom-description">
                  We strive to be a leading Professional association in People
                  management that enhances competence productivity and quality
                  of life. Our mission is to institute standards, enhance
                  development and promote human resource management as a
                  strategic function in any organization.
                </h5>
              </Col>
              <Col md={8}>
                <Row>
                  <Col className="mx-auto text-center" md="4">
                    <img
                      className="img-circle img-no-padding img-responsive"
                      src={knowledge}
                      alt="knowledge"
                    />
                    <h2 className="sub-title">Knowledgable</h2>
                    <h5 className="custom-description">
                      Advancing knowledge and understanding about people
                      management and development
                    </h5>
                    <br />
                    <Button
                      className="btn-link text-info text-capitalize font-weight-normal"
                      color="primary"
                      outline>
                      Our objectives{" "}
                      <i class="fa fa-caret-right" aria-hidden="true"></i>
                    </Button>
                  </Col>
                  <Col className="mx-auto text-center" md="4">
                    <img
                      className="img-circle img-no-padding img-responsive"
                      src={target}
                      alt="settings"
                    />
                    <h2 className="sub-title">Setting Standards</h2>
                    <h5 className="custom-description">
                      Providing guidance and direction for the future of the
                      people profession
                    </h5>
                    <br />
                    <Button
                      className="btn-link text-info text-capitalize font-weight-normal"
                      color="primary"
                      outline>
                      Explore resources{" "}
                      <i class="fa fa-caret-right" aria-hidden="true"></i>
                    </Button>
                  </Col>
                  <Col className="mx-auto text-center" md="4">
                    <img
                      className="img-circle img-no-padding img-responsive"
                      src={change}
                      alt="change"
                    />
                    <h2 className="sub-title">Diving Change</h2>
                    <h5 className="custom-description">
                      Over 700 members making a difference in workspaces and
                      lives every day
                    </h5>
                    <br />
                    <Button
                      className="btn-link text-info text-capitalize font-weight-normal"
                      color="primary"
                      outline>
                      Read newsletter{" "}
                      <i class="fa fa-caret-right" aria-hidden="true"></i>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-left bottom-section">
          <Container>
            <Row classList="mb-4">
              <Row className="text-left d-block">
                <h2 className="custom-title mt-2 mb-4">Updates</h2>
              </Row>
              <Row>
                <Col md="4">
                  <h5 className="info-title news-head text-center">
                    Latest from our newsletter
                  </h5>
                  <NavLink className="news-link" to="/membership" tag={Link}>
                    <img
                      className="img-rounded img-no-padding img-responsive"
                      src={homeImage}
                      alt="knowledge"
                    />
                    <h2 className="mt-2">Knowledgable</h2>
                    <h5 className="custom-description">
                      Advancing knowledge and understanding about people
                      management and development
                    </h5>
                  </NavLink>
                </Col>
                <Col md="4">
                  <h5 className="info-title news-head text-center">
                    Latest from our newsletter
                  </h5>
                  <ListGroup flush>
                    <ListGroupItem className="transparent" tag="a" href="#">
                      Advancing knowledge and understanding about people
                      management and development
                      <br />
                      <span className="font-12 float-right font-italic">
                        Date: 19/11/2020
                      </span>
                    </ListGroupItem>
                    <ListGroupItem className="transparent" tag="a" href="#">
                      Advancing knowledge and understanding about people
                      management and development
                      <br />
                      <span className="font-12 float-right font-italic">
                        Date: 19/11/2020
                      </span>
                    </ListGroupItem>
                    <ListGroupItem className="transparent" tag="a" href="#">
                      Advancing knowledge and understanding about people
                      management and development
                      <br />
                      <span className="font-12 float-right font-italic">
                        Date: 19/11/2020
                      </span>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
                <Col md="4">
                  <h5 className="info-title news-head text-center">
                    Regulation Tracker
                  </h5>
                  <ListGroup flush>
                    <ListGroupItem className="transparent" tag="a" href="#">
                      Advancing knowledge and understanding about people
                      management and development
                      <br />
                      <span className="font-12 float-right font-italic">
                        Date: 19/11/2020
                      </span>
                    </ListGroupItem>
                    <ListGroupItem className="transparent" tag="a" href="#">
                      Advancing knowledge and understanding about people
                      management and development
                      <br />
                      <span className="font-12 float-right font-italic">
                        Date: 19/11/2020
                      </span>
                    </ListGroupItem>
                    <ListGroupItem className="transparent" tag="a" href="#">
                      Advancing knowledge and understanding about people
                      management and development
                      <br />
                      <span className="font-12 float-right font-italic">
                        Date: 19/11/2020
                      </span>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HomePage;
