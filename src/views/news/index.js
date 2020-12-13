import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import CustomHeader from "components/Headers/customHeader";
import homeImage from "assets/img/logo/home-img.jpg";
import { fetch_news } from "../../actions/newsAction";

const News = ({ fetch_news, newsData, loading, newsError }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  onmouseenter = () => setDropdownOpen(true);
  onmouseleave = () => setDropdownOpen(false);
  useEffect(() => {
    fetch_news();
    return function cleanup() {
      // document.body.classList.remove("profile-page");
    };
  }, []);
  return (
    <>
      <div className="about-header" data-parallax={true} ref={CustomHeader}>
        <div className="filter" />
        <Container>
          <Row>
            <Col md={7} sm={12} className=" mt-5 mr-auto text-bottom">
              <div className="mt-5 mb-2 motto">
                <h3 className="font-weight-bold text-white">News Feeds</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main">
        <div className="section text-left">
          <Container>
            <Row>
              <Col className="mx-auto mb-3" md={10}>
                <UncontrolledDropdown className="float-right btn-outline-default">
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    color="light"
                    data-toggle="dropdown"
                    href="#pablo"
                    id="dropdownMenuLink"
                    onClick={(e) => e.preventDefault()}
                    role="button"
                    className="font-12">
                    Select Category
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink">
                    <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                      All Categories
                    </DropdownItem>
                    <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                      Updates
                    </DropdownItem>
                    <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                      Covid 19
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>
            <Row>
              {newsData.data
                ? newsData.data.map((news, index) => (
                    <Col className="mx-auto mt-2" md={12} key={index}>
                      <div className="media p-3">
                        <img
                          src={homeImage}
                          height="200"
                          className="mr-3 media-image"
                          alt="News Image"
                        />
                        <div className="media-body">
                          <a
                            tag={Link}
                            to="/"
                            className="mt-2 news-link font-weight-bold">
                            {news.newsTitle}
                          </a>
                          <br />
                          <span className="font-12">
                            <strong>Category</strong>: {news.newsCategory}
                          </span>
                          <p className="mt-4">{news.newsDesc}</p>
                          <span className="font-12 float-right mt-4">
                            {news.created_at.split("T")[0]}
                          </span>
                        </div>
                      </div>
                    </Col>
                  ))
                : ""}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ News }) => {
  const { newsData, loading, newsError } = News;
  return { newsData, loading, newsError };
};
export default connect(mapStateToProps, { fetch_news })(News);
