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

  const handeIncrement = e => {
    switch (e.target.name) {
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
          <FeedbackOptions options={options} onLeaveFeedback={handeIncrement} />
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
