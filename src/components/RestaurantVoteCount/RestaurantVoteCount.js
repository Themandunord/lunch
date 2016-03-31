import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RestaurantVoteCount.scss';

export class _RestaurantVoteCount extends Component {
  static propTypes = {
    votes: PropTypes.array.isRequired
  };

  componentDidUpdate() {
    this._el.classList.add(s.updated);
    setTimeout(() => this._el.classList.remove(s.updated), 100);
  }

  render() {
    let voteCount = null;
    if (this.props.votes.length > 0) {
      voteCount = (
        <span>
          <strong>{this.props.votes.length}</strong>
          {this.props.votes.length === 1 ? ' vote' : ' votes'}
        </span>
      );
    }

    return (
      <span ref={e => { this._el = e; }} className={s.root}>
        {voteCount}
      </span>
    );
  }
}

export default withStyles(_RestaurantVoteCount, s);
