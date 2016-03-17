import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RestaurantVoteCount.scss';

class RestaurantVoteCount extends Component {
  static propTypes = {
    votes: PropTypes.array.isRequired
  };

  componentDidUpdate() {
    this._el.classList.add(s.updated);
    setTimeout(() => this._el.classList.remove(s.updated), 100);
  }

  render() {
    return (
      <span ref={e => { this._el = e; }} className={`${s.root} ${this.props.votes.length > 0 ? s.populated : ''}`}>
        {this.props.votes.length} {this.props.votes.length === 1 ? 'vote' : 'votes'}
      </span>
    );
  }
}

export default withStyles(RestaurantVoteCount, s);