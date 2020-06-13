import styled from "styled-components";
import { CardDeck } from "react-bootstrap";

export const StyledCardGroup = styled(CardDeck)`
  border-radius: none;
  display: flex;
  justify-content: space-around;
  font-family: "Avenir", serif;

  && .card {
    border: none;
    margin-bottom: 20px;
  }

  && .card:nth-child(2) {
  }

  && .card-title {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }

  @media screen and (min-width: 320px) {
    flex-direction: column;
  }
`;
