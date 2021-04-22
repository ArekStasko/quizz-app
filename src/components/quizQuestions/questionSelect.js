import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../data/data";

const QuestionContainer = styled.div`
  background-image: url(${({ category }) => data[0][category].assets["selectBG"]});
`;

const QuestionNumber = styled.div`
  background: ${({ category }) => data[0][category].assets["non_active-btn"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => data[0][category].assets["border"]};
`;

const SelectShadow = styled.div`
  background-image: url(${({ category }) => data[0][category].assets["shadow"]});
`;

const Question = styled.div`
  background: ${({ category }) => data[0][category].assets["non_active-btn"]};
  border: 1px solid ${({ category }) => data[0][category].assets["border"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => data[0][category].assets["border"]};
  transition: all 300ms linear;

  :hover {
    background: ${({ category }) => data[0][category].assets["active-btn"]};
    box-shadow: 2px 2px 10px 0px
      ${({ category }) => data[0][category].assets["border"]};
    transform: scale(1.1);
  }
`;

const QuestionSelect = ({ props }) => {
  return (
    <QuestionContainer
      category={props.category}
      className="select_main-container"
    >
      <div className="select_main-wrapper">
        <Link to="/" className="cross-link">
          &#215;
        </Link>

        <div className="select_header-wrapper">
          <div className="select_quiz-logo"></div>
          <div className="select_header-text">
            <SelectShadow
              category={props.category}
              className="select_shadow-text"
            >
              SELECT THE CORRECT ANSWER
            </SelectShadow>
            <QuestionNumber
              category={props.category}
              className="select_question-number"
            >
              <p>
                {props.quest}/<span>10</span>
              </p>
            </QuestionNumber>
          </div>
        </div>

        <div className="select_question-text">
          <p>
            {props.quest}.{" "}
            {data[0][props.category].question[props.quest].questionText}
          </p>
        </div>

        <div className="select_question-container">
          {data[0][props.category].question[props.quest].answers.map((item) => (
            <Question
              key={item.answer}
              category={props.category}
              className="select_question-wrapper"
              onClick={() => {
                props.setQuest(props.quest + 1);
                item.correct
                  ? props.setScore(props.score + 1)
                  : props.setScore(props.score + 0);
              }}
            >
              <p>{item.answer}</p>
              <div></div>
            </Question>
          ))}
        </div>
      </div>
    </QuestionContainer>
  );
};

export default QuestionSelect;
