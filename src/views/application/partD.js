import React from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Row,
  Col,
  Table,
} from "reactstrap";

const PartD = () => {
  return (
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
                <Label className="font-weight-bold" Htmlfor="post">
                  Post Address
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="text"
                  name="post"
                  id="post"
                  placeholder="Enter Post Address"
                />
              </FormGroup>
            </Col>
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
          </Row>
          <Row className="mt-2">
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
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="location">
                  Physical Address
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
          <Row className="mt-2">
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="Title">
                  Job Title
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="text"
                  name="Title"
                  id="Title"
                  placeholder="Enter Job Title"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="Telephone">
                  What is the main sector of your organization (e.g. Water,
                  Banking e.t.c.)?
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
          <Row className="mt-2">
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="Title">
                  Staff Members Joining
                </Label>
                <span className="text-danger font-12 ml-2">*</span>
                <Input
                  className="reg-inputs"
                  type="number"
                  min="1"
                  name="Title"
                  id="Title"
                  placeholder="e.g 1"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="font-weight-bold" Htmlfor="Telephone">
                  What is your area of interest or what you would like HRMAU to
                  contribute to your organisation??
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
          <hr />
          <Row className="mt-2">
            <Row className="mb-4 mt-2">
              <span className="ml-4 custom-color font-weight-bold font-14">
                List Interested Staff Members
              </span>
            </Row>
            <Row className="mb-4">
              <Col md={4}>
                <FormGroup>
                  <Label className="font-weight-bold" Htmlfor="name">
                    Name
                  </Label>
                  <span className="text-danger font-12 ml-2">*</span>
                  <Input
                    className="reg-inputs"
                    type="text"
                    min="1"
                    name="name"
                    id="name"
                    placeholder="e.g 1"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label className="font-weight-bold" Htmlfor="Telephone">
                    Telephone
                  </Label>
                  <span className="text-danger font-12 ml-2">*</span>
                  <Input
                    className="reg-inputs"
                    type="text"
                    name="telephone"
                    id="exampletelephone"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label className="font-weight-bold" Htmlfor="staffEmail">
                    Email
                  </Label>
                  <span className="text-danger font-12 ml-2">*</span>
                  <Input
                    className="reg-inputs"
                    type="email"
                    name="staffEmail"
                    id="staffEmail"
                    placeholder="email@email.com"
                  />
                </FormGroup>
              </Col>
              <Col md={8}>
                <FormGroup>
                  <Label className="font-weight-bold" Htmlfor="Telephone">
                    Area of interest/contribution
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
              <Col className="vertical-align-center">
                <Button
                  color="warning"
                  className="btn-sm mt-5"
                  outline
                  type="submit">
                  Add To List
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
                      ggjk jhfukfm guihio u gjh uoyi h kjhiyhoyi y uhhk ho l
                      hliuh y i
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Row>
        </Col>
      </Row>
    </form>
  );
};

export default PartD;
