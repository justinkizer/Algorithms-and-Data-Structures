import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: props.username, userPosts: []};
  }

  componentWillReceiveProps(newProps) {
    if (newProps.username && newProps.username !== this.state.username) {
      this.setState({username: newProps.username});
      let userPosts;
      fetch(`https://www.reddit.com/user/${newProps.username}/submitted.json`)
        .then(response => response.json())
        .then(responsePosts => {
          userPosts = responsePosts.data.children;
          userPosts = userPosts.map(post => {
            return {
              title: post.data.title,
              score: post.data.score,
              link: 'https://www.reddit.com' + post.data.permalink
            };
          });
          userPosts = userPosts.sort(
            function (x, y) {
              return y.score - x.score;
            }
          );
          userPosts = userPosts.map((post, i) => {
            return (
              <li key={post.title + i}>
                <a href={post.link}>{post.title}</a> (Score: {post.score})</li>
            );
          });
        })
        .then(() => {
          if (userPosts.length) {
            this.setState({userPosts: userPosts});
          } else {
            this.setState({userPosts: 'No posts found!'});
          }
        }).catch(() => {
            this.setState({userPosts: 'User not found!'});
          });
    }
  }

  render() {
    let username;
    if (this.state.username) { username = `${this.state.username}'s `; }

    return (
      <div>
        <strong>
          {username}Most Recent 25 Posts (Sorted by Descending Score)
        </strong>
        <ul>
          {this.state.userPosts}
        </ul>
      </div>
    );
  }
}

export default Posts;
