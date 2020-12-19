import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
const PartF = () => {
  return (
    <form>
      <Row className="text-center">
        <Col md={10} className="mr-auto mb-5">
          <strong>
            <u className="font-weight-bold font-17">CONFIRM THE INFORMATION </u>
          </strong>
        </Col>
      </Row>
      <Row>
        <Col md={10} className="mx-auto mb-5 p-4">
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> I confirm that the information I have
              provided is a representation of all my/our personal, academic,
              professional, organizational profile.
              <span className="form-check-sign">
                <span className="check"></span>
              </span>
            </Label>
            <Button
              color="warning"
              className="btn-sm mt-4 text-capitalize"
              outline>
              Click to Register{" "}
              <i className="fa fa-check" aria-hidden="true"></i>
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </form>
  );
};

export default PartF;
