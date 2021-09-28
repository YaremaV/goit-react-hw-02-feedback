import React, { Component } from 'react';
import './feedback.css'

class Feedback extends Component{

    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }

  
    handleIncrementGood =( ) =>{
        this.setState(prevState => {
            return {
               
                good: prevState.good + 1,   
            }
        })
    }

        handleIncrementNeutral =( ) =>{
        this.setState(prevState => {
            return {
                 
                neutral: prevState.neutral + 1, 
            }
        })
    }

        handleIncrementBad =( ) =>{
        this.setState(prevState => {
            return {
            
                bad: prevState.bad + 1,
                
            }
        })
    }

    countTotalFeedback = () => {
        return 
  
    }

    countPositiveFeedbackPercentage = () => {
        return 
    }



   
    render() {
        return (
    <>
        <div>
            <h2 className="">Please leave Feedback</h2>
          
            <button type="button" onClick={this.handleIncrementGood}>good</button>
            <button type="button" onClick={this.handleIncrementNeutral}>neutral</button>
            <button type="button" onClick={this.handleIncrementBad}>bad</button>
            </div>
            
                <div>
                    <h2>Statistics</h2>
                    <p>Good: {this.state.good }</p>
                    <p>Neutral: {this.state.neutral }</p>
                    <p>Bad: {this.state.bad }</p>
                    <p>Total: {this.countTotalFeedback }</p>
                    <p>Positive feedback:{ }</p>
                </div>
     </>
        );
    };
    
    
}

export default Feedback;