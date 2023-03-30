import shortid from 'shortid';
import { ButtonsContainer, Button } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <ButtonsContainer>
      {keys.map(key => (
        <Button
          key={shortid.generate()}
          name={key}
          value={key}
          onClick={e => onLeaveFeedback(e)}
          type="button"
        >
          {key}
        </Button>
      ))}
    </ButtonsContainer>
  );
};

export default FeedbackOptions;
