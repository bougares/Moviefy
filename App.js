import React from 'react';
import {
  Platform, StatusBar, StyleSheet, View
} from 'react-native';

import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';

import storeFactory from './redux/store';

const store = storeFactory();

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
