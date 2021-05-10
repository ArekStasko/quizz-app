import React, {useState} from 'react'
import QuestionDrag from '../components/quizQuestions/questionDrag'
import QuestionSelect from '../components/quizQuestions/questionSelect'
import QuestionScore from '../components/quizScore/questionScore'

const QuestionLayout = ({category, show}) => {

const [quest, setQuest] = useState(1)
const [score, setScore] = useState(0)

let props = {
    quest: quest,
    score: score,
    setQuest: setQuest,
    setScore: setScore,
    setShow: show,
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
               <QuestionScore props={props}/>
            )
    
    }
</>
    )
}

export default QuestionLayout

