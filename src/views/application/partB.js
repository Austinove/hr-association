import React from "react";

import { FormGroup, Label, Input, Row, Col } from "reactstrap";

const PartB = () => {
  return (
    <form className="mb-4">
      <Row className="text-center">
        <Col md={10} className="mr-auto mb-5">
          <strong>
            <u className="font-weight-bold font-17">QUALIFICATION </u>
          </strong>
        </Col>
      </Row>
      <Row>
        <Col md={10} className="mr-auto ml-5">
          <Row className="mt-2">
            <Col md={10} className="mx-auto">
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="Telephone">
                  Qualification /Training?
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="textarea"
                  min="50"
                  row="3"
                  name="text"
                  id="exampleText"
                />
              </FormGroup>
            </Col>
            <Col md={10} className="mx-auto">
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="Telephone">
                  Relevant Experience/Research or Publications?
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="textarea"
                  min="50"
                  row="3"
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

export default PartB;
