import React from "react";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import brand, {
  beatCategories,
  topProducers,
  typeBeats,
  supportLinks,
  socialLinks
} from "../utils/bangerbeats";

import { Row, Col, Image, Form } from "react-bootstrap";
import logo from "../logo.svg";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemsCarousel from "react-items-carousel";
import { HowItWorks as HowItWorksComponent } from "./home/howitworks";

const Stepper = ({ step }) => {
  return (
    <React.Fragment>
      <div className="process_wrapper" key={step.logo}>
        {step.logo}
        <h2 className="large_heading" title="Step 1">
          {step.step}
        </h2>
        <div className="small_text">{step.description}</div>
      </div>
    </React.Fragment>
  );
};

function HowItWorks(props) {
  return (
    <div className="how_it_works">
      <div className="processes">
        <div className="heading_big_black_text">How It Works</div>
        {HowItWorksComponent()}
      </div>
    </div>
  );
}

HowItWorks.propTypes = { callbackfn: PropTypes.func };
function TopProducer(props) {
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const chevronWidth = 20;
  return (
    <div className={"top_producers"}>
      <div className="producer_wrapper">
        <div className="large_heading">Top Producers</div>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={4}
          gutter={10}
          leftChevron={<FontAwesomeIcon icon={faChevronLeft} size={"2x"} />}
          rightChevron={<FontAwesomeIcon icon={faChevronRight} size={"2x"} />}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {topProducers.map(props.callbackfn)}
        </ItemsCarousel>
      </div>
    </div>
  );
}

TopProducer.propTypes = { callbackfn: PropTypes.func };

function BeatCategory(props) {
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const chevronWidth = 20;
  return (
    <div className={"beat_categories"}>
      <div className="producer_wrapper">
        <div className="large_heading">Beat Categories</div>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={4}
          gutter={15}
          leftChevron={<FontAwesomeIcon icon={faChevronLeft} size={"2x"} />}
          rightChevron={<FontAwesomeIcon icon={faChevronRight} size={"2x"} />}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {beatCategories.map(props.callbackfn)}
        </ItemsCarousel>
      </div>
      <p className={"categories"}>
        <Link to={"categories"} className={"filled-solid-btn"}>
          View Categories
        </Link>
      </p>
    </div>
  );
}

BeatCategory.propTypes = { callbackfn: PropTypes.func };

function TypeBeat(props) {
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const chevronWidth = 20;
  return (
    <div className={"type_beats"}>
      <div className="producer_wrapper">
        <div className="large_heading">Type Beats</div>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={5}
          gutter={10}
          leftChevron={<FontAwesomeIcon icon={faChevronLeft} size={"2x"} />}
          rightChevron={<FontAwesomeIcon icon={faChevronRight} size={"2x"} />}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {typeBeats.map(props.callbackfn)}
        </ItemsCarousel>
      </div>
    </div>
  );
}

TypeBeat.propTypes = { callbackfn: PropTypes.func };

const Home = () => {
  const [search, setSearch] = React.useState("");
  const searchRef = React.useRef();
  const copyRightYear = new Date();
  const captureInput = () => {
    setSearch(searchRef.current.value);
  };

  const listBeat = () => {
    console.log("You searched for ", search);
    searchRef.current.value = "";
    setSearch("");
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <div className="music_background">
            <div className="home_wrapper">
              <h1>Buying and Selling of Beats Online Just Got Easier</h1>
              <div className="beat_search_form">
                <Form.Control
                  className="search_beat"
                  placeholder="What type of beats are you looking for?"
                  ref={searchRef}
                  onChange={captureInput}
                  size="lg"
                />
                <div className="action_buttons">
                  <button className="filled-solid-btn" onClick={listBeat}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <HowItWorks
            callbackfn={stepper => <Stepper key={stepper.id} step={stepper} />}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TopProducer
            callbackfn={producer => (
              <div className="img_wrapper" key={producer.id}>
                <Image
                  src={producer.photo}
                  alt={producer.stagename}
                  fluid
                  rounded
                />
                <Link
                  className="large_heading"
                  to={`/producers/${producer.stagename}`}
                >
                  {producer.stagename}
                </Link>
              </div>
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <BeatCategory
            callbackfn={category => (
              <div className="img_wrapper" key={category.id}>
                <Image src={category.photo} alt={category.name} fluid rounded />
                <Link
                  className="large_heading"
                  to={`/categories/${category.name}`}
                >
                  {category.name}
                </Link>
              </div>
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TypeBeat
            callbackfn={beat => (
              <div className="img_wrapper" key={beat.id}>
                <Image src={beat.photo} alt={beat.name} fluid rounded />
                <Link className="large_heading" to={`/beats/${beat.name}`}>
                  {beat.name}
                </Link>
              </div>
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="ready_for_music_career">
            <h1>Ready To Start Your Online Music Career?</h1>
            <h2>Get Started Now</h2>
            <div className="action_buttons get_started">
              <Link to="/sell-beats" className="filled-outline-btn">
                Sell Beats
              </Link>
              <Link to="/buy-beats" className="filled-outline-btn">
                Buy Beats
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <footer>
            <div className="footer_wrapper">
              <div className="footer_company_brand">
                <Image
                  className="App-logo"
                  src={logo}
                  alt={"Banger Beat logo"}
                  fluid
                />
                <h3>{brand.brandname}</h3>
              </div>
              <div className="support">
                <ul>
                  {supportLinks.map(link => (
                    <li key={link.title}>
                      <Link to={link.url}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="social">
                <ul>
                  {socialLinks.map(link => (
                    <li key={link.title}>
                      <Link to={link.url}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="morelinks">
                <ul>
                  <li>
                    <Link to="/about-us">About us</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
                <address>{brand.company_address}</address>
              </div>
            </div>
            <hr />
            <p className="copyright">
              BangerBeat &copy; {copyRightYear.getFullYear()}
            </p>
          </footer>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Home;
