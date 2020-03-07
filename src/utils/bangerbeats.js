import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPencilAlt,
  faCartPlus,
  faDownload
} from "@fortawesome/free-solid-svg-icons";

export const howItWorks = [
  {
    id: 1,
    logo: <FontAwesomeIcon icon={faGlobe} size={"2x"} />,
    step: "Browse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 2,
    logo: <FontAwesomeIcon icon={faPencilAlt} size={"2x"} />,
    step: "Create",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    logo: <FontAwesomeIcon icon={faCartPlus} size={"2x"} />,
    step: "Buy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 4,
    logo: <FontAwesomeIcon icon={faDownload} size={"2x"} />,
    step: "Download",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

export const topProducers = [
  {
    id: 1,
    photo: "https://picsum.photos/seed/picsum/200/200/?blur",
    stagename: "Trap Beats"
  },
  {
    id: 2,
    photo: "https://picsum.photos/seed/picsum/200/200/?blur",
    stagename: "Reek Beats"
  },
  {
    id: 3,
    photo: "https://picsum.photos/seed/picsum/200/200/?blur",
    stagename: "Sense Beats"
  },
  {
    id: 4,
    photo: "https://picsum.photos/seed/picsum/200/200/?blur",
    stagename: "Flptyce Beats"
  }
];

export const beatCategories = [
  {
    id: 1,
    photo: "https://picsum.photos/200/200/?blur",
    name: "Afro Beat"
  },
  {
    id: 2,
    photo: "https://picsum.photos/200/200/?blur",
    name: "Rap Beat"
  },
  {
    id: 3,
    photo: "https://picsum.photos/200/200/?blur",
    name: "Dance Hall"
  },
  {
    id: 4,
    photo: "https://picsum.photos/200/200/?blur",
    name: "Raggae Beat"
  }
];

export const typeBeats = [
  {
    id: 1,
    photo: "https://picsum.photos/id/237/200/200",
    name: "Afro Beat"
  },
  {
    id: 2,
    photo: "https://picsum.photos/id/237/200/200",
    name: "Rap Beat"
  },
  {
    id: 3,
    photo: "https://picsum.photos/id/237/200/200",
    name: "Dance Hall"
  },
  {
    id: 4,
    photo: "https://picsum.photos/id/237/200/200",
    name: "Raggae Beat"
  }
];

const brand = {
  brandname: "BANGERBEAT"
};
export default brand;
