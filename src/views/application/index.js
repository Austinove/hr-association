import React from "react";
import {
  Container,
  Row,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Multistep from "react-multistep";
import CustomHeader from "components/Headers/customHeader";
import PartA from "./partA";
import PartB from "./partB";
import PartC from "./partC";
import PartD from "./partD";
import PartE from "./partE";
import PartF from "./partF";

const Application = () => {
  const steps = [
    { name: "PART A", component: <PartA /> },
    { name: "PART B", component: <PartB /> },
    { name: "PART C", component: <PartC /> },
    { name: "PART D", component: <PartD /> },
    { name: "PART E", component: <PartE /> },
    { name: "PART F", component: <PartF /> },
  ];
  const prevStyle = {
    border: "1px solid rgb(170 170 170)",
    color: "rgb(255 249 241)",
    opacity: 1,
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: "bold",
    width: "150px",
    padding: "4px 10px",
    boxSizing: "border-box",
    backgroundColor: "rgb(251, 198, 88)",
    padding: "0.6rem",
    marginLeft: "20px",
  };
  const nextStyle = {
    border: "1px solid rgb(170 170 170)",
    color: "rgb(255 249 241)",
    opacity: 1,
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: "bold",
    width: "150px",
    padding: "4px 10px",
    boxSizing: "border-box",
    backgroundColor: "rgb(251, 198, 88)",
    padding: "0.6rem",
    marginLeft: "45px",
  };
  return (
    <>
      <div className="about-header" data-parallax={true} ref={CustomHeader}>
        <div className="filter" />
        <Container>
          <Row>
            <Col md={7} sm={12} className=" mt-5 mr-auto text-bottom">
              <div className="mt-5 mb-2 motto">
                <h3 className="font-weight-bold text-white">Register</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main">
        <div className="section text-left pt-3">
          <Container>
            <Row>
              <Col className="mx-auto" md={8}>
                <Row>
                  <Col md={6} className="vertical-align-center header-content">
                    <span className="font-weight-bold mt-2">
                      Select Membership Type to Continue{" "}
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </span>
                  </Col>
                  <Col md={6}>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="light"
                        data-toggle="dropdown"
                        href="#pablo"
                        id="dropdownMenuLink"
                        onClick={(e) => e.preventDefault()}
                        role="button"
                        className="font-12">
                        Select Type of Membership
                      </DropdownToggle>
                      <DropdownMenu aria-labelledby="dropdownMenuLink">
                        <DropdownItem
                          href="#"
                          onClick={(e) => e.preventDefault()}>
                          Professional Member
                        </DropdownItem>
                        <DropdownItem
                          href="#"
                          onClick={(e) => e.preventDefault()}>
                          Student Member
                        </DropdownItem>
                        <DropdownItem
                          href="#"
                          onClick={(e) => e.preventDefault()}>
                          Retired Member
                        </DropdownItem>
                        <DropdownItem
                          href="#"
                          onClick={(e) => e.preventDefault()}>
                          Coporate Member
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <Multistep
                  showNavigation={false}
                  steps={steps}
                  prevStyle={prevStyle}
                  nextStyle={nextStyle}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Application;
