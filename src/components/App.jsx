import { Component } from 'react';

import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export class App extends Component {
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
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.handleClick} options={Object.keys(this.state)} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}
