import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardImg, Card, CardBody, CardText, Button } from "reactstrap";
import homeImage from "assets/img/logo/home-img.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <Slider {...settings}>
        <Card>
          <CardImg top src={homeImage} alt="..." />
          <CardBody className="pb-2">
            <CardText className="pb-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content Some quick example text to build on the
              <Button
                className="mt-2 mb-2 float-right btn-link text-info text-capitalize font-weight-normal"
                color="primary"
                outline
                outline>
                More Details
                <i className="fa fa-caret-right" aria-hidden="true"></i>
              </Button>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top src={homeImage} alt="..." />
          <CardBody className="pb-2">
            <CardText className="pb-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content Some quick example text to build on the
              <Button
                className="mt-2 mb-2 float-right btn-link text-info text-capitalize font-weight-normal"
                color="primary"
                outline
                outline>
                More Details
                <i className="fa fa-caret-right" aria-hidden="true"></i>
              </Button>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top src={homeImage} alt="..." />
          <CardBody className="pb-2">
            <CardText className="pb-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content Some quick example text to build on the
              <Button
                className="mt-2 mb-2 float-right btn-link text-info text-capitalize font-weight-normal"
                color="primary"
                outline
                outline>
                More Details
                <i className="fa fa-caret-right" aria-hidden="true"></i>
              </Button>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top src={homeImage} alt="..." />
          <CardBody className="pb-2">
            <CardText className="pb-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content Some quick example text to build on the
              <Button
                className="mt-2 mb-2 float-right btn-link text-info text-capitalize font-weight-normal"
                color="primary"
                outline
                outline>
                More Details
                <i className="fa fa-caret-right" aria-hidden="true"></i>
              </Button>
            </CardText>
          </CardBody>
        </Card>
      </Slider>
    );
  }
}
