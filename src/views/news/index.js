import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Media,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  NavLink,
  NavItem,
} from "reactstrap";
import CustomHeader from "components/Headers/customHeader";
import homeImage from "assets/img/logo/home-img.jpg";

const News = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  onmouseenter = () => setDropdownOpen(true);
  onmouseleave = () => setDropdownOpen(false);
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
              <Col className="mx-auto mt-2" md="12">
                <div class="media p-3">
                  <img
                    src={homeImage}
                    height="200"
                    className="mr-3 media-image"
                    alt="News Image"
                  />
                  <div class="media-body">
                    <a href="#" class="mt-2 news-link font-weight-bold">
                      ras sit amet nibh libero, in gravida nulla. Nulla vel
                    </a>
                    <br />
                    <span className="font-12">
                      <strong>Category</strong>: Updates
                    </span>
                    <p className="mt-4">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus. Cras sit amet nibh
                      libero, in gravida nulla. Nulla vel metus scelerisque ante
                      sollicitudin. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus. Cras sit amet nibh libero, in gravida nulla.
                      Nulla vel metus scelerisque ante sollicitudin. Cras purus
                      odio, vestibulum in vulputate at, tempus viverra turpis.
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                    <span className="font-12 float-right mt-4">
                      December 02, 2020
                    </span>
                  </div>
                </div>
              </Col>
              <Col className="mx-auto mt-2" md="12">
                <div class="media p-3">
                  <img
                    src={homeImage}
                    height="200"
                    className="mr-3 media-image"
                    alt="News Image"
                  />
                  <div class="media-body">
                    <a href="#" class="mt-2 news-link font-weight-bold">
                      ras sit amet nibh libero, in gravida nulla. Nulla vel
                    </a>
                    <br />
                    <span className="font-12">
                      <strong>Category</strong>: Updates
                    </span>
                    <p className="mt-4">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus. Cras sit amet nibh
                      libero, in gravida nulla. Nulla vel metus scelerisque ante
                      sollicitudin. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus. Cras sit amet nibh libero, in gravida nulla.
                      Nulla vel metus scelerisque ante sollicitudin. Cras purus
                      odio, vestibulum in vulputate at, tempus viverra turpis.
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                    <span className="font-12 float-right mt-4">
                      December 02, 2020
                    </span>
                  </div>
                </div>
              </Col>
              <Col className="mx-auto mt-2" md="12">
                <div class="media p-3">
                  <img
                    src={homeImage}
                    height="200"
                    className="mr-3 media-image"
                    alt="News Image"
                  />
                  <div class="media-body">
                    <a href="#" class="mt-2 news-link font-weight-bold">
                      ras sit amet nibh libero, in gravida nulla. Nulla vel
                    </a>
                    <br />
                    <span className="font-12">
                      <strong>Category</strong>: Updates
                    </span>
                    <p className="mt-4">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus. Cras sit amet nibh
                      libero, in gravida nulla. Nulla vel metus scelerisque ante
                      sollicitudin. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus. Cras sit amet nibh libero, in gravida nulla.
                      Nulla vel metus scelerisque ante sollicitudin. Cras purus
                      odio, vestibulum in vulputate at, tempus viverra turpis.
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                    <span className="font-12 float-right mt-4">
                      December 02, 2020
                    </span>
                  </div>
                </div>
              </Col>
              <Col className="mx-auto mt-2" md="12">
                <div class="media p-3">
                  <img
                    src={homeImage}
                    height="200"
                    className="mr-3 media-image"
                    alt="News Image"
                  />
                  <div class="media-body">
                    <a href="#" class="mt-2 news-link font-weight-bold">
                      ras sit amet nibh libero, in gravida nulla. Nulla vel
                    </a>
                    <br />
                    <span className="font-12">
                      <strong>Category</strong>: Updates
                    </span>
                    <p className="mt-4">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus. Cras sit amet nibh
                      libero, in gravida nulla. Nulla vel metus scelerisque ante
                      sollicitudin. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus. Cras sit amet nibh libero, in gravida nulla.
                      Nulla vel metus scelerisque ante sollicitudin. Cras purus
                      odio, vestibulum in vulputate at, tempus viverra turpis.
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                    <span className="font-12 float-right mt-4">
                      December 02, 2020
                    </span>
                  </div>
                </div>
              </Col>
              <Col className="mx-auto mt-2" md="12">
                <div class="media p-3">
                  <img
                    src={homeImage}
                    height="200"
                    className="mr-3 media-image"
                    alt="News Image"
                  />
                  <div class="media-body">
                    <a href="#" class="mt-2 news-link font-weight-bold">
                      ras sit amet nibh libero, in gravida nulla. Nulla vel
                    </a>
                    <br />
                    <span className="font-12">
                      <strong>Category</strong>: Updates
                    </span>
                    <p className="mt-4">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus. Cras sit amet nibh
                      libero, in gravida nulla. Nulla vel metus scelerisque ante
                      sollicitudin. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in
                      faucibus. Cras sit amet nibh libero, in gravida nulla.
                      Nulla vel metus scelerisque ante sollicitudin. Cras purus
                      odio, vestibulum in vulputate at, tempus viverra turpis.
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                    <span className="font-12 float-right mt-4">
                      December 02, 2020
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default News;
