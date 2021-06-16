import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Button from '../../components/Button';
import OrderList from '../../components/OrderList';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  };

  onSelected = (order) => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate('OrderDetails', { order });
  };

  onLogout = () => {
    const {
      onLogout,
      navigation: { navigate }
    } = this.props;

    onLogout();
    navigate('Auth');
  };

  render() {
    const {
      user: { username },
      orders,
      total
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.username}>{`Username: ${username}`}</Text>
        <Text style={styles.price}>{`Money spent: ${total}$`}</Text>
        <Text style={styles.orders}>Orders</Text>
        <OrderList
          orders={orders}
          placeholder={"You haven't made any orders yet"}
          onSelected={this.onSelected}
        />
        <Button title="Logout" style={styles.logoutButton} onPress={this.onLogout} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  price: {
    margin: 12,
    fontSize: 16
  },
  username: {
    margin: 12,
    fontSize: 16,
    marginTop: 20
  },
  logoutButton: {
    backgroundColor: '#ee5253'
  },
  orders: {
    fontSize: 16,
    textAlign: 'center',
    margin: 12,
    fontWeight: 'bold'
  }
});
