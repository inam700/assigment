import React, { Component } from "react";
import { addPost } from "../redux/actions/PostActions";
import { connect } from "react-redux";
class AddPost extends Component {
  state = {
    title: "",
    body: "",
    image: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addNewPost = () => {
    const newPost = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.addPost(newPost);
    this.setState({
      title: "",
      body: "",
    });

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <div className="add-post">
          <input
            type="text"
            placeholder="name"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="post description"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="add-button"
            onClick={this.addNewPost}
          >
            add
          </button>
        </div>
      </div>
    );
  }
}
export default connect(null, { addPost })(AddPost);
