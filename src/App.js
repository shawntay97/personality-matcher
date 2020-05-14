import React, { Component } from "react";
import Result from "./components/Result";
import Quiz from "./components/Quiz";
import questionData from "./knowledgeBase/questionData";
import mbtiData from "./knowledgeBase/mbtiData";
import matchData from "./knowledgeBase/matchData";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {
        Introversion: 0,
        Extraversion: 0,
        Sensing: 0,
        iNtuitive: 0,
        Thinking: 0,
        Feeling: 0,
        Judging: 0,
        Perceptive: 0,
      },
      result: "",
      mbtiData: {},
      matchData: {},
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  componentDidMount() {
    const shuffledAnswerOptions = questionData.map((question) =>
      this.shuffleArray(question.answers)
    );

    this.setState({
      question: questionData[0].question,
      answerOptions: shuffledAnswerOptions[0],
      mbtiData: mbtiData,
      matchData: matchData,
    });
  }

  setUserAnswer(answer) {
    console.log("selected ans: ", answer);
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: questionData[counter].question,
      answerOptions: questionData[counter].answers,
      answer: "",
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const scale1 =
      answersCount["Introversion"] > answersCount["Extraversion"] ? "I" : "E";
    const scale2 =
      answersCount["Sensing"] > answersCount["iNtuitive"] ? "S" : "N";
    const scale3 =
      answersCount["Thinking"] > answersCount["Feeling"] ? "T" : "F";
    const scale4 =
      answersCount["Judging"] > answersCount["Perceptive"] ? "J" : "P";

    const mbtiResult = `${scale1}${scale2}${scale3}${scale4}`;
    console.log("get result returns:", mbtiResult);
    return mbtiResult;
  }

  setResults(result) {
    console.log("result len: ", result.length);
    if (result.length === 4) {
      this.setState({
        result: result,
      });
    } else {
      this.setState({ result: "Undetermined" });
    }
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < questionData.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={questionData.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    const result = this.state.result;
    const mbtiDataItem = this.state.mbtiData[this.state.result];
    const matches = this.state.matchData.filter(function (filterMatch) {
      return filterMatch.personalityType.includes(result);
    });
    console.log("mbtidadaitem: ", mbtiDataItem);
    return <Result quizResult={result} mbti={mbtiDataItem} matches={matches} />;
  }

  render() {
    return (
      <div>{this.state.result ? this.renderResult() : this.renderQuiz()}</div>
    );
  }
}

export default App;
