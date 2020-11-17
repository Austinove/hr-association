import React from "react";
import { Container, Row, Col } from "reactstrap";

const Leadership = () => {
  return (
    <div className="main">
      <div className="section text-left">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <h2 className="title">Leadership Page</h2>
              <h5 className="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Leadership;
