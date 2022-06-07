import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  function handleQuestionFetch(fetchedQuestions) {
    setQuestions(fetchedQuestions);
  }

  function handleSubmit(newQuestion) {
    const updateState = [...questions, newQuestion];
    setQuestions(updateState);
  }

  function handleDeleteQuestion(id){
    const updatedDeletedQuestion = questions.filter(question => question.id !== id )
    setQuestions(updatedDeletedQuestion)
  }


  function handleAnswerChange(correctAnswer){
    const updatedAnswetQuestions = questions.map(question => {
      if (question.id === correctAnswer.id){
        return correctAnswer
      }else {
        return question
      }
    })
    setQuestions(updatedAnswetQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onNewQuestionSubmit={handleSubmit} />
      ) : (
        <QuestionList
          onQuestionsFetch={handleQuestionFetch}
          questions={questions}
          onDeleteQuestion={handleDeleteQuestion}
          onCorrectAnserChange={handleAnswerChange}
        />
      )}
    </main>
  );
}

export default App;
