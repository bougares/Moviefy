import React from 'react';
import {
  View, TextInput, StyleSheet, Text
} from 'react-native';

export default class FormInput extends React.PureComponent {
  render() {
    const {
      label,
      placeholder,
      isSecure = false,
      input: { value, onChange },
      meta: { touched, error }
    } = this.props;

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.label}>{`${label}:`}</Text>
          <TextInput
            secureTextEntry={isSecure}
            placeholder={placeholder}
            style={styles.input}
            value={value}
            onChangeText={onChange}
            autoCorrect={false}
          />
        </View>
        {touched && error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 68,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12
  },
  input: {
    flex: 2,
    fontSize: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4
  },
  label: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold'
  },
  error: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ee5253',
    marginLeft: 12
  }
});
