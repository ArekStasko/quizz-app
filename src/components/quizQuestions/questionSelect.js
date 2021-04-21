import React from 'react'
import styled from 'styled-components'
import data from '../../data/data'

const QuestionContainer = styled.div`
   background-image: url(${({ category }) => data[0][category].assets['selectBG']});
   
`

const QuestionSelect = ({props}) => {

    return(
        <QuestionContainer category={props.category} className='select_question-container'>
        </QuestionContainer>
    )
}

export default QuestionSelect