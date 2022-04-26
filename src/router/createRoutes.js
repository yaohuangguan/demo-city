import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout/Layout";

export const createRoutes = (routes) => {
  return (
    <Layout>
      <Router>
        <Switch>
            {routes.map((route) => {
              const C = route.component;
              return <Route key={route.path} path={route.path} component={C} />;
            })}
        </Switch>
      </Router>
    </Layout>
  );
};
