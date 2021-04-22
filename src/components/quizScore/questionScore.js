import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../data/data";

const ScoreContainer = styled.div`
  background-image: url(${({ category }) => data[0][category].assets["scoreBG"]});
`;

const Icon = styled.div`
  background-image: url(${({ item }) => data[0].mainAssets[item]});
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  height: 50px;
`;

const QuestionScore = ({ props }) => {
  return (
    <ScoreContainer category={props.category} className="score_main-container">
      <div className="score_main-wrapper">
        <div className="select_score-wrapper">
          <div className="select_quiz-logo"></div>
          <div></div>
          <div className="select_line"></div>
          <div className="select_category-name">{props.category.toUpperCase()}</div>
          <div className="score-wrapper">
            <div className="score-shadow">TWÓJ WYNIK</div>
            <div className="score">
              <p>{props.score}/10</p>
            </div>
          </div>
          <div className="repeat-btn">
            <p>POWTÓRZ QUIZ</p>
            <div></div>
          </div>
        </div>

        <div className="select_categories-wrapper">
          <Link to="/" className="cross-link">
            &#215;
          </Link>
          <p>WYBIERZ INNĄ KATEGORIĘ</p>
          {data[0].categories.map((item) => {
            const param = "/quiz" + `/${item}`;

            return (
              <Link onClick={()=> {props.setQuest(1); props.setScore(0)}} key={item} to={param} className="category-wrapper">
                <Icon item={item}></Icon>
                <div>
                  <div className="category-line"></div>
                  <p>{item}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </ScoreContainer>
  );
};

export default QuestionScore;


//onClick={()=> props.setQuest(1)}