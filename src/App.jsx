import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import PrivateRoute from "./components/PrivateRoute";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import Admin from "./components/Admin";
import "./App.css";

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
