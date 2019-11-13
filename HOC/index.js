import React, { Component } from "react";
import ReactDOM from "react-dom";

const fetchData = (PassedComponent, url) =>
  class HOC extends Component {
    state = {
      posts: []
    };
    componentDidMount() {
      fetch(url)
        .then(r => r.json())
        .then(posts => this.setState({ posts }));
    }
    render() {
      const { posts } = this.state;
      return <PassedComponent posts={posts} />;
    }
  };

const Post = ({ posts }) => (
  <>
    {posts.map((post, index) => (
      <div key={index}>{post.owner.login}</div>
    ))}
  </>
);

const List = fetchData(Post, `https://api.github.com/gists/public`);

ReactDOM.render(<List />, document.getElementById("root"));
