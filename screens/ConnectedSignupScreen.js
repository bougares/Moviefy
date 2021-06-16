import { connect } from 'react-redux';
import { completeRegistration } from '../redux/actionCreators/accountActionCreators';

import SignUpScreen from './presentational/SignupScreen';

const mapStateToProps = state => ({ isAuthenticated: !!state.account.user });

const mapDispatchToProps = dispatch => ({
  onSignUp: () => {
    dispatch(completeRegistration());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen);
