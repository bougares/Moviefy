import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Form from '../forms/SignInForm';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In'
  };

  componentDidUpdate() {
    const {
      isAuthenticated,
      navigation: { navigate }
    } = this.props;

    if (isAuthenticated) {
      navigate('Main');
    }
  }

  onSignIn = (username, password) => {
    const { onSignIn, navigation: { navigate } } = this.props;
    navigate('Main');
    onSignIn({username , password});
  };

  onSignUp = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate('SignUp');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>MOVIEFY</Text>
        <Text style={styles.subtitle}>Next-Gen movie store</Text>
        <Form onSubmit={this.onSignIn} handleNoAccount={this.onSignUp} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 20
  },
  noAccount: {
    textAlign: 'center'
  }
});
