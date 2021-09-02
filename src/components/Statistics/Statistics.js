import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      <ul className={`${s.list} ${s.statistics_list}`}>
        <li className={s.statistics_item}>
          Good:<span className={`${s.span} ${s.good}`}>{good}</span>
        </li>
        <li className={s.statistics_item}>
          Neutral:<span className={`${s.span} ${s.neutral}`}>{neutral}</span>
        </li>
        <li className={s.statistics_item}>
          Bad:<span className={`${s.span} ${s.bad}`}>{bad}</span>
        </li>
      </ul>
      <ul className={s.total_list}>
        <li className={s.total_item}>Total: {total}</li>
        <li className={s.percent_item}>
          Positive feedback: {positivePercentage}
        </li>
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
