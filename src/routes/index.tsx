import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from 'src/components/Header';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'*'} component={Header} />
      </Switch>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}
