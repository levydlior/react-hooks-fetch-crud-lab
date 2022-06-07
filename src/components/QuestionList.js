import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onQuestionsFetch, onDeleteQuestion, onCorrectAnserChange }) {
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((fetchedQuestions) => onQuestionsFetch(fetchedQuestions));
  }, []);

  const questionItems = questions.map((question) => (
    <QuestionItem questions={question} key={question.id} onDeleteQuestion={onDeleteQuestion} onCorrectAnserChange={onCorrectAnserChange} />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
