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
import { Formik } from "formik";
import * as Yup from "yup";
const PartC = () => {
  return (
    <Formik
      initialValues={{
        job: "",
        employeeName: "",
        email: "",
        location: "",
      }}
      validationSchema={Yup.object({
        job: Yup.string().required("Enter your job title"),
        employeeName: Yup.string().required("Enter your employeeName"),
        email: Yup.string()
          .email("Invalid Email")
          .required("Enter your email title"),
        location: Yup.string().required("Enter your location"),
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
                    <Label className="font-weight-bold" for="employeeName">
                      Your Name
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      className="reg-inputs"
                      type="text"
                      name="employeeName"
                      id="employeeName"
                      placeholder="Enter employeeName"
                      required
                      value={values.employeeName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.employeeName && errors.employeeName
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.employeeName && errors.employeeName ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.employeeName}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="job">
                      Current Job Title
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      className="reg-inputs"
                      type="text"
                      name="job"
                      id="job"
                      placeholder="Enter Your Job"
                      required
                      value={values.job}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.job && errors.job
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.job && errors.job ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.job}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="exampleEmployer">
                      Employers address
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      className="reg-inputs"
                      type="empAddress"
                      name="empAddress"
                      id="exampleempAddress"
                      placeholder="Enter EmployeeesAddress"
                      required
                      value={values.empAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.empAddress && errors.empAddress
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.email && errors.email ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.email}
                      </div>
                    ) : null}
                    <FormText color="muted">
                      We'll never share your email with anyone else.
                    </FormText>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="location">
                      Physical Location
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      className="reg-inputs"
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Enter Your Location"
                      required
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.location && errors.location
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.location && errors.location ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.location}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
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

export default PartC;
