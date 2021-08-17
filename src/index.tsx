import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          type: 'deposit',
          category: 'Venda',
          amount: 12000,
          createdAt: new Date('2021-04-13 09:00:00'),
        },
        {
          id: 2,
          title: 'Hamburger',
          type: 'withdraw',
          category: 'Alimentação',
          amount: 59,
          createdAt: new Date('2021-04-10 11:00:00'),
        },
        {
          id: 3,
          title: 'Aluguel do apartamento',
          type: 'withdraw',
          category: 'Casa',
          amount: 1200,
          createdAt: new Date('2021-03-27 13:00:00'),
        },
        {
          id: 4,
          title: 'Computador',
          type: 'deposit',
          category: 'Venda',
          amount: 5400,
          createdAt: new Date('2021-03-15 15:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
