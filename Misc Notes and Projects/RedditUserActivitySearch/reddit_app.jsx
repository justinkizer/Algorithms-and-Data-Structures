import React from 'react';
import Posts from './posts.jsx';
import Comments from './comments.jsx';

class RedditApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', searchInput: ''};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({username: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({searchInput: this.state.username});
  }

  render() {
    return (
      <div>
        <strong>
          Which Reddit user's recent activity do you wish to view?
        </strong>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update}
            value={this.state.username} placeholder="Redditor Username">
          </input>
        </form>
        <br/>
        <Posts username={this.state.searchInput}/>
        <Comments username={this.state.searchInput}/>
      </div>
    );
  }
}

export default RedditApp;
