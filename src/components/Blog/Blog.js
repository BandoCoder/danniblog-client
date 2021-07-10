import React, { Component } from "react";
import moment from "moment";
import BlogApiService from "../../services/blog-api-service";
import "./Blog.css";

export default class Blog extends Component {
  state = {
    posts: [],
    error: null,
  };

  componentDidMount() {
    BlogApiService.getPosts()
      .then((posts) =>
        this.setState({
          posts: posts.map((post) => {
            return {
              id: post.id,
              title: post.title,
              content: post.content,
              dateCreated: post.dateCreated,
              admin_id: post.admin_id,
            };
          }),
        })
      )
      .catch((res) => {
        this.setState({ error: res.error.message });
      });
  }

  renderPostList = () => {
    const { posts } = this.state;
    return (
      <div className="postList">
        {posts.map((post, idx) => (
          <div className="postItem" key={idx}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <span>
              {moment(post.dateCreated).format("MMM Do YYYY, h:mm a")}
            </span>
          </div>
        ))}
      </div>
    );
  };

  render() {
    const { posts, error } = this.state;
    return (
      <section className="blog">
        <article className="blogList">
          {error ? <h3>{error}</h3> : this.renderPostList()}
        </article>
      </section>
    );
  }
}
