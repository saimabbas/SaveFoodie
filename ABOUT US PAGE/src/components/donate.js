import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "../images/logo.png";
import logo1 from "../images/logo2.png";
import logo2 from "../images/food_1.jpg";
import donation_1 from "../images/donation_1.jpg";
import donation_2 from "../images/donation_2.jpg";
import donation_4 from "../images/donation_4.jpg";
import donation_7 from "../images/donation_7.jpeg";
import Doante1 from "../images/Donate1.jpg";
import PayPal from "./paypal";
import Donate from "./donate_form";
import "./donate.css";

import { Card, Container, Row, Col, Button } from "react-bootstrap";

function donate() {
  return (
    <div>
      <div className="bg-light-green mt-1 round-border">
        <h4 className="pb-4 pt-4">
          JOINING OUR MISSION IS THE MOST IMPACTFUL WAY TO GIVE
        </h4>
      </div>

      {/* Image Slider */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={donation_4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={donation_2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={logo2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={donation_1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <hr></hr>

      {/* Division for Quote */}
      <div style={{ margin: "5%" }}>
        <h4 className="pb-4 pt-4" style={{ color: "red" }}>
          <b>
            HELP US SUPPORT FOOD BANKS TO PROVIDE PRACTICAL SUPPORT <br />
            TO PEOPLE IN CRISIS & CAMPAIGN FOR A UK WITHOUT <br /> THE NEED FOR
            FOOD BANKS
          </b>
        </h4>
      </div>
      <hr></hr>
      {/* Division for Card */}
      <div className="container-fluid row">
        {/* Division for Card-1 */}
        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
          <Card bg={"light"}>
            <Card.Header style={{ background: "#7fb75d", fontSize: "2rem" }}>
              <b>Donate To Help Kids And Families In Need</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                When you join SaveFoodie as a donor, you become someone we can
                count on to help families facing hunger. You also receive
                exclusive information and updates on critical hunger issues such
                as reducing food waste and improving summer meal programs for
                children.
              </Card.Title>
              <hr />
              <Card.Text>
                <b>How does SaveFoodie work to end hunger?</b>
                <br />
                For decades, the number of people living with hunger had been
                declining, but the changing climate, entrenched conflict and
                economic slowdowns are now making hunger worse.
                <b style={{ color: "red" }}>
                  Food insecurity is a global issue affecting 820 million people
                  around the world. As a nation, we know it isn’t right that
                  anyone should be left hungry or living in extreme poverty. But
                  whilst we work for long-term change, our network of food banks
                  provides emergency food and compassionate, dignified support
                  to people locked in crisis.
                </b>
                The services provided by food banks may vary from area to area
                as they react to the needs of their community to provide help
                and support to local people in crisis.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* Division for Card-2 */}
        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
          <div>
            <Card style={{ width: "100%", height: "28.6rem" }} bg={"light"}>
              <Card.Img
                variant="top"
                src={donation_7}
                style={{ width: "100%", height: "50%" }}
              />
              <Card.Body>
                <Card.Title>
                  YOUR GIFT CREATES A RELIABLE SOURCE OF FUNDING YEAR-ROUND TO
                  HELP PROVIDE MEALS TO FAMILIES FACING HUNGER.
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* Division for Donation Quote */}
      <div style={{ margin: "0%", background: "#ffd24f", textAlign: "left" }}>
        <div className="pb-4 pt-4" style={{ marginLeft: "2%" }}>
          <h4>
            Choose Gift Aid and increase the value of your donation to
            <br /> <b>£8.75 at</b> at <b>no extra cost to you</b>
          </h4>
          <p>
            I am a UK taxpayer and I agree to ActionAid claiming tax on all
            donations I make from today and during the four years prior to this
            date. Please treat my donations as Gift Aid donations{" "}
          </p>
          <p>
            I understand that if I pay less Income Tax and/or Capital Gains Tax
            than the amount of Gift Aid claimed on all my donations in the tax
            year it is my responsibility to pay any difference. ActionAid will
            reclaim 25p of tax on every £1 that has been given. Gift Aid money
            is used around the world wherever the need is greatest.
          </p>
        </div>
      </div>

      <div>
        {/* Division for Donation Form */}
        <div>
          <Donate />
        </div>
      </div>
      <hr></hr>
      {/* Division for Donation Quotes */}
      <div style={{ margin: "5%" }}>
        <h4 className="pb-4 pt-4" style={{ color: "red" }}>
          <b>
            {/* Logo Image */}
            <img src={logo} className="img-fluid logo-img" />
          </b>
        </h4>

        <Container fluid="md">
          <Row>
            <Col md={4}>
              {/* card-1 */}
              <Card style={{ width: "20rem", background: "#efefef" }} id="cad">
                <Card.Body>
                  <Card.Title style={{ color: "#7fb75d" }}>
                    <b>Charity</b>
                  </Card.Title>

                  <Card.Text>
                    "Charity ... is kind, it is not easily provok’d, it thinks
                    no evil, it believes all things, hopes all things."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              {/* card-2 */}
              <Card style={{ width: "20rem", background: "#efefef" }} id="cad">
                <Card.Body>
                  <Card.Title style={{ color: "#7fb75d" }}>
                    <b>Donate</b>
                  </Card.Title>

                  <Card.Text>
                    "Remember that the happiest people are not those getting
                    more, but those giving more."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              {/* card-3 */}
              <Card style={{ width: "20rem", background: "#efefef" }} id="cad">
                <Card.Body>
                  <Card.Title style={{ color: "#7fb75d" }}>
                    <b>Food</b>
                  </Card.Title>

                  <Card.Text>
                    "There is food for everyone on this planet, but not everyone
                    eats."<br></br>
                    "SAVE FOOD"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default donate;
