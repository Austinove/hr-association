import React from "react";
import { Button, Container } from "reactstrap";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
function PageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/logo/home-img.jpg") + ")",
        }}
        className="page-header home-header"
        data-parallax={true}
        ref={pageHeader}>
        <div className="filter" />
        <Container>
          <Row>
            <Col md={7} sm={12} className=" mt-2 ml-auto">
              <div className="motto text-center">
                <h1 className="font-weight-bold">
                  Human Resource Association of Uganda
                </h1>
                <h3>Start with us</h3>
                <br />
                <Button
                  className="btn-round"
                  color="neutral"
                  type="button"
                  outline>
                  Click to Register
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PageHeader;
