import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, addPosts } from "./actions/postAction";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
    //   this.props.dispatch({
    //     type: "posts/NEWS_POST",
    //     payload: "post2"
    //   });
  }

  sendData = () => {
    const { addPosts } = this.props;
    const post3 = "testing";
    addPosts(post3);
  };

  render() {
    return (
      <div>
        <button onClick={this.sendData}>testing</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts, addPosts }
)(App);
