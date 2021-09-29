import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feedback from './components/Feedback/Feedback';
import Statistics from "./components/Statistics/Statistics";
import Notification from './components/Notification/Notification';

class App extends Component {

  static defaultProps = {
    positivePercentage: 0
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  

  
    onFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  
  };

  countPositiveFeedbackPercentage = () => {
    // const { good } = this.state.good;
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };



   
  render() {

    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    const stats = Object.values(this.state);
   
    
        return (
    <>
            <Feedback
              options={keys }
              onLeaveFeedback={ this.onFeedback}
            
            />
        
            {stats.some(value => value > 0) ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            /> : <Notification message="No feedback given"/> }
    </>
     
        );
    };

}

export default App;
