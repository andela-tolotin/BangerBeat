import React from "react";
import "../assets/css/Home.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Home = () => {
  const searchRef = React.useRef();
  const [search, setSearch] = React.useState("");
  const captureInput = () => {
    setSearch(searchRef.current.value);
  };

  const searchBeat = () => {
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
                <button className="filled-solid-btn btn" onClick={searchBeat}>
                  Search
                </button>
                <Link to="/sell-beats" className="filled-outline-btn">
                  Sell Beat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
