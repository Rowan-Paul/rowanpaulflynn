import { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { LandingPage } from "./landing-page/LandingPage";

function App() {
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      localStorage.theme !== "light"
    ) {
      localStorage.theme = "dark";
    }

    if (localStorage.theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
