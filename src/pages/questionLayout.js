import React, {useState} from 'react'
import QuestionDrag from '../components/quizQuestions/questionDrag'
import QuestionSelect from '../components/quizQuestions/questionSelect'

const QuestionLayout = ({category}) => {

const [quest, setQuest] = useState(1)
const [score, setScore] = useState(0)

let props = {
    quest: quest,
    score: score,
    setQuest: setQuest,
    setScore: setScore,
    category: category,
}



    return(
<>
    {
        quest === 10 ? (
        <QuestionDrag props={props} />
        )
        : quest < 10 ? (
        <QuestionSelect props={props} />
        )
        : (
            <div>
                <h1>Koniec</h1>
            </div>
        )
    }
</>
    )
}

export default QuestionLayout