import { connect } from 'react-redux';
import { completeLogin } from '../redux/actionCreators/accountActionCreators';

import SignInScreen from './presentational/SigninScreen';

const mapStateToProps = state => ({ isAuthenticated: !!state.account.user });

const mapDispatchToProps = dispatch => ({
  onSignIn: () => {
    dispatch(completeLogin());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
