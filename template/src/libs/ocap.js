import OCAPClient from '@arcblock/ocap-js';

export const dataSources = [
  {
    name: 'btc',
    demoAddress: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  },
  {
    name: 'eth',
    demoAddress: '0xe65d3128feafd14d472442608daf94bceb91e333',
  },
];

// Create clients for BTC and ETH
export const clients = dataSources.reduce((obj, ds) => {
  obj[ds.name] = new OCAPClient({
    dataSource: ds.name,
    enableSubscription: true,
    enableMutation: false,
  });
  return obj;
}, {});

export const getClient = dataSource => clients[dataSource];
