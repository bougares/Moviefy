let ordersByToken = {};

export default class OrderService {
  constructor(token) {
    this.token = token;
  }

  async publishOrder(orderToPublish) {
    if (this.token === undefined) {
      throw new Error('Forbidden');
    }

    const order = { ...orderToPublish, date: new Date() };

    const { [this.token]: orders = [] } = ordersByToken;
    ordersByToken = { [this.token]: [order, ...orders], ...ordersByToken };

    return order;
  }

  async fetchOrders() {
    if (this.token === undefined) {
      throw new Error('Forbidden');
    }

    const { [this.token]: orders = [] } = ordersByToken;
    return orders;
  }
}
