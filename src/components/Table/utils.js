import Chance from 'chance';

export const makeData = (len = 50) => {
  const newPerson = () => {
    const chance = new Chance();

    return ({
      symbol: chance.pickone(['EOS/BTC', 'EOS/ETH', 'ETH/BTC', 'ETH/USDT', 'NEO/BTC']),
      buy: chance.pickone(['kucoin', 'binance', 'bittrex']),
      sell: chance.pickone(['kucoin', 'binance', 'bittrex']),
      available: chance.floating({ min: 0, max: 100, fixed: 4 }),
      amount: chance.floating({ min: 0, max: 100, fixed: 4 }),
      valid: String(chance.bool()),
      time: chance.date({ string: true }),
    });
  };

  return Array(len).fill().map(() => newPerson());
};

export const makeColumns = () => ([{
  Header: 'Symbol',
  accessor: 'symbol',
}, {
  Header: 'Buy',
  accessor: 'buy',
}, {
  Header: 'Sell',
  accessor: 'sell',
}, {
  Header: 'Avail.',
  accessor: 'available',
}, {
  Header: 'Amt.',
  accessor: 'amount',
}, {
  Header: 'Valid',
  accessor: 'valid',
}, {
  Header: 'Time',
  accessor: 'time',
}]);
