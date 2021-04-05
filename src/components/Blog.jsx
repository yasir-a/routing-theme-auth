import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import Finance from "./Finance";
import Medical from "./Medical";
import Tech from "./Tech";

const Blog = () => {
  const { url, path } = useRouteMatch();
  console.log("URL:", url);
  console.log("PATH:", path);
  return (
    <div>
      <h1>------Blog-------</h1>
      <ul>
        <li>
          <Link className="blog-categories" to={`${url}/tech`}>
            Tech
          </Link>
        </li>
        <li>
          <Link className="blog-categories" to={`${url}/medical`}>
            Medical
          </Link>
        </li>
        <li>
          <Link className="blog-categories" to={`${url}/finance`}>
            Finance
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/tech`}>
          <Tech />
        </Route>
        <Route path={`${path}/medical`}>
          <Medical />
        </Route>
        <Route path={`${path}/finance`}>
          <Finance />
        </Route>
      </Switch>
    </div>
  );
};

export default Blog;
