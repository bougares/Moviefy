import React from 'react';
import {
  View, FlatList, StyleSheet, TouchableOpacity, Text
} from 'react-native';

import OrderItem from './OrderItem';

const extract = ({ date }) => date.toString();

export default class OrderList extends React.PureComponent {
  renderOrder = ({ item }) => {
    const { onSelected } = this.props;

    return (
      <TouchableOpacity onPress={() => onSelected(item)}>
        <OrderItem {...item} />
      </TouchableOpacity>
    );
  };

  render() {
    const { orders, placeholder } = this.props;
    const showsPlaceholder = !orders || orders.length === 0;
    return (
      <View style={styles.container}>
        {showsPlaceholder && (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>{placeholder || 'No items'}</Text>
          </View>
        )}
        {!showsPlaceholder && (
          <FlatList data={orders} renderItem={this.renderOrder} keyExtractor={extract} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeholderText: {
    fontSize: 25,
    textAlign: 'center'
  }
});
