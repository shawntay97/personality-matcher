import React from "react";
import QuestionCard from "./components/QuestionCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Personality Matcher</h1>
      <p>Is he/she your type?</p>
      <button>Find out what is your</button>

      <QuestionCard />
    </div>
  );
}

export default App;
