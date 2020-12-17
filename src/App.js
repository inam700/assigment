import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from "./components/Posts/PostList";
import Header from "./components/Layouts/Header";
import PostDetails from "./components/Posts/PostDetails";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import AddPost from "./components/Posts/AddPost";
import { Provider } from "react-redux";
import store from "./components/redux/store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route path="/details/:id" component={PostDetails} />
            <Route path="/add-post" component={AddPost} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
