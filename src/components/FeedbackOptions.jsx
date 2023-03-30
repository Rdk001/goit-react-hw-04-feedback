import { ButtonsContainer, Button } from './Feedback.styled';

const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <ButtonsContainer>
      <Button onClick={() => good()} type="button">
        Good
      </Button>
      <Button onClick={() => neutral()} type="button">
        Neutral
      </Button>
      <Button onClick={() => bad()} type="button">
        Bad
      </Button>
    </ButtonsContainer>
  );
};

export default FeedbackOptions;
