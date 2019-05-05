import React from "react";
import { LabItemsPresenter } from "./components/LabItemPresenter";
import { LabSolutionPresenter } from "./components/LabSolutionPresenter";
import "./App.css";
import labs from "./labs";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {labs.jsBasic.map(e => (
        <LabItemsPresenter {...e} route={`/jsBasic/${e.solution.id}`} />
      ))}
      {labs.demos.map(e => (
        <LabItemsPresenter {...e} route={`/demos/${e.solution.id}`} />
      ))}
    </div>
  );
};
function App() {
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
      {labs.demos.map(e => {
        console.log({ e });
        const path = `/demos/${e.solution.id}`;
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
