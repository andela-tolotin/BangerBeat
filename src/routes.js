import Home from "./components/HomeComponent";
import Genres from "./components/GenresComponent";
import Beats from "./components/BeatsComponent";
import Blog from "./components/BlogComponent";
import Login from "./components/LoginComponent";

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
  },
  {
    path: "/login",
    component: Login,
    exact: false,
    name: "Login",
    index: 4
  }
];

export default routes;
