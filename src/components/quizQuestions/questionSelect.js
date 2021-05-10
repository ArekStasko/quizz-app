import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../data/data";

const QuestionContainer = styled.div`
  background-image: url(${({ category }) => data[0][category].assets["selectBG"]});
  @media (max-width: 768px) {
    background-image: url(${({ category }) => data[0][category].mobile["bg2"]});
  }
`;

const QuestionNumber = styled.div`
  background: ${({ category }) => data[0][category].assets["non_active-btn"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => data[0][category].assets["border"]};
    @media (max-width: 768px) {
    background: ${({ category }) => data[0][category].mobile["non_active-btn"]};
  }
`;

const SelectShadow = styled.div`
  background: ${({ category }) => data[0][category].assets["shadow"]};
  @media (max-width: 768px) {
    background: ${({ category }) => data[0][category].mobile["shadow"]};
  }
`;

const Gradient = styled.div`
  @media (max-width: 768px) {
    box-shadow: 0px -30px 90px 130px ${({ category }) => data[0][category].mobile['gradient']};
    background: ${({ category }) => data[0][category].mobile['gradient']};
  }
`;

const Question = styled.div`
  background: ${({ category }) => data[0][category].assets['non_active-btn']};
  border: 1px solid ${({ category }) => data[0][category].assets["border"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => data[0][category].assets["border"]};
  pointer-events: ${({ cur }) => cur};
  transition: all 700ms linear;

  &::before{
    background: ${({ category }) => data[0][category].assets['active-btn']};
    @media (max-width: 768px) {
    background: none;
  }
    }

  :hover {
    &::before{
        opacity: 1;
        @include boxShadow(2px 2px 10px 0px $-c-pink);
        box-shadow: 2px 2px 10px 0px
      ${({ category }) => data[0][category].assets["border"]};
      }
  }

  @media (max-width: 768px) {
    background: ${({ category }) => data[0][category].mobile["non_active-btn"]};
    :hover{
    background: ${({ category }) => data[0][category].mobile["active-btn"]};
    }
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
          <div onClick={()=>{
            props.setScore(0);
            props.setShow(true);
          }} className="links__back">
              &#8735;
            </div>
            <Link to="/" className="links__cross">
              &#215;
            </Link>
            </div>

        <div className="header">
          <Gradient category={props.category} className='header__gradient'></Gradient>
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
                  e.target.style.background = data[0][props.category].assets['non_active-btn']
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
