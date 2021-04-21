import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data";
import QuestionLayout from './questionLayout'

const StartWrapper = styled.div`
  background-image: url(${({ category }) => data[0][category].assets["startBG"]});
`;

const StartShadow = styled.div`
  background-image: url(${({ category }) => data[0][category].assets["shadow"]});
`;

const StartIcon = styled.div`
  background-image: url(${({ category }) => data[0].mainAssets[category]});
`;

const StartBtn = styled.div`
  background: ${({ category }) => data[0][category].assets["active-btn"]};
  border: 1px solid ${({ category }) => data[0][category].assets["border"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => data[0][category].assets["border"]};
  transition: all 300ms linear;

  :hover {
    background: ${({ category }) => data[0][category].assets["non_active-btn"]};
    box-shadow: 2px 2px 10px 0px
      ${({ category }) => data[0][category].assets["border"]};
    transform: scale(1.1);
  }

  div {
    background-image: url(${({ category }) => data[0][category].assets["quiz_play-btn"]});
  }
`;

const QuizLayout = () => {
  const [show, setShow] = useState(true);

  let { category } = useParams();

  return (
    <>
      {show ? (
        <StartWrapper category={category} className="main_start-container">
          <div className="main_start-wrapper">
            <Link to="/" className="cross-link">
              &#215;
            </Link>
            <div className="start_logo-wrapper">
              <div className="quiz_start-logo"></div>
              <StartShadow category={category} className="quiz_start-header">
                <p>WYBRANA KATEGORIA:</p>
              </StartShadow>
            </div>
            <div className="start_category-wrapper">
              <StartIcon category={category} className="start-icon"></StartIcon>
              <div className="start-title">
                <div></div>
                <p>{category}</p>
              </div>
            </div>

            <StartBtn
              onClick={() => setShow(!show)}
              category={category}
              className="start-btn"
            >
              <p>ROZPOCZNIJ</p>
              <div></div>
            </StartBtn>
          </div>
        </StartWrapper>
      ) : (
        <>
          <QuestionLayout category={category} />
        </>
      )}
    </>
  );
};

export default QuizLayout;

