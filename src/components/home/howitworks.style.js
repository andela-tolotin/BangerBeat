import styled from "styled-components";
import { CardColumns } from "react-bootstrap";

export const StyledCardGroup = styled(CardColumns)`
  border-radius: none;

  && .card {
    border: none;
    margin-bottom: 2em;
  }

  && .card:nth-child(1),
  .card:nth-child(2) {
    margin-right: 2em;
  }

  && .card:nth-child(2) {
    min-height: 35em;
    margin-bottom: 2em;
  }

  && .card-title {
    font-size: 1.8em;
    font-weight: 700;
    text-align: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
  }

  @media (min-width: 280px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;

    && .card:nth-child(1),
    .card:nth-child(2) {
      margin-right: inherit;
    }

    && .card:nth-child(2) {
      min-height: 35em;
      margin-bottom: 2em;
    }

    && .card-title {
      font-size: 1.5em;
    }

    && .p-3 {
      padding: 0 !important;
    }
  }
`;
