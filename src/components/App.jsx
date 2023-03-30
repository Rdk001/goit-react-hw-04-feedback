import { useState } from 'react';
import { Container } from './Feedback.styled';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const handleIncrementGood = e => {
    setGood(state => state + 1);
  };
  const handleIncrementNeutral = e => {
    setNeutral(state => state + 1);
  };
  const handleIncrementBad = e => {
    setBad(state => state + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            good={handleIncrementGood}
            bad={handleIncrementBad}
            neutral={handleIncrementNeutral}
          />
        }
      />
      {!countTotalFeedback() ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section
          title="Statistics"
          children={
            <Statistics
              stats={options}
              total={countTotalFeedback()}
              positiveFeedback={countPositiveFeedbackPercentage()}
            />
          }
        />
      )}
    </Container>
  );
};
