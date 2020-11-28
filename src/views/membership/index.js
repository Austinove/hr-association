import React from "react";
import { Container, Row, Col, CardText } from "reactstrap";
import CustomHeader from "components/Headers/customHeader";

const Membership = () => {
  return (
    <>
      <div className="about-header" data-parallax={true} ref={CustomHeader}>
        <div className="filter" />
        <Container>
          <Row>
            <Col md={7} sm={12} className=" mt-5 mr-auto text-bottom">
              <div className="mt-5 mb-2 motto">
                <h3 className="font-weight-bold text-white">Membership</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main">
        {/* <div className="bg-img"></div> */}
        <div className="section pt-4 bg-white text-left">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h3 className="custom-title font-weight-bold">
                  Who can be a member?
                </h3>
                <div className="first-list mt-3">
                  <h4 className="title">
                    <i class="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                    Members
                  </h4>
                  <h5 className="description ml-5">
                    Full-time Practitioners of HRM
                  </h5>
                </div>
                <div className="first-list mt-3">
                  <h4 className="title">
                    <i class="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                    Associates
                  </h4>
                  <h5 className="description ml-5">
                    Individuals who are not HR practitioners but are connected
                    to HR practice
                  </h5>
                </div>
                <div className="first-list mt-3">
                  <h4 className="title">
                    <i class="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                    Student Member
                  </h4>
                  <h5 className="description ml-5">
                    Individuals who are undertaking a course in HRM or related
                    subject
                  </h5>
                </div>
                <div className="first-list mt-3">
                  <h4 className="title">
                    <i class="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                    Retired Members
                  </h4>
                  <h5 className="description ml-5">
                    Individual who have retired in the active HRM practice
                  </h5>
                </div>
                <div className="first-list mt-3">
                  <h4 className="title">
                    <i class="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                    Corporate Members
                  </h4>
                  <h5 className="description ml-5">
                    Institutions with the HRM function
                  </h5>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h3 className="custom-title font-weight-bold">
                  Join the association today
                </h3>
                <p className="mt-4 font-17">
                  If you meet all the criteria below, please click register now
                  to begin. Please review benefits and fees here.
                </p>
                <ul>
                  <li>
                    <p className="mt-4 font-17">
                      Must have studied Human Resource Management at
                      undergraduate or postgraduate level or practicing Human
                      Resource in formal organizations
                    </p>
                  </li>
                  <li>
                    <p className="mt-4 font-17">
                      Must not have any criminal record in employment.
                    </p>
                  </li>
                  <li>
                    <p className="mt-4 font-17">
                      Must be willing to comply with the fees structure.
                    </p>
                  </li>
                  <li>
                    <p className="mt-4 font-17">
                      Must be willing to remain non-political
                    </p>
                  </li>
                  <li>
                    <p className="mt-4 font-17">
                      Must be willing to abide by code of ethics
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Membership;
