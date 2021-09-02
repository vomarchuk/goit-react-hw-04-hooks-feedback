import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onClick, options }) => {
  return (
    <ul className={s.options__list}>
      {options.map(option => {
        return (
          <li key={option} className={s.option__item}>
            <button
              className={s[option] + ` ${s.button}`}
              type="button"
              onClick={() => onClick([option])}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
