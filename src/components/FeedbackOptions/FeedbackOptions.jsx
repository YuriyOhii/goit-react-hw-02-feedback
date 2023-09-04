import PropTypes from 'prop-types';
import { ControlsBox, BtnFeedback } from './FeedbackOptions.styled';
export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <ControlsBox>
      {options.map(el => (
        <li key={el}>
          <BtnFeedback type="button" name={el} onClick={onLeaveFeedback}>
            {el}
          </BtnFeedback>
        </li>
      ))}
    </ControlsBox>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
