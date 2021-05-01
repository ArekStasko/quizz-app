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
  background: ${({ category }) => data[0][category].assets["shadow"]};
`;

const StartIcon = styled.div`
  background-image: url(${({ category }) => data[0].mainAssets[category]});
`;

const Line = styled.div`
background-color: ${({ category }) => data[0][category].assets["border"]};
`

const StartBtn = styled.div`
  background-image: ${({ category }) => data[0][category].assets["active-btn"]};
  border: 1px solid ${({ category }) => data[0][category].assets["border"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => data[0][category].assets["border"]};
  transition: all 800ms linear;
  background-size: 150%;

  :hover {
    background-image: ${({ category }) => data[0][category].assets["non_active-btn"]};
    box-shadow: 2px 2px 10px 0px
      ${({ category }) => data[0][category].assets["border"]};
    background-size: 100%;
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
        <StartWrapper category={category} className="start">
          <div className="wrapper">
            <Link to="/" className="cross-link">
              &#215;
            </Link>
            <div className="wrapper__logo">
              <div className="wrapper__logo--logo"></div>
              <StartShadow category={category} className="wrapper__logo--header">
                <p>WYBRANA KATEGORIA&#58;</p>
              </StartShadow>
            </div>
            <div className="wrapper__category">
              <StartIcon category={category} className="wrapper__category--icon"></StartIcon>
              <div className="wrapper__category--title">
                <Line category={category}></Line>
                <p>{category}</p>
              </div>
            </div>

            <StartBtn
              onClick={() => setShow(!show)}
              category={category}
              className="wrapper__btn"
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

