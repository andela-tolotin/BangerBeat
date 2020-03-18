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
import { Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import logo from "../logo.svg";
import CarouselSlider from "react-carousel-slider";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const btnStyle = {
  display: "inline-block",
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "36px"
};
const btnWrapperStyle = {
  position: "relative",
  borderRadius: "50%",
  height: "50px",
  width: "50px",
  textAlign: "center",
  color: "#f9a20e"
};
const rBtnCpnt = (
  <div style={btnWrapperStyle}>
    <div style={btnStyle} className="material-icons">
      <FontAwesomeIcon icon={faChevronRight} />{" "}
    </div>
  </div>
);

const lBtnCpnt = (
  <div style={btnWrapperStyle}>
    <div style={btnStyle} className="material-icons">
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  </div>
);

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
        <Tabs defaultActiveKey="for_producers" id="uncontrolled-tab">
          <Tab eventKey="for_producers" title="Producers">
            <div className="process">{howItWorks.map(props.callbackfn)}</div>
          </Tab>
          <Tab eventKey="for_artists" title="Artists">
            <div className="process">{howItWorks.map(props.callbackfn)}</div>
          </Tab>
        </Tabs>
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
        {
          <CarouselSlider
            slideCpnts={topProducers.map(props.callbackfn)}
            accEle={{ dots: false }}
            rBtnCpnt={rBtnCpnt}
            lBtnCpnt={lBtnCpnt}
            buttonSetting={{ placeOn: "middle-outside" }}
          />
        }
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
        {
          <CarouselSlider
            slideCpnts={beatCategories.map(props.callbackfn)}
            accEle={{ dots: false }}
            rBtnCpnt={rBtnCpnt}
            lBtnCpnt={lBtnCpnt}
            buttonSetting={{ placeOn: "middle-outside" }}
          />
        }
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
        {
          <CarouselSlider
            slideCpnts={typeBeats.map(props.callbackfn)}
            accEle={{ dots: false }}
            rBtnCpnt={rBtnCpnt}
            lBtnCpnt={lBtnCpnt}
            buttonSetting={{ placeOn: "middle-outside" }}
          />
        }
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
              <h1>Buying And Selling Of Beats Online Just Got Easier</h1>
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
              <div className="img_wrapper" key={producer.id}>
                <Image
                  src={producer.photo}
                  alt={producer.stagename}
                  fluid
                  roundedCircle
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
                <Image
                  src={category.photo}
                  alt={category.name}
                  fluid
                  roundedCircle
                />
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
                <Image src={beat.photo} alt={beat.name} fluid roundedCircle />
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
