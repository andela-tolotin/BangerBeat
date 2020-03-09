import React from "react";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import {
  beatCategories,
  howItWorks,
  topProducers,
  typeBeats
} from "../utils/bangerbeats";

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
        <div className="heading_big_black_text">How it works</div>
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
      <div className="row">
        <div className="music_background">
          <div className="home_wrapper">
            <h1>Buying and Selling of Beats Online Just got easier</h1>
            <div className="beat_search_form">
              <input
                className="search_beat form-control"
                type="text"
                placeholder="What type of beats are you looking for?"
                ref={searchRef}
                onChange={captureInput}
              />
              <div className="action_buttons">
                <button className="filled-solid-btn btn" onClick={listBeat}>
                  Search
                </button>
                <Link to="/sell-beats" className="filled-outline-btn btn">
                  Sell Beat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <HowItWorks
          callbackfn={stepper => <Stepper key={stepper.id} step={stepper} />}
        />
      </div>
      <div className="row">
        <TopProducer
          callbackfn={producer => (
            <li key={producer.id}>
              <div className="img_wrapper">
                <img src={producer.photo} alt={producer.stagename} />
                <h4 className="large_heading">{producer.stagename}</h4>
              </div>
            </li>
          )}
        />
      </div>
      <div className="row">
        <BeatCategory
          callbackfn={category => (
            <li key={category.id}>
              <div className="img_wrapper">
                <img src={category.photo} alt={category.name} />
                <h4 className="large_heading">{category.name}</h4>
              </div>
            </li>
          )}
        />
      </div>
      <div className="row">
        <TypeBeat
          callbackfn={beat => (
            <li key={beat.id}>
              <div className="img_wrapper">
                <img src={beat.photo} alt={beat.name} />
                <h4 className="large_heading">{beat.name}</h4>
              </div>
            </li>
          )}
        />
      </div>
    </React.Fragment>
  );
};
export default Home;
