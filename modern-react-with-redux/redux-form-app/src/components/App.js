import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './PostsIndex';
import NewPost from './NewPost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PostsIndex} />
          <Route path="/posts/new" component={NewPost} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;