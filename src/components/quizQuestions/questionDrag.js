import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../data/data";
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

const QuestionContainer = styled.div`
  background-image: url(${({ category }) => data[0][category].assets["dragBG"]});
`;

const QuestionNumber = styled.div`
  background: ${({ category }) => data[0][category].assets["non_active-btn"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => data[0][category].assets["border"]};
`;

const SelectShadow = styled.div`
  background: ${({ category }) => data[0][category].assets["shadow"]};
`;

const DropPlace = styled.div`
  border: 1px solid ${({ category }) => data[0][category].assets["border"]};
`;

const Question = styled.div`
  background: ${({ category, bg }) => data[0][category].assets[bg]};
  border: 1px solid ${({ category }) => data[0][category].assets["border"]};
  box-shadow: 1px 1px 10px 0px
    ${({ category }) => data[0][category].assets["border"]};
  transition: all 700ms linear;
  background-size: 150%;

  :hover {
    background: ${({ category }) => data[0][category].assets["active-btn"]};
    box-shadow: 2px 2px 10px 0px
      ${({ category }) => data[0][category].assets["border"]};
    background-size: 100%;
  }
`;

const QuestionDrag = ({ props }) => {

  const [bg, setBg] = useState("non_active-btn")

  const onDragEnd = (result) => {
    const { destination, source } = result;


    if (destination && destination.droppableId === "answerdrop") {
      data[0][props.category].question[props.quest].answers[source.index].correct  ? (setBg('correct')) : (setBg('incorrect'))
    
      setTimeout(()=> {
        setBg('non_active-btn')
        props.setQuest(props.quest + 1);
        data[0][props.category].question[props.quest].answers[source.index].correct ? 
        ( props.setScore(props.score + 1) ) 
        : 
        (props.setScore(props.score + 0) )
      }, 1000)
    } else {
      return;
    }

  };

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
              DRAG &#38; DROP THE RIGHT ANSWER
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
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="answerdrop">
            {(provided) => (
              <>
                <DropPlace
                  category={props.category}
                  className="drop_place"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {provided.placeholder}
                </DropPlace>
              </>
            )}
          </Droppable>

          <Droppable droppableId="answerdrag">
            {(provided) => (
              <div
                className="answers"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data[0][props.category].question[props.quest].answers.map(
                  (item, index) => (
                    <Draggable key={item.answer} draggableId={item.answer} index={index}>
                      {(provided) => (
                        <Question
                          category={props.category}
                          bg={bg}
                          className="answers__text"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <p>{item.answer}</p>
                        </Question>
                      )}
                    </Draggable>
                  )
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </QuestionContainer>
  );
};

export default QuestionDrag;
