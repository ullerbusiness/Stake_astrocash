import React from "react";
import { Switch, Route } from "react-router-dom";
import StakingPage from "./pages/StakingPage";
import StakingPage2 from "./pages/StakingPage2";
import AdminPage from "./pages/AdminPage";

const App = () => {


  return (
    <>
    <Switch>
      <Route path="/" exact>
        <StakingPage2  />
      </Route>
      <Route path="/admin" exact>
        <AdminPage  />
      </Route>
    </Switch>
  </>
  );
};

export default App;
