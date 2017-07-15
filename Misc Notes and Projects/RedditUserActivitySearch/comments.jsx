import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: props.username, userComments: []};
  }

  componentWillReceiveProps(newProps) {
    if (newProps.username && newProps.username !== this.state.username) {
      this.setState({username: newProps.username});
      let userComments;
      fetch(`https://www.reddit.com/user/${newProps.username}/comments.json`)
        .then(response => response.json())
        .then(responsePosts => {
          userComments = responsePosts.data.children;
          userComments = userComments.map(post => {
            return {
              body: post.data.body,
              score: post.data.score,
              link: post.data.link_permalink
            };
          });
          userComments = userComments.sort(
            function (x, y) {
              return y.score - x.score;
            }
          );
          userComments = userComments.map((post, i) => {
            return (
              <li key={post.body + i}>
                <a href={post.link}>{post.body}</a> (Score: {post.score})
              </li>
            );
          });
        })
      .then(() => {
        if (userComments.length) {
          this.setState({userComments: userComments});
        } else {
          this.setState({userComments: 'No comments found!'});
        }
      }).catch(() => {
          this.setState({userComments: 'User not found!'});
        });
    }
  }

  render() {
    let username;
    if (this.state.username) { username = `${this.state.username}'s `; }

    return (
      <div>
        <strong>
          {username}Most Recent 25 Comments (Sorted by Descending Score)
        </strong>
        <ul>
          {this.state.userComments}
        </ul>
      </div>
    );
  }
}

export default Comments;
