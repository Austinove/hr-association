import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
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
    <Formik
      initialValues={{
        instituteName: "",
        std_completion: "",
      }}
      validationSchema={Yup.object({
        instituteName: Yup.string().required("Enter your institute Name"),
        std_completion: Yup.string().required("Enter your Completions"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          // register_user_request(values);
        }, 400);
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form>
          <Row className="text-center">
            <Col md={10} className="mr-auto mb-5">
              <strong>
                <u className="font-weight-bold font-17">
                  EDUCATION INFORMATION{" "}
                </u>
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
                  required
                  value={values.instituteName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.instituteName && errors.instituteName
                      ? "reg-inputs errorInput"
                      : "reg-inputs"
                  }
                />
                {touched.instituteName && errors.instituteName ? (
                  <div className="text-danger mt-1 font-12">
                    {errors.instituteName}
                  </div>
                ) : null}
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="qualitication">
                  Resouece related Qualifications
                </Label>
                <Input type="file" multiple name="qualifications" required />
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
                <Label for="completion">What do you hope to complete</Label>
                <Input
                  className="reg-inputs"
                  type="text"
                  name="std_completion"
                  id="std_completion"
                  placeholder="Enter completion"
                  required
                  value={values.std_completion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.std_completion && errors.std_completion
                      ? "reg-inputs errorInput"
                      : "reg-inputs"
                  }
                />
                {touched.std_completion && errors.std_completion ? (
                  <div className="text-danger mt-1 font-12">
                    {errors.std_completion}
                  </div>
                ) : null}
              </FormGroup>
            </Col>
          </Row>
          <Button
            size="md"
            variant="outline-info"
            className="outline-custom-purple"
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}>
            <i className="fa fa-check-circle-o" aria-hidden="true"></i> Next
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default PartE;
