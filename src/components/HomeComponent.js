import React from "react";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import brand, {
  beatCategories,
  howItWorks,
  topProducers,
  typeBeats,
  supportLinks,
  socialLinks
} from "../utils/bangerbeats";
import { Row, Col, Image, Form } from "react-bootstrap";
import logo from "../logo.svg";

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
        <div className="process">{howItWorks.map(props.callbackfn)}</div>
      </div>
    </div>
  );
}

HowItWorks.propTypes = { callbackfn: PropTypes.func };

function TopProducer(props) {
  return (
    <div className={"top_producers"}>
      <div className="producer_wrapper">
        <div className="large_heading">Top Producers</div>
        <ul>{topProducers.map(props.callbackfn)}</ul>
      </div>
    </div>
  );
}

TopProducer.propTypes = { callbackfn: PropTypes.func };

function BeatCategory(props) {
  return (
    <div className={"beat_categories"}>
      <div className="producer_wrapper">
        <div className="large_heading">Beat Categories</div>
        <ul>{beatCategories.map(props.callbackfn)}</ul>
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
  return (
    <div className={"type_beats"}>
      <div className="producer_wrapper">
        <div className="large_heading">Type Beats</div>
        <ul>{typeBeats.map(props.callbackfn)}</ul>
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
              <h1>Buying and Selling of Beats Online Just got easier</h1>
              <div className="beat_search_form">
                <Form.Control
                  className="search_beat"
                  placeholder="What type of beats are you looking for?"
                  ref={searchRef}
                  onChange={captureInput}
                  size={"lg"}
                />
                <div className="action_buttons">
                  <button className="filled-solid-btn" onClick={listBeat}>
                    Search
                  </button>
                  <Link to="/sell-beats" className="filled-outline-btn">
                    Sell Beat
                  </Link>
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
              <li key={producer.id}>
                <div className="img_wrapper">
                  <Image src={producer.photo} alt={producer.stagename} fluid />
                  <Link
                    className="large_heading"
                    to={`/producers/${producer.stagename}`}
                  >
                    {producer.stagename}
                  </Link>
                </div>
              </li>
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <BeatCategory
            callbackfn={category => (
              <li key={category.id}>
                <div className="img_wrapper">
                  <Image src={category.photo} alt={category.name} fluid />
                  <Link
                    className="large_heading"
                    to={`/categories/${category.name}`}
                  >
                    {category.name}
                  </Link>
                </div>
              </li>
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TypeBeat
            callbackfn={beat => (
              <li key={beat.id}>
                <div className="img_wrapper">
                  <Image src={beat.photo} alt={beat.name} fluid />
                  <Link className="large_heading" to={`/beats/${beat.name}`}>
                    {beat.name}
                  </Link>
                </div>
              </li>
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
            <div className={"footer_wrapper"}>
              <div className={"footer_company_brand"}>
                <Image
                  className="App-logo"
                  src={logo}
                  alt={"Banger Beat logo"}
                  fluid
                />
                <h3>{brand.brandname}</h3>
              </div>
              <div className={"support"}>
                <ul>
                  {supportLinks.map(link => (
                    <li key={link.title}>
                      <Link to={link.url}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={"social"}>
                <ul>
                  {socialLinks.map(link => (
                    <li key={link.title}>
                      <Link to={link.url}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={"morelinks"}>
                <ul>
                  <li>
                    <Link to="/about-us">About us</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
                <address>
                  Banger beats, Herbert Macaulay Road, Opposite WAEC office,
                  Yaba Lagos
                </address>
              </div>
            </div>
            <hr />
            <p className={"copyright"}>
              BangerBeat &copy; {copyRightYear.getFullYear()}
            </p>
          </footer>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Home;
