import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.scss';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          const { id, type, amount, currency } = item;
          return (
            <tr
              key={id}
              className={index % 2 === 0 ? styles.tr : styles.trEven}
            >
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TransactionHistory;
