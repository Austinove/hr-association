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
function Main() {
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
        <PageHeader />
        <Switch>
          <Route path="/index" render={(props) => <HomePage {...props} />} />
          <Route path="/about" render={(props) => <AboutUs {...props} />} />
          <Route
            path="/leadership"
            render={(props) => <Leadership {...props} />}
          />
          <Route
            path="/membership"
            render={(props) => <Membership {...props} />}
          />
          <Route path="/news" render={(props) => <News {...props} />} />
          <Route
            path="/knowledge"
            render={(props) => <Knowledge {...props} />}
          />
          <Route
            path="/application"
            render={(props) => <Application {...props} />}
          />
          <Redirect to="/index" />
        </Switch>
        <PageFooter />
      </BrowserRouter>
    </>
  );
}

export default Main;
