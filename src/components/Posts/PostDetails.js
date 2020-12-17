import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { getPost } from "../redux/actions/PostActions";
import axios from "axios";
class PostDetails extends Component {
  state = {
    comments: [],
    newArray: [],
  };
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      this.setState({
        comments: res.data,
      });
    });
  }
  getComments = () => {
    const newArrayComments = this.state.comments.filter((item) => {
      return item.postId === this.props.match.params.id;
    });
    this.setState({
      newArray: [...this.state.newArray, newArrayComments],
    });
    console.log("filter", newArrayComments);
  };
  render() {
    const { post } = this.props;
    return (
      <Container>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={this.getComments}>get comments</button>
        {console.log("simple", this.state.comments)}
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  post: state.post.post,
});

export default connect(mapStateToProps, { getPost })(PostDetails);
