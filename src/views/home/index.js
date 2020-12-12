import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  NavLink,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { connect } from "react-redux";
import knowledge from "assets/img/logo/knowledge.png";
import target from "assets/img/logo/target.png";
import change from "assets/img/logo/change-2.png";
import SimpleSlider from "./carousel";
import EventTimer from "./timer";
import PageHeader from "components/Headers";
import CardTitle from "reactstrap/lib/CardTitle";
import CardBody from "reactstrap/lib/CardBody";
import Card from "reactstrap/lib/Card";
import { fetch_homeData } from "../../actions/homeAction";

function HomePage() {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    fetch_homeData();
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <PageHeader />
      <div className="main">
        <div className="section text-left top-section">
          <Container>
            <Row>
              <Col className="mx-auto" md="4">
                <h1 className="custom-color font-weight-bold ml-2 mb-2 about-head">
                  What we do
                </h1>
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
                    <h2 className="sub-title custom-color font-weight-bold">
                      Knowledgable
                    </h2>
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
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </Button>
                  </Col>
                  <Col className="mx-auto text-center" md="4">
                    <img
                      className="img-circle img-no-padding img-responsive"
                      src={target}
                      alt="settings"
                    />
                    <h2 className="sub-title custom-color font-weight-bold">
                      Setting Standards
                    </h2>
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
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </Button>
                  </Col>
                  <Col className="mx-auto text-center" md="4">
                    <img
                      className="img-circle img-no-padding img-responsive"
                      src={change}
                      alt="change"
                    />
                    <h2 className="sub-title custom-color font-weight-bold">
                      Diving Change
                    </h2>
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
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-img"></div>
        <div className="section text-left float-section">
          <Container>
            <Row className="mb-4">
              <Row className="text-left">
                <h2 className=" home-title text-white mt-2 mb-4 font-weight-bold">
                  Events/Trends
                </h2>
              </Row>
              <Row>
                <Col md="6" className="mx-auto">
                  <Card className="p-4">
                    <CardTitle>
                      <h5 className="custom-color custom-title news-head text-center">
                        Latest from our newsletter
                      </h5>
                    </CardTitle>
                    <CardBody>
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
                        <ListGroupItem
                          className="transparent mb-0"
                          tag="a"
                          href="#">
                          <Button
                            className="mt-2 mb-2 float-right btn-link text-info text-capitalize font-weight-normal"
                            color="primary"
                            outline
                            outline>
                            More About Events
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"></i>
                          </Button>
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" className="mx-auto">
                  <Card className="p-4">
                    <CardTitle>
                      <h5 className="custom-color custom-title news-head text-center">
                        Event countdown
                      </h5>
                    </CardTitle>
                    <CardBody>
                      <EventTimer />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Row>
          </Container>
        </div>
        <div className="section text-left bottom-section">
          <Container>
            <Row className="text-left d-block">
              <h2 className="home-title mt-2 mb-4 font-weight-bold">Updates</h2>
            </Row>
            <Row>
              <Col md={8}>
                <h5 className="custom-color news-head text-left font-weight-bold">
                  News Updates
                </h5>
                <SimpleSlider />
              </Col>
              <Col md={4}>
                <h5 className="custom-color news-head text-left font-weight-bold">
                  Regulation Tracker
                </h5>
                <ListGroup flush className="mt-4">
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
          </Container>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ HomeData }) => {
  const { homeData, loading, homeError } = HomeData;
  return { homeData, loading, homeError };
};
export default connect(mapStateToProps, { fetch_homeData })(HomePage);
