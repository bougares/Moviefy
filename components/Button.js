import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default class FormInput extends React.PureComponent {
  render() {
    const { title, disabled, style } = this.props;

    return (
      <TouchableOpacity
        {...this.props}
        style={disabled ? [styles.container, styles.disabled, style] : [styles.container, style]}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1dd1a1',
    padding: 12,
    margin: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  disabled: {
    backgroundColor: '#8395a7'
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  }
});
