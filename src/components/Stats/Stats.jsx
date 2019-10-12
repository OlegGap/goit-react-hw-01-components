import React from 'react';
import PropTypes from 'prop-types';
import takeRandomBackgrounColor from '../../utils/takeRandomBackgrounColor.js';
import styles from './Stats.module.scss';
import backgrounColorsArray from '../db/statsBackgroundColor.json';

const Stats = ({ title, stats }) => {
  return (
    <section className={styles.statsSection}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statsList}>
        {stats.map(stat => {
          return (
            <li
              className={styles.item}
              key={stat.id}
              style={takeRandomBackgrounColor(backgrounColorsArray)}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{`${stat.percentage}%`}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Stats.defaultProps = {
  title: '',
};
Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};
export default Stats;
