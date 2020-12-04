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

const PartE = () => {
  return (
    <form>
      <Row className="text-center">
        <Col md={10} className="mr-auto mb-5">
          <strong>
            <u className="font-weight-bold font-17">EDUCATION INFORMATION </u>
          </strong>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <FormGroup>
            <Label for="instituteName">
              Institution/University/College Name
            </Label>
            <Input
              className="reg-inputs"
              type="text"
              name="instituteName"
              id="instituteName"
              placeholder="Enter InstituteName"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label Htmlfor="qualitication">
              Resouece related Qualifications
            </Label>
            <Input
              type="file"
              className="reg-inputs"
              multiple
              name="qualifications"
            />
            <FormText color="danger">
              <i>
                • Attach photocopies of academic transcripts and a passport
                photograph.(Vital)
              </i>
            </FormText>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="qualifications">What do you hope to complete</Label>
            <Input
              className="reg-inputs"
              type="text"
              name="qualifications"
              id="qualifications"
              placeholder="Enter qualifications"
            />
          </FormGroup>
        </Col>
      </Row>
    </form>
  );
};

export default PartE;
