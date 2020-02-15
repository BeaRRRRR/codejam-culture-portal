import * as React from "react";
import Header from "../Header";
import HomePage from "../../pages/Home-page/index";
import ArchitectPage from "../../pages/Architect-page/index";
import SearchPage from "../../pages/Search-page/index";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route path="/" render={() => <HomePage />} exact />
          <Route path="/search" render={() => <SearchPage />} exact />
          <Route path="/architect/:id" render={() => <ArchitectPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
