import PropTypes from 'prop-types';
import {
  Title,
  StatBox,
  StatItem,
  Tablo,
  TotalText,
  TotalVal,
} from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Title>Statistics</Title>
      <StatBox>
        <StatItem>
          Good:
          <Tablo> {good}</Tablo>
        </StatItem>
        <StatItem>
          Neutral:
          <Tablo> {neutral}</Tablo>
        </StatItem>
        <StatItem>
          Bad:
          <Tablo> {bad}</Tablo>
        </StatItem>
      </StatBox>
      <TotalText>
        Total feedbacks: <TotalVal>{total}</TotalVal>
      </TotalText>
      <TotalText>
        Positive Feedbacks:{' '}
        <TotalVal>{total ? positivePercentage : 0} %</TotalVal>
      </TotalText>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
