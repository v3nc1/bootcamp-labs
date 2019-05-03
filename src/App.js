import React from "react";
import { LabItemsPresenter } from "./components/LabItemPresenter";
import { LabSolutionPresenter } from "./components/LabSolutionPresenter";
import "./App.css";
import labs from "./labs";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {labs.jsBasic.map(e => (
        <LabItemsPresenter {...e} route={`/jsBasic/${e.solution.id}`} />
      ))}
    </div>
  );
};
function App() {
  console.log({ labs });
  return (
    <Router>
      <Route exact path="/" component={Home} />

      {labs.jsBasic.map(e => {
        console.log({ e });
        const path = `/jsBasic/${e.solution.id}`;
        console.log(path);
        return (
          <Route
            exact
            path={path}
            component={() => <LabSolutionPresenter {...e} />}
          />
        );
      })}
    </Router>
  );
}

export default App;
