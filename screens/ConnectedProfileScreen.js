import { connect } from 'react-redux';
import { logout } from '../redux/actionCreators/accountActionCreators';

import ProfileScreen from './presentational/ProfileScreen';

import totalMoneySpentSelector from '../redux/selectors/totalMoneySpentSelector';

const mapStateToProps = ({ account }) => ({ ...account, total: totalMoneySpentSelector(account) });

const mapDispatchToProps = dispatch => ({
  onLogout: () => {
    dispatch(logout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
