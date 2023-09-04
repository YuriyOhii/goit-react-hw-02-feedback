import { Component } from 'react';
import {
  FeedbackSection,
  Caption,
  ControlsBox,
  BtnFeedback,
  Title,
  StatBox,
  StatItem,
  Tablo,
  TotalText,
  TotalVal,
} from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ({ target }) => {
    const btnName = target.name;
    this.setState(prevState => ({
      ...prevState,
      [btnName]: prevState[btnName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, el) => el + acc, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.floor((100 * good) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <FeedbackSection>
        <Caption>Please leave feedback</Caption>
        <ControlsBox>
          <li>
            <BtnFeedback type="button" name="good" onClick={this.handleClick}>
              Good
            </BtnFeedback>
          </li>
          <li>
            <BtnFeedback
              type="button"
              name="neutral"
              onClick={this.handleClick}
            >
              Neutral
            </BtnFeedback>
          </li>
          <li>
            <BtnFeedback type="button" name="bad" onClick={this.handleClick}>
              Bad
            </BtnFeedback>
          </li>
        </ControlsBox>
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
          Total feedbacks: <TotalVal>{this.countTotalFeedback()}</TotalVal>
        </TotalText>
        <TotalText>
          Positive Feedbacks:{' '}
          <TotalVal>
            {this.countTotalFeedback()
              ? this.countPositiveFeedbackPercentage()
              : 0}{' '}
            %
          </TotalVal>
        </TotalText>
      </FeedbackSection>
    );
  }
}
