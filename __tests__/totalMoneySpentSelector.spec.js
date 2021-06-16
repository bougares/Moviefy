import totalMoneySpentSelector from '../redux/selectors/totalMoneySpentSelector';

describe('TotalMoneySpentSelector', () => {
  jest.useFakeTimers();

  it('computes total price of given orders', async () => {
    const orders = [{ totalPrice: 10 }, { totalPrice: 2 }, { totalPrice: 5 }];
    const total = totalMoneySpentSelector({ orders });
    expect(total).toEqual(17);
  });

  it('computes price of zero for no orders', async () => {
    const total = totalMoneySpentSelector({ orders: [] });
    expect(total).toEqual(0);
  });

  it('computes price of zero for undefined orders', async () => {
    const total = totalMoneySpentSelector();
    expect(total).toEqual(0);
  });
});
