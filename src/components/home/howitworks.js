import React from "react";
import { Card } from "react-bootstrap";
import { StyledCardGroup } from "./howitworks.style";

import buyLogo from "../../../src/assets/images/buy.png";
import createLogo from "../../../src/assets/images/create.png";
import browseLogo from "../../../src/assets/images/browse.png";

export const HowItWorks = () => {
  return (
    <StyledCardGroup>
      <Card className="p-3">
        <Card.Img variant="top" src={browseLogo} />
        <Card.Body>
          <Card.Title>Browse</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. This is
            a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-3">
        <Card.Img variant="top" src={buyLogo} />
        <Card.Body>
          <Card.Title>Buy</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content. This card has supporting text below as a natural
            lead-in to additional content.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-3">
        <Card.Img variant="top" src={createLogo} />
        <Card.Body>
          <Card.Title>Create</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </StyledCardGroup>
  );
};
