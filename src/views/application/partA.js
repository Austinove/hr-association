import React from "react";

import { FormGroup, Label, Input, FormText, Button, Row } from "reactstrap";
import Col from "reactstrap/lib/Col";

const PartA = () => {
  return (
    <form className="mb-4">
      <Row className="text-center">
        <Col md={10} className="mr-auto mb-5">
          <strong>
            <u className="font-weight-bold font-17">PERSONAL DETAILS</u>
          </strong>
        </Col>
      </Row>
      <Row>
        <Col md={10} className="mr-auto ml-5">
          <Row className="mt-2">
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" for="surname">
                  SurName
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="Enter Surname"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="Title">
                  Title
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="text"
                  name="Title"
                  id="Title"
                  placeholder="Enter Your Title"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="otherName">
                  Other Names
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="text"
                  name="otherName"
                  id="otherName"
                  placeholder="Enter Your Other Name"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="sex">
                  Sex
                </Label>{" "}
                <span className="text-danger font-12 ml-2">*</span>
                <br />
                <div className="form-check-radio form-check-inline mt-2">
                  <Label className="form-check-label">
                    <Input
                      className="reg-inputs"
                      type="radio"
                      name="sex"
                      id="male"
                      value="option1"
                    />
                    Male<span className="form-check-sign"></span>
                  </Label>
                </div>
                <div className="form-check-radio form-check-inline">
                  <Label className="form-check-label">
                    <Input
                      className="reg-inputs"
                      type="radio"
                      name="sex"
                      id="female"
                      value="option1"
                    />
                    Female<span className="form-check-sign"></span>
                  </Label>
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="DOB">
                  Date of Birth
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="date"
                  name="DOB"
                  id="DOB"
                  min="02-02-2020"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="nationality">
                  Nationality
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="text"
                  name="Nationality"
                  id="Nationality"
                  placeholder="Enter Your Nationality"
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
                <Label className="font-weight-bold" Htmlfor="fax">
                  Fax
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="text"
                  name="Fax"
                  id="Fax"
                  placeholder="Enter Fax Number"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="Telephone">
                  Telephone (Mobile)
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="text"
                  name="Telephone"
                  id="Telephone"
                  placeholder="Enter Telephone Number"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="Telephone">
                  What is your area of interest or what you intend to contribute
                  to the HRMAU?
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="textarea"
                  min="50"
                  row="2"
                  name="text"
                  id="exampleText"
                />
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </form>
  );
};

export default PartA;
