import PropTypes from 'prop-types';
import {FeedbackSection, Caption} from './Section.styled'
export const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <Caption>{title}</Caption>
      {children}
    </FeedbackSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
