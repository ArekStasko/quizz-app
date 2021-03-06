import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../data/data";
import dataAssets from "../../data/dataAssets";

const ScoreContainer = styled.div`
  background-image: url(${({ category }) => dataAssets[0][category].assets["scoreBG"]});
  @media (max-width: 768px) {
    background-image: url(${({ category }) => dataAssets[0][category].mobile["bg4"]});
  }
`;

const Score = styled.div`
  background: ${({ category }) =>
    dataAssets[0][category].assets["non_active-btn"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => dataAssets[0][category].assets["border"]};
  @media (max-width: 768px) {
    background: ${({ category }) =>
      dataAssets[0][category].mobile["non_active-btn"]};
  }
`;

const Gradient = styled.div`
  @media (max-width: 768px) {
    box-shadow: 0px -30px 90px 130px ${({ category }) => dataAssets[0][category].mobile["gradient"]};
    background: ${({ category }) => dataAssets[0][category].mobile["gradient"]};
  }
`;

const ScoreIcon = styled.div`
  background-image: url(${({ category }) => dataAssets[0].mainAssets[category]});
`;

const ScoreShadow = styled.div`
  background: ${({ category }) => dataAssets[0][category].assets["shadow"]};
`;

const Line = styled.div`
  background-color: ${({ category }) =>
    dataAssets[0][category].assets["border"]};
`;

const Btn = styled.div`
  position: relative;
  z-index: 1;
  background: ${({ category }) =>
    dataAssets[0][category].assets["non_active-btn"]};
  border: 1px solid
    ${({ category }) => dataAssets[0][category].assets["border"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => dataAssets[0][category].assets["border"]};
  transition: all 500ms linear;

  &::before {
    background: ${({ category }) =>
      dataAssets[0][category].assets["active-btn"]};
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    z-index: -1;
    transition: all 500ms linear;
    opacity: 0;
  }

  :hover {
    &::before {
      opacity: 1;
      @include boxShadow(2px 2px 10px 0px $-c-pink);
      box-shadow: 2px 2px 10px 0px
        ${({ category }) => dataAssets[0][category].assets["border"]};
    }
  }

  @media (max-width: 768px) {
    background: ${({ category }) =>
      dataAssets[0][category].mobile["non_active-btn"]};
    :hover {
      background: ${({ category }) =>
        dataAssets[0][category].mobile["active-btn"]};
    }
  }

  .play-btn {
    background-image: url(${({ category }) => dataAssets[0][category].assets["quiz_play-btn"]});
  }
`;

const Icon = styled.div`
  background-image: url(${({ item }) => dataAssets[0].mainAssets[item]});
`;

const QuestionScore = ({ props }) => {
  const checkCategory = (cat) => {
    return cat !== props.category;
  };

  return (
    <ScoreContainer category={props.category} className="score">
      <div className="wrapper">
        <div className="select">
          <Gradient
            category={props.category}
            className="select__gradient"
          ></Gradient>
          <div className="select__logo"></div>
          <ScoreIcon
            category={props.category}
            className="select__icon"
          ></ScoreIcon>
          <Line category={props.category} className="select__line"></Line>
          <div className="select__category">{props.category.toUpperCase()}</div>

          <div className="select__result">
            <ScoreShadow
              category={props.category}
              className="select__result--shadow"
            >
              TW??J WYNIK
            </ScoreShadow>
            <Score category={props.category} className="select__result--result">
              <p>{props.score}&#47;10</p>
            </Score>
          </div>

          <Btn category={props.category} className="select__btn">
            <Link
              onClick={() => {
                props.setQuest(1);
                props.setScore(0);
              }}
              to={`/quiz/${props.category}`}
              className="select__btn--link"
            >
              <p>POWT??RZ QUIZ</p>
              <div className="play-btn"></div>
            </Link>
          </Btn>
        </div>

        <div className="categories">
          <div className="links">
            <Link to="/" className="links__back"></Link>
            <Link to="/" className="links__cross"></Link>
          </div>

          <p>WYBIERZ INN?? KATEGORI??</p>

          <div className="categories__wrapper">
            {data.categories.filter(checkCategory).map((item) => {
              const param = `/quiz/${item}`;
              return (
                <Btn
                  key={item}
                  category={props.category}
                  className="categories__wrapper--btn"
                >
                  <Link
                    onClick={() => {
                      props.setQuest(1);
                      props.setScore(0);
                    }}
                    to={param}
                  >
                    <Icon
                      className="categories__wrapper--btn--icon"
                      item={item}
                    ></Icon>
                    <div>
                      <Line
                        category={props.category}
                        className="categories__wrapper--btn--line"
                      ></Line>
                      <p className="categories__wrapper--btn--text">{item}</p>
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
