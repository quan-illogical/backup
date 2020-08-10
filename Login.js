/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { usersAction } from '../../actions';
import { Dispatch, ReduxState } from '../../types';
import styles from './styles.scss';

<<<<<<< HEAD
// Export this for unit testing more easily
=======
import InputField from '../../components/InputField';

// Export this for unit testing more  easily
>>>>>>> 04bbebc... added reusable input
export class Home extends PureComponent {
  onLogout() {
    localStorage.removeItem('token');
  }

  onLogin() {
    localStorage.setItem('token', JSON.stringify({ token: new Date() }));
  }

  render() {
    return (
<<<<<<< HEAD
      <div className={styles.Home}>
        <Helmet title="Home" />
        Login page
        <button onClick={() => this.onLogin()} className="btn btn-primary">
          Login
        </button>
        <button onClick={() => this.onLogout()} className="btn btn-primary">
          Logout
        </button>
=======
      <div className={styles.Login}>
        <img src={require('./img/page-1.svg')} alt="Login Art" />
        <form>
          <InputField type="email" />
        </form>
>>>>>>> 04bbebc... added reusable input
      </div>
    );
  }
}

const mapStateToProps = ({ login }: ReduxState) => ({ login });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUsersIfNeeded: () => dispatch(usersAction.fetchUsersIfNeeded())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
