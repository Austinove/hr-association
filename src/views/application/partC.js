import React from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Button,
} from "reactstrap";

const PartC = () => {
  return (
    <form className="mb-4">
      <Row className="text-center">
        <Col md={10} className="mr-auto mb-5">
          <strong>
            <u className="font-weight-bold font-17">
              CURRENT WORKING INFORMATION{" "}
            </u>
          </strong>
        </Col>
      </Row>
      <Row>
        <Col md={10} className="mr-auto ml-5">
          <Row className="mt-2">
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="employeeName">
                  Your Name
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="text"
                  name="employeeName"
                  id="employeeName"
                  placeholder="Enter employeeName"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="job">
                  Current Job Title
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="text"
                  name="job"
                  id="job"
                  placeholder="Enter Your Job"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="exampleEmail">
                  Email address
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Enter email"
                />
                <FormText color="muted">
                  We'll never share your email with anyone else.
                </FormText>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="location">
                  Physical Location
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Enter Your Location"
                />
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </form>
  );
};

export default PartC;
