import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PageNavbar from "components/Navbars";
import PageHeader from "components/Headers";
import PageFooter from "components/Footers";
import HomePage from "views/home";
import AboutUs from "./about";
import Leadership from "./about/Leadership";
import Membership from "./membership";
import News from "./news";
import Knowledge from "./knowledge";
import Application from "./application";
const App = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("Main");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <BrowserRouter>
        <PageNavbar />
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />
          <Route
            path="/about"
            exact
            render={(props) => <AboutUs {...props} />}
          />
          <Route
            path="/leadership"
            exact
            render={(props) => <Leadership {...props} />}
          />
          <Route
            path="/membership"
            exact
            render={(props) => <Membership {...props} />}
          />
          <Route path="/news" exact render={(props) => <News {...props} />} />
          <Route
            path="/knowledge"
            exact
            render={(props) => <Knowledge {...props} />}
          />
          <Route
            path="/application"
            exact
            render={(props) => <Application {...props} />}
          />
          <Redirect to="/" />
        </Switch>
        <PageFooter />
      </BrowserRouter>
    </>
  );
};

export default App;
