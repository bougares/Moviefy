import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from '../screens/ConnectedSigninScreen';
import SignUpScreen from '../screens/ConnectedSignupScreen';

export default createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});
