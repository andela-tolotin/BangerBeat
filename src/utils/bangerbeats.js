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
    photo: "https://picsum.photos/seed/picsum/200/200",
    stagename: "Trap Beats"
  },
  {
    id: 2,
    photo: "https://picsum.photos/seed/picsum/200/200",
    stagename: "Reek Beats"
  },
  {
    id: 3,
    photo: "https://picsum.photos/seed/picsum/200/200",
    stagename: "Sense Beats"
  },
  {
    id: 4,
    photo: "https://picsum.photos/seed/picsum/200/200",
    stagename: "Flptyce Beats"
  }
];

export const beatCategories = [
  {
    id: 1,
    photo: "https://picsum.photos/200/200",
    name: "Afro Beat"
  },
  {
    id: 2,
    photo: "https://picsum.photos/200/200",
    name: "Rap Beat"
  },
  {
    id: 3,
    photo: "https://picsum.photos/200/200",
    name: "Dance Hall"
  },
  {
    id: 4,
    photo: "https://picsum.photos/200/200",
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
  },
  {
    id: 5,
    photo: "https://picsum.photos/id/237/200/200",
    name: "Afro Beat"
  },
  {
    id: 6,
    photo: "https://picsum.photos/id/237/200/200",
    name: "Rap Beat"
  },
  {
    id: 7,
    photo: "https://picsum.photos/id/237/200/200",
    name: "Dance Hall"
  },
  {
    id: 8,
    photo: "https://picsum.photos/id/237/200/200",
    name: "Raggae Beat"
  }
];

const brand = {
  brandname: "BANGERBEAT",
  company_address:
    "Banger beats, Herbert Macaulay Road, Opposite WAEC office, Yaba Lagos"
};
export default brand;

export const supportLinks = [
  {
    title: "Support",
    url: ""
  },
  {
    title: "Terms",
    url: ""
  },
  {
    title: "FAQ",
    url: ""
  },
  {
    title: "Cookie Policy",
    url: ""
  },
  {
    title: "Contact Us",
    url: ""
  },
  {
    title: "Privacy Policy",
    url: ""
  }
];

export const socialLinks = [
  {
    title: "Facebook",
    url: ""
  },
  {
    title: "Twitter",
    url: ""
  },
  {
    title: "Instagram",
    url: ""
  },
  {
    title: "Youtube",
    url: ""
  }
];
