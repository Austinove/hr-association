import React from "react";
import { Button, Container } from "reactstrap";
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
        className="page-header"
        data-parallax={true}
        ref={pageHeader}>
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Human Resource Association</h1>
            <h3>Start with us</h3>
            <br />
            <Button className="btn-round" color="neutral" type="button" outline>
              Click here
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default PageHeader;
