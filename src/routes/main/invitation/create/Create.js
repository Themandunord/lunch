import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Grid from 'react-bootstrap/lib/Grid';
import s from './Create.scss';

class Create extends Component {
  static propTypes = {
    success: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired
  };

  render() {
    const { success, token } = this.props;

    return (
      <Grid className={s.root}>
        {success === 'sent' && (
          <div>
            <h2>Confirmation sent</h2>
            <p>
              Thanks for requesting an invitation!
              We&rsquo;ve sent you an email &mdash;
              please follow the provided URL to confirm your request.
            </p>
          </div>
        )}
        {token && (
          <div>
            <h2>Invitation request confirmed</h2>
            <p>Thanks for confirming! Sit tight and you should be Lunching it up in no time.</p>
          </div>
        )}
      </Grid>
    );
  }
}

export default withStyles(s)(Create);
