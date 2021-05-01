import React, { useState } from "react";
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
  background: ${({ category }) => data[0][category].assets["shadow"]};
`;

const Question = styled.div`
  background: ${({ category }) => data[0][category].assets['non_active-btn']};
  border: 1px solid ${({ category }) => data[0][category].assets["border"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => data[0][category].assets["border"]};
  pointer-events: ${({ cur }) => cur};
  transition: all 700ms linear;
  background-size: 150%;

  :hover {
    background: ${({ category }) => data[0][category].assets["active-btn"]};
    box-shadow: 2px 2px 10px 0px
      ${({ category }) => data[0][category].assets["border"]};
    background-size: 100%;

  }
`;

const QuestionSelect = ({ props }) => {

  const [cur, setCur] = useState("auto")

  return (
    <QuestionContainer
      category={props.category}
      className="select"
    >
      <div className="select__wrapper">
      <div className="links">
          <Link to="/" className="links__back">
              &#8735;
            </Link>
            <Link to="/" className="links__cross">
              &#215;
            </Link>
            </div>

        <div className="header">
          <div className="header__logo"></div>
          <div className="header__text">
            <SelectShadow
              category={props.category}
              className="header__text--shadow"
            >
              SELECT THE CORRECT ANSWER
            </SelectShadow>
            <QuestionNumber
              category={props.category}
              className="header__text--number"
            >
              <p>
                {props.quest}&#47;<span>10</span>
              </p>
            </QuestionNumber>
          </div>
        </div>

        <div className="select__wrapper--question">
          <p>
            {props.quest}.{" "}
            {data[0][props.category].question[props.quest].questionText}
          </p>
        </div>

        <div className="answers">
          {data[0][props.category].question[props.quest].answers.map((item) => (
            <Question
              key={item.answer}
              category={props.category}
              cur={cur}
              className="answers__text"
              onClick={e=>{
                setCur('none')
                item.correct ? 
                (e.target.style.background = data[0][props.category].assets['correct']) 
                : 
                (e.target.style.background = data[0][props.category].assets['incorrect'])
                setTimeout(()=> {
                  setCur('auto')
                  props.setQuest(props.quest + 1);
                  item.correct
                    ? props.setScore(props.score + 1)
                    : props.setScore(props.score + 0);
                }, 1000)
              }}>
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
