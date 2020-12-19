import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import {
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Table,
  Button,
} from "reactstrap";

import { submit_coporate } from "../../actions/coporateAction";

const Coporate = () => {
  return (
    <Formik
      initialValues={{
        location: "",
        fax: "",
        email: "",
        post: "",
        telephone: "",
        phy_location: "",
        jobTitle: "",
        sector: "",
        staffNumber: "",
        interest: "",
      }}
      validationSchema={Yup.object({
        location: Yup.string().required("Enter your location title"),
        fax: Yup.string().required("Enter your fax"),
        email: Yup.string()
          .email("Invalid Email")
          .required("Enter your email title"),
        post: Yup.string().required("Enter your post"),
        telephone: Yup.string().required("Enter your telephone"),
        phy_location: Yup.string().required("Enter your physical location"),
        jobTitle: Yup.string().required("Enter your job Title"),
        sector: Yup.string().required("Enter your Sector"),
        staffNumber: Yup.number().required("Enter your staff Number"),
        interest: Yup.string().required("Enter your Interest"),
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
                  ORGANIZATION INFORMATION{" "}
                </u>
              </strong>
            </Col>
          </Row>
          <Row>
            <Col md={10} className="mr-auto ml-5">
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="post">
                      Post Address
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      className="reg-inputs"
                      type="text"
                      name="post"
                      id="post"
                      placeholder="Enter Post Address"
                      required
                      value={values.post}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.post && errors.post
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.post && errors.post ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.post}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="exampleEmail">
                      Email address
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      className="reg-inputs"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.email && errors.email
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
              </Row>
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="fax">
                      Fax
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      className="reg-inputs"
                      type="text"
                      name="fax"
                      id="fax"
                      placeholder="Enter fax Number"
                      required
                      value={values.fax}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.fax && errors.fax
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.fax && errors.fax ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.fax}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="location">
                      Physical Address
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
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="Telephone">
                      Telephone (Mobile)
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      className="reg-inputs"
                      type="text"
                      name="telephone"
                      id="telephone"
                      placeholder="Enter telephone Number"
                      required
                      value={values.telephone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.telephone && errors.telephone
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.telephone && errors.telephone ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.telephone}
                      </div>
                    ) : null}
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
                      name="phy_location"
                      id="phy_location"
                      placeholder="Enter Your Location"
                      required
                      value={values.phy_location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.phy_location && errors.phy_location
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.phy_location && errors.phy_location ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.phy_location}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="Title">
                      Job Title
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      className="reg-inputs"
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      placeholder="Enter Job Title"
                      required
                      value={values.jobTitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.jobTitle && errors.jobTitle
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.jobTitle && errors.jobTitle ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.jobTitle}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="organization">
                      What is the main sector of your organization (e.g. Water,
                      Banking e.t.c.)?
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="textarea"
                      min="50"
                      row="2"
                      name="sector"
                      id="secror"
                      required
                      value={values.sector}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.sector && errors.sector
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.sector && errors.sector ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.sector}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="Title">
                      Staff Members Joining
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      className="reg-inputs"
                      type="number"
                      min="1"
                      name="staffNumber"
                      id="staffNumber"
                      placeholder="e.g 1"
                      required
                      value={values.staffNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.staffNumber && errors.staffNumber
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.staffNumber && errors.staffNumber ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.staffNumber}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="Telephone">
                      What is your area of interest or what you would like HRMAU
                      to contribute to your organisation??
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="textarea"
                      min="50"
                      row="2"
                      name="interest"
                      id="interest"
                      required
                      value={values.interest}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.interest && errors.interest
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.interest && errors.interest ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.interest}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Formik
                initialValues={{
                  name: "",
                  staffTelephone: "",
                  staffEmail: "",
                  staffInterest: "",
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required("Enter your name"),
                  staffTelephone: Yup.string().required(
                    "Enter your staff Telephone"
                  ),
                  staffEmail: Yup.string()
                    .email("Invalid email")
                    .required("Enter your staff Email"),
                  staffInterest: Yup.string().required(
                    "Enter your staff Interest"
                  ),
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
                    <Row className="mt-2">
                      <Row className="mb-4 mt-2">
                        <span className="ml-4 custom-color font-weight-bold font-14">
                          List Interested Staff Members
                        </span>
                      </Row>
                      <Row className="mb-4">
                        <Col md={4}>
                          <FormGroup>
                            <Label className="font-weight-bold" for="name">
                              Name
                            </Label>
                            <span className="text-danger font-12 ml-2">*</span>
                            <Input
                              type="text"
                              min="1"
                              name="name"
                              id="name"
                              placeholder="e.g 1"
                              required
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                touched.name && errors.name
                                  ? "reg-inputs errorInput"
                                  : "reg-inputs"
                              }
                            />
                            {touched.name && errors.name ? (
                              <div className="text-danger mt-1 font-12">
                                {errors.name}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label className="font-weight-bold" for="Telephone">
                              Telephone
                            </Label>
                            <span className="text-danger font-12 ml-2">*</span>
                            <Input
                              type="text"
                              name="staffTelephone"
                              id="staffTelephone"
                              required
                              value={values.staffTelephone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                touched.staffTelephone && errors.staffTelephone
                                  ? "reg-inputs errorInput"
                                  : "reg-inputs"
                              }
                            />
                            {touched.staffTelephone && errors.staffTelephone ? (
                              <div className="text-danger mt-1 font-12">
                                {errors.staffTelephone}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label
                              className="font-weight-bold"
                              for="staffEmail">
                              Email
                            </Label>
                            <span className="text-danger font-12 ml-2">*</span>
                            <Input
                              className="reg-inputs"
                              type="email"
                              name="staffEmail"
                              id="staffEmail"
                              placeholder="email@email.com"
                              required
                              value={values.staffEmail}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                touched.staffEmail && errors.staffEmail
                                  ? "reg-inputs errorInput"
                                  : "reg-inputs"
                              }
                            />
                            {touched.staffEmail && errors.staffEmail ? (
                              <div className="text-danger mt-1 font-12">
                                {errors.staffEmail}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md={8}>
                          <FormGroup>
                            <Label className="font-weight-bold" for="Telephone">
                              Area of interest/contribution
                            </Label>
                            <span className="text-danger font-12 ml-2">*</span>
                            <Input
                              type="textarea"
                              min="50"
                              row="2"
                              name="staffInterest"
                              id="staffInterest"
                              required
                              value={values.staffInterest}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                touched.staffInterest && errors.staffInterest
                                  ? "reg-inputs errorInput"
                                  : "reg-inputs"
                              }
                            />
                            {touched.staffInterest && errors.staffInterest ? (
                              <div className="text-danger mt-1 font-12">
                                {errors.staffInterest}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col className="vertical-align-center">
                          <Button
                            size="md"
                            variant="outline-info"
                            className="outline-custom-purple"
                            type="submit"
                            disabled={isSubmitting}
                            onClick={handleSubmit}>
                            <i
                              className="fa fa-check-circle-o"
                              aria-hidden="true"></i>{" "}
                            Next
                          </Button>
                        </Col>
                      </Row>
                      <Row>
                        <Table>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Telephone</th>
                              <th>Interests</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">John Doe</th>
                              <td>
                                <i>joh@doe.com</i>
                              </td>
                              <td>0706263042</td>
                              <td>
                                ggjk jhfukfm guihio u gjh uoyi h kjhiyhoyi y
                                uhhk ho l hliuh y i
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Row>
                      <Label check>
                        <Input type="checkbox" /> I confirm that the information
                        I have provided is a representation of all my/our
                        personal, academic, professional, organizational
                        profile.
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </Row>
                  </form>
                )}
              </Formik>
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

const mapStateToProps = ({ coporate }) => {
  const { userData, loading, submitError } = coporate;
  return { userData, loading, submitError };
};
export default connect(mapStateToProps, { submit_coporate })(Coporate);
