import { StatisticsContainer } from './Feedback.styled';
import shortid from 'shortid';

const Statistics = ({ stats, total, positiveFeedback }) => {
  return (
    <div>
      <StatisticsContainer>
        {Object.entries(stats).map(([key, value]) => {
          return (
            <span key={shortid.generate()}>
              {key}: {value}
            </span>
          );
        })}
        <span>Total: {total}</span>
        <span>Positive feedback: {positiveFeedback}%</span>
      </StatisticsContainer>
    </div>
  );
};

export default Statistics;
