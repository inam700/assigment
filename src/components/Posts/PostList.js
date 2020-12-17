import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPosts } from "../redux/actions/PostActions";
class PostList extends Component {
  state = {
    search: "",
  };
  componentDidMount() {
    this.props.getPosts();
  }
  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  render() {
    const { posts } = this.props;
    const filteredResult = posts.filter((item) => {
      return (
        item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <Container>
        <p>
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch}
          />
        </p>
        <Row>
          {filteredResult.slice(0, 6).map((item) => (
            <Col lg={12} md={6} sm={12} key={item.id} className="my-3">
              <Card>
                {/* <Card.Img src={item.image} alt="card data" height={200} /> */}
                <Card.Body>
                  <Card.Title>
                    <span style={{ color: "#ff0000", fontSize: "22px" }}>
                      Post Title:
                    </span>
                    {item.title}
                  </Card.Title>
                  {localStorage.getItem("success") === "true" ? (
                    <Link
                      to={`/details/${item.id}`}
                      className="btn btn-primary"
                    >
                      Click Me
                    </Link>
                  ) : (
                    <p>No Details</p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {console.log(posts)}
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

export default connect(mapStateToProps, { getPosts })(PostList);
