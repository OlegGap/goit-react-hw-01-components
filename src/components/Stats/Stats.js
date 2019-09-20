import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.scss';

const Stats = ({ title, stats }) => {
  const backgrounItemColors = [
    'a33cf2',
    '21b8c6',
    'e64c65',
    '4fc4f6',
    '80ff00',
    '0080ff',
    '8000ff',
    'ff9999',
    'ff6b00',
  ];

  return (
    <section className={styles.statsSection}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statsList}>
        {stats.map(stat => {
          const randomColorIndex = Math.floor(
            Math.random() * backgrounItemColors.length,
          );

          const backgrounColor = {
            background: `#${backgrounItemColors[randomColorIndex]}`,
          };
          return (
            <li className={styles.item} key={stat.id} style={backgrounColor}>
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
