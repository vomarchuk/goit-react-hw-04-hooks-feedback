import { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const feedBack = event;
    switch (feedBack.join('')) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };
  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    total > 0 ? Math.round((good / total) * 100) + '%' : 0;

  return (
    <>
      <div className={s.box}>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            onClick={onLeaveFeedback}
            options={['good', 'neutral', 'bad']}
          />
        </Section>
      </div>
      {total ? (
        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section>
          <Notification message="No feedback given" />
        </Section>
      )}
    </>
  );
}
