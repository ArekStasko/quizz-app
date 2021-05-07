import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../data/data";

const ScoreContainer = styled.div`
  background-image: url(${({ category }) => data[0][category].assets["scoreBG"]});
  @media (max-width: 768px) {
    background-image: url(${({ category }) => data[0][category].mobile["bg4"]});
  }
`;

const Score = styled.div`
  background: ${({ category }) => data[0][category].assets["non_active-btn"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => data[0][category].assets["border"]};
    @media (max-width: 768px) {
    background: ${({ category }) => data[0][category].mobile["non_active-btn"]};
  }
`;

const ScoreIcon = styled.div`
  background-image: url(${({ category }) => data[0].mainAssets[category]});
`;

const ScoreShadow = styled.div`
  background: ${({ category }) => data[0][category].assets["shadow"]};
`;

const Line = styled.div`
background-color: ${({ category }) => data[0][category].assets["border"]};
`

const Btn = styled.div`
  position: relative;
  z-index: 1;
  background: ${({ category }) => data[0][category].assets["non_active-btn"]};
  border: 1px solid ${({ category }) => data[0][category].assets["border"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => data[0][category].assets["border"]};
  transition: all 500ms linear;

  &::before{
    background: ${({ category }) => data[0][category].assets["active-btn"]};
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

  .play-btn {
    background-image: url(${({ category }) =>  data[0][category].assets["quiz_play-btn"]});
  }
`;

const Icon = styled.div`
  background-image: url(${({ item }) => data[0].mainAssets[item]});
`;

const QuestionScore = ({ props }) => {

  const checkCategory = cat => {
    return cat !== props.category;
  }

  return (
    <ScoreContainer category={props.category} className="score">
      <div className="wrapper">
        <div className="select">
          <div className="select__logo"></div>
          <ScoreIcon
            category={props.category}
            className="select__icon"
          ></ScoreIcon>
          <Line category={props.category} className="select__line"></Line>
          <div className="select__category">
            {props.category.toUpperCase()}
          </div>

          <div className="select__result">
            <ScoreShadow category={props.category} className="select__result--shadow">
              TWÓJ WYNIK
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
              <p>POWTÓRZ QUIZ</p>
              <div className='play-btn'></div>
            </Link>
          </Btn>
        </div>

        <div className="categories">
        <div className="links">
          <Link to="/" className="links__back">
              &#8735;
            </Link>
            <Link to="/" className="links__cross">
              &#215;
            </Link>
            </div>


          <p>WYBIERZ INNĄ KATEGORIĘ</p>

          <div className="categories__wrapper">
            {data[0].categories.filter(checkCategory).map((item) => {
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
                    <Icon className="categories__wrapper--btn--icon" item={item}></Icon>
                    <div>
                      <Line category={props.category} className="categories__wrapper--btn--line"></Line>
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

//onClick={()=> props.setQuest(1)}
