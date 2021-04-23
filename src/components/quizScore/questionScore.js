import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../data/data";

const ScoreContainer = styled.div`
  background-image: url(${({ category }) => data[0][category].assets["scoreBG"]});
`;

const Score = styled.div`
  background: ${({ category }) => data[0][category].assets["non_active-btn"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => data[0][category].assets["border"]};
`;

const ScoreIcon = styled.div`
  background-image: url(${({ category }) => data[0].mainAssets[category]});
`;

const ScoreShadow = styled.div`
  background-image: url(${({ category }) => data[0][category].assets["shadow"]});
`;

const Btn = styled.div`
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

  .play-btn {
    background-image: url(${({ category }) =>  data[0][category].assets["quiz_play-btn"]});
  }
`;

const Icon = styled.div`
  background-image: url(${({ item }) => data[0].mainAssets[item]});
`;

const QuestionScore = ({ props }) => {
  return (
    <ScoreContainer category={props.category} className="score_main-container">
      <div className="score_main-wrapper">
        <div className="select_score-wrapper">
          <div className="select_quiz-logo"></div>
          <ScoreIcon
            category={props.category}
            className="score_icon"
          ></ScoreIcon>
          <div className="select_line"></div>
          <div className="select_category-name">
            {props.category.toUpperCase()}
          </div>

          <div className="score-wrapper">
            <ScoreShadow category={props.category} className="score-shadow">
              TWÓJ WYNIK
            </ScoreShadow>
            <Score category={props.category} className="score">
              <p>{props.score}/10</p>
            </Score>
          </div>

          <Btn category={props.category} className="repeat-btn">
            <Link
              onClick={() => {
                props.setQuest(1);
                props.setScore(0);
              }}
              to={"/quiz/" + `${props.category}`}
              className="repeat_btn-link"
            >
              <p>POWTÓRZ QUIZ</p>
              <div className="play-btn"></div>
            </Link>
          </Btn>
        </div>

        <div className="select_categories-wrapper">
          <Link to="/" className="cross-link">
            &#215;
          </Link>

          <p>WYBIERZ INNĄ KATEGORIĘ</p>

          <div className="categories-wrapper">
            {data[0].categories.map((item) => {
              const param = "/quiz/" + item;
              return (
                <Btn
                  key={item}
                  category={props.category}
                  className="category-btn"
                >
                  <Link
                    onClick={() => {
                      props.setQuest(1);
                      props.setScore(0);
                    }}
                    to={param}
                  >
                    <Icon className="category-icon" item={item}></Icon>
                    <div>
                      <div className="category-line"></div>
                      <p className="category-text">{item}</p>
                    </div>
                  </Link>
                </Btn>
              );
            })}
          </div>
        </div>
      </div>
    </ScoreContainer>
  );
};

export default QuestionScore;

//onClick={()=> props.setQuest(1)}
