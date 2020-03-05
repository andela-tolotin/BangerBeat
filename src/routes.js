import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <h2>Home</h2>
      </div>
    </React.Fragment>
  );
};

const Genres = () => {
  return (
    <React.Fragment>
      <div>
        <h2>Genres</h2>
      </div>
    </React.Fragment>
  );
};

const Beats = () => {
  return (
    <React.Fragment>
      <div>
        <h2>Beats</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </React.Fragment>
  );
};

const Blog = () => {
  return (
    <React.Fragment>
      <div>
        <h2>Blog</h2>
      </div>
    </React.Fragment>
  );
};

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    name: "Home",
    index: 1
  },
  {
    path: "/genres",
    component: Genres,
    exact: false,
    name: "Genres",
    index: 2
  },
  {
    path: "/beats",
    component: Beats,
    exact: false,
    name: "Beats",
    index: 3
  },
  {
    path: "/blog",
    component: Blog,
    exact: false,
    name: "Blog",
    index: 4
  }
];

export default routes;
