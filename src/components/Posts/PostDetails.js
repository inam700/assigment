import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { getPost } from "../redux/actions/PostActions";
import { Media } from "react-bootstrap";
import axios from "axios";
import user from '../../img/user.png'
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
    const filteredComments = this.state.comments.filter((item) => {
      return item.postId == this.props.match.params.id;
    });
    this.setState({
      newArray:filteredComments
    })
  };
  render() {
    const { post } = this.props;
    return (
      <Container>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={this.getComments}>get comments</button>
        {this.state.newArray.map((item) => (
          <Media className="comments" key={item.id}>
            <img width={64} height={64} alt="user" src={user} />
            <Media.Body>
              <h4>
                <span>USER NAME:</span> {item.name}
              </h4>
              <h5>
                <span>EMAIL: </span> {item.email}
              </h5>
              <p>{item.body}</p>
            </Media.Body>
          </Media>
        ))}
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  post: state.post.post,
});

export default connect(mapStateToProps, { getPost })(PostDetails);
