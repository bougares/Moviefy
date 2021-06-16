import React from 'react';
import * as Icon from '@expo/vector-icons'

export default class TabBarIcon extends React.PureComponent {
  render() {
    const { name, focused } = this.props;

    return (
      <Icon.Ionicons
        name={name}
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? '#2f95dc' : '#ccc'}
      />
    );
  }
}
