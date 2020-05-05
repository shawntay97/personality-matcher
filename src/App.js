import React, { Component } from "react";
import QuestionCard from "./components/QuestionCard";
import questionData from "./knowledgeBase/questionData";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionData: questionData,
    };
  }

  render() {
    console.log("questiondata:", this.state.questionData);
    const QuestionCards = this.state.questionData.map((questionItem) => {
      console.log("question item: ", questionItem);
      return <QuestionCard questionItem={questionItem} />;
    });

    return (
      <div className="App">
        <h1>Personality Matcher</h1>
        <p>Is he/she your type?</p>
        <button>Find out your perfect match</button>
        {QuestionCards}
      </div>
    );
  }
}

export default App;
