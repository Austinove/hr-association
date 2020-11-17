import React from "react";
import { Container, Row, Col } from "reactstrap";

const Membership = () => {
  return (
    <div className="main">
      <div className="section text-left">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <h2 className="title">Membership Page</h2>
              <h5 className="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Membership;
