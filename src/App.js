import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./Components/Streams/StreamCreate";
import StreamEdit from "./Components/Streams/StreamEdit";
import StreamDelete from "./Components/Streams/StreamDelete";
import StreamList from "./Components/Streams/StreamList";
import StreamShow from "./Components/Streams/StreamShow";
import Header from "./Components/Header";
import "./App.css";
import history from "../src/reducers/history";

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/:id" exact component={StreamShow} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
