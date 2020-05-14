import React, { Component } from "react";
// import QuestionCard from "./components/QuestionCard";
import questionData from "./knowledgeBase/questionData";
// import Question from "./components/Question";
import Result from "./components/Result";
import Quiz from "./components/Quiz";

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
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  shuffleArray(array) {
    console.log("array:", array);
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
    console.log("qd: ", questionData);
    const shuffledAnswerOptions = questionData.map((question) =>
      this.shuffleArray(question.answers)
    );

    this.setState({
      question: questionData[0].question,
      answerOptions: shuffledAnswerOptions[0],
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
    console.log("state answerCount: ", this.state.answersCount);
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
    console.log("as2:", answersCount);
    const scale1 =
      answersCount["Introversion"] > answersCount["Extraversion"] ? "I" : "E";
    const scale2 =
      answersCount["Sensing"] > answersCount["iNtuitive"] ? "S" : "N";
    const scale3 =
      answersCount["Thinking"] > answersCount["Feeling"] ? "T" : "F";
    const scale4 =
      answersCount["Judging"] > answersCount["Perceptive"] ? "J" : "P";

    const mbtiResult = `${scale1}${scale2}${scale3}${scale4}`;
    console.log("mbtiResult: ", mbtiResult);
    return mbtiResult;
  }

  setResults(result) {
    console.log("setting result: ", result);
    if (result.length === 4) {
      this.setState({
        result: `${result[0]} , ${result[1]}, ${result[2]}, ${result[3]}`,
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
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div>{this.state.result ? this.renderResult() : this.renderQuiz()}</div>
    );
  }
}

export default App;
