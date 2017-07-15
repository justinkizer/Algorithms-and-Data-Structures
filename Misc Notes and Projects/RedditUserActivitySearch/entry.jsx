import React from 'react';
import ReactDOM from 'react-dom';
import RedditApp from './reddit_app.jsx';

class Root extends React.Component {
  render() {
    return(
      <RedditApp />
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
