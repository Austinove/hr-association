import React from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Media,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
} from "reactstrap";
import CustomHeader from "components/Headers/customHeader";
const Knowledge = () => {
  return (
    <>
      <div className="about-header" data-parallax={true} ref={CustomHeader}>
        <div className="filter" />
        <Container>
          <Row>
            <Col md={7} sm={12} className=" mt-5 mr-auto text-bottom">
              <div className="mt-5 mb-2 motto">
                <h3 className="font-weight-bold text-white">Knowledge Feeds</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main">
        <div className="section text-left pt-5">
          <Container>
            <Row>
              <Col md={8}>
                <Row>
                  <Col md={6} className="mx-auto">
                    <InputGroup className="search-publication">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-search"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="Knowledge-inputs"
                        placeholder="Search Publication"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mt-4 text-center">
                  <Col md={12} className="mx-auto text-center">
                    <FormGroup check>
                      <Label check className="mr-4 font-12 font-weight-light">
                        <Input type="checkbox" checked /> All categories
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                      <Label check className="mr-4 font-12 font-weight-light">
                        <Input type="checkbox" />
                        News Updates
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                      <Label check className="mr-4 font-12 font-weight-light">
                        <Input type="checkbox" />
                        Covid 19
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mt-3">
                      <Label check className="mr-4 font-12 font-weight-light">
                        <Input type="checkbox" />
                        Covid 19
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                      <Label check className="mr-4 font-12 font-weight-light">
                        <Input type="checkbox" />
                        Covid 19
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                      <Label check className="mr-4 font-12 font-weight-light">
                        <Input type="checkbox" />
                        Covid 19
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="publication-container">
                  <Col className="mx-auto" md="12">
                    <Media>
                      <Media body className="p-2 mb-4">
                        <Media
                          heading
                          className="text-uppercase font-14 font-weight-bold">
                          Media heading Cras sit amet nibh libero, in gravida
                          nulla.
                        </Media>
                        <span>Hi,</span>
                        <p className="font-14">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        <Button
                          color="warning"
                          className="btn-sm btn-round text-capitalize font-weight-normal font-13 mt-2"
                          outline>
                          <i className="fa fa-download" aria-hidden="true"></i>{" "}
                          Download Document
                        </Button>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="mx-auto" md="12">
                    <Media>
                      <Media body className="p-2 mb-4">
                        <Media
                          heading
                          className="text-uppercase font-14 font-weight-bold">
                          Media heading Cras sit amet nibh libero, in gravida
                          nulla.
                        </Media>
                        <span>Hi,</span>
                        <p className="font-14">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        <Button
                          color="warning"
                          className="btn-sm btn-round text-capitalize font-weight-normal font-13 mt-2"
                          outline>
                          <i className="fa fa-download" aria-hidden="true"></i>{" "}
                          Download Document
                        </Button>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="mx-auto" md="12">
                    <Media>
                      <Media body className="p-2 mb-4">
                        <Media
                          heading
                          className="text-uppercase font-14 font-weight-bold">
                          Media heading Cras sit amet nibh libero, in gravida
                          nulla.
                        </Media>
                        <span>Hi,</span>
                        <p className="font-14">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        <Button
                          color="warning"
                          className="btn-sm btn-round text-capitalize font-weight-normal font-13 mt-2"
                          outline>
                          <i className="fa fa-download" aria-hidden="true"></i>{" "}
                          Download Document
                        </Button>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="mx-auto" md="12">
                    <Media>
                      <Media body className="p-2 mb-4">
                        <Media
                          heading
                          className="text-uppercase font-14 font-weight-bold">
                          Media heading Cras sit amet nibh libero, in gravida
                          nulla.
                        </Media>
                        <span>Hi,</span>
                        <p className="font-14">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        <Button
                          color="warning"
                          className="btn-sm btn-round text-capitalize font-weight-normal font-13 mt-2"
                          outline>
                          <i className="fa fa-download" aria-hidden="true"></i>{" "}
                          Download Document
                        </Button>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="mx-auto" md="12">
                    <Media>
                      <Media body className="p-2 mb-4">
                        <Media
                          heading
                          className="text-uppercase font-14 font-weight-bold">
                          Media heading Cras sit amet nibh libero, in gravida
                          nulla.
                        </Media>
                        <span>Hi,</span>
                        <p className="font-14">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        <Button
                          color="warning"
                          className="btn-sm btn-round text-capitalize font-weight-normal font-13 mt-2"
                          outline>
                          <i className="fa fa-download" aria-hidden="true"></i>{" "}
                          Download Document
                        </Button>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="mx-auto" md="12">
                    <Media>
                      <Media body className="p-2 mb-4">
                        <Media
                          heading
                          className="text-uppercase font-14 font-weight-bold">
                          Media heading Cras sit amet nibh libero, in gravida
                          nulla.
                        </Media>
                        <span>Hi,</span>
                        <p className="font-14">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        <Button
                          color="warning"
                          className="btn-sm btn-round text-capitalize font-weight-normal font-13 mt-2"
                          outline>
                          <i className="fa fa-download" aria-hidden="true"></i>{" "}
                          Download Document
                        </Button>
                      </Media>
                    </Media>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <Container className="pub-forms pt-1 pb-2 px-5">
                  <h4 className="font-weight-bold mb-4">
                    Have you published anything recently?
                  </h4>
                  <span className="text-white">
                    If you think human resource professionals would benefit from
                    your publication, we would like to add it to the knowledge
                    hub.
                  </span>
                  <form className="p-2 mt-2 mb-5">
                    <FormGroup>
                      <Label className="text-white" Htmlfor="firstName">
                        First Name<span className="warning">*</span>
                      </Label>
                      <Input
                        type="text"
                        className="Knowledge-inputs"
                        name="firstName"
                        id="firstName"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className="text-white" Htmlfor="lastName">
                        Last Name <span className="warning">*</span>
                      </Label>
                      <Input
                        type="text"
                        className="Knowledge-inputs"
                        name="lastName"
                        id="lastName"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className="text-white" Htmlfor="exampleEmail">
                        Email address <span className="warning">*</span>
                      </Label>
                      <Input
                        className="Knowledge-inputs"
                        type="email"
                        name="email"
                        id="exampleEmail"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className="text-white" Htmlfor="phone">
                        Phone <span className="warning">*</span>
                      </Label>
                      <Input
                        type="text"
                        className="Knowledge-inputs"
                        name="phone"
                        id="phone"
                      />
                    </FormGroup>
                    <Button
                      color="default"
                      outline
                      className="btn-sm font-12 float-right text-white font-weight-normal text-capitalize"
                      type="submit">
                      Submit
                    </Button>
                  </form>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Knowledge;
