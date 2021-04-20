import React from 'react'
import data from '../data/data'
import { useParams } from 'react-router'

const QuizLayout = () => {

let { category } = useParams()

    return(
        <div>
            <h1>{data[0][category].question['1'].questionText}</h1>
        </div>
    )
}

export default QuizLayout