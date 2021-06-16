import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class SearchInput extends React.PureComponent {
  render() {
    const { value, onChange } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder="Search..."
          onChangeText={onChange}
          autoCorrect={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    justifyContent: 'center'
  },
  input: {
    fontSize: 14,
    padding: 12
  }
});
