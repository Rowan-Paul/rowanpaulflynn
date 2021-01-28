import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { LandingPage } from "./landing-page/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
