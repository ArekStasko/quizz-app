//History imports 
import hisDrag from '../assets/historia/drag_background.png'
import hisScore from '../assets/historia/score_background.png'
import hisSelect from '../assets/historia/select_background.png'
import hisStart from '../assets/historia/his_start.png'
import hisShadow from '../assets/historia/his_shadow.png'
import hisPlay from '../assets/historia/his_play-btn.png'
import hisCorrect from '../assets/historia/quiz_correct.png'
//Culture imports 
import culDrag from '../assets/kultura/drag_background.png'
import culScore from '../assets/kultura/score_background.png'
import culSelect from '../assets/kultura/select_background.png'
import culStart from '../assets/kultura/start_background.png'
import culShadow from '../assets/kultura/kul_shadow.png'
import culCorrect from '../assets/kultura/quiz_correct.png'
import culPlay from '../assets/kultura/quiz_play-btn.png'
//Programming imports 
import proDrag from '../assets/programowanie/drag_background.png'
import proScore from '../assets/programowanie/score_background.png'
import proSelect from '../assets/programowanie/select_background.png'
import proStart from '../assets/programowanie/start_background.png'
import proShadow from '../assets/programowanie/title_shadow.png'
import proCorrect from '../assets/programowanie/correct-btn.png'
import proPlay from '../assets/programowanie/prog_play-btn.png'



const data =  [
    {
        categories: ['his', 'kul', 'tech'],
        his: {
           assets: {
               'dragBG': hisDrag,
               'scoreBG': hisScore,
               'selectBG': hisSelect,
               'startBG': hisStart,
               'shadow': hisShadow,
               'quiz_correct': hisCorrect,
               'quiz_play-btn': hisPlay,
               'active-btn': 'linear-gradient(29deg, rgba(18,15,14,1) 14%, rgba(96,83,75,1) 45%, rgba(184,165,142,1) 79%);',
               'non_active-btn': 'linear-gradient(17deg, rgba(13,11,10,1) 21%, rgba(98,85,77,1) 47%, rgba(187,167,144,1) 75%);'
           },
           question: {
            '1': {
                questionText: 'What happened in 1066?',
                answers: [
                    {answer: 'WW2', correct: false},
                    {answer: 'The discovery of America', correct: false},
                    {answer: 'The Battle of Hastings', correct: false},
                    {answer: 'Absolutely nothing', correct: true}

                ]
            },
            '2': {
             questionText: 'Which of these was NOT a Roman leader ?',
             answers: [
                 {answer: 'Julius Caesar', correct: false},
                 {answer: 'Caesar Salad', correct: true},
                 {answer: 'Augustus', correct: false},
                 {answer: 'Nero', correct: false}
             ]
            },
            '3': {
                questionText: 'Where did tomatoes they come from?',
                answers: [
                    {answer: 'Africa', correct: false},
                    {answer: 'The Americas', correct: true},
                    {answer: 'A giant underground farm cave', correct: false},
                    {answer: 'Outer space', correct: false}

                ]
            },
            '4': {
                questionText: 'Where was the Titanic headed to before it sank ?',
                answers: [
                    {answer: 'The USA', correct: true},
                    {answer: 'Japan', correct: false},
                    {answer: 'Round in a big circle for no reason', correct: false},
                    {answer: 'Nobody knows!', correct: false}
                ]
            },
            '5': {
                questionText: 'What is the biggest ocean in the world ?',
                answers: [
                    {answer: 'Atlantic Ocean', correct: false},
                    {answer: 'Indian Ocean', correct: false},
                    {answer: 'Arctic Ocean', correct: false},
                    {answer: 'Pacific Ocean', correct: true}
                ]
            },
            '6': {
                questionText: 'Who was the THIRD man to walk on the moon?',
                answers: [
                    {answer: 'Neil Armstrong', correct: false},
                    {answer: 'Mark Hamill', correct: false},
                    {answer: 'Charles Conrad', correct: true},
                    {answer: 'Astronaut Audrey', correct: false}
                ]
            },
            '7': {
                questionText: 'Who did Henry VIII first marry ?',
                answers: [
                    {answer: 'Catherine of Aragon', correct: true},
                    {answer: 'Meghan Markle', correct: false},
                    {answer: 'Kate Middleton', correct: false},
                    {answer: 'Holly Willoughby', correct: false}
                ]
            },
            '8': {
                questionText: 'What is Thomas Edison famous for inventing ?',
                answers: [
                    {answer: 'The iPad', correct: false},
                    {answer: 'The light bulb', correct: true},
                    {answer: 'vacuum cleaners', correct: false},
                    {answer: 'WiFi', correct: false}
                ]
            },
            '9': {
                questionText: 'Where was the explorer Captain James Cook from ?',
                answers: [
                    {answer: 'England', correct: true},
                    {answer: 'Australia', correct: false},
                    {answer: 'Germany', correct: false},
                    {answer: 'Poland', correct: false}
                ]
            },
            '10': {
                questionText: 'Which war started in 1939 and ended in 1945 ?',
                answers: [
                    {answer: 'World War I', correct: false},
                    {answer: 'World War II', correct: true},
                    {answer: 'The Vietnam War', correct: false},
                    {answer: 'The Falklands War', correct: false}
                ]
            },
            '11': {
                questionText: 'End of the History section'
            }
           }
        },
        kul: {
            assets: {
                'dragBG': culDrag,
                'scoreBG': culScore,
                'selectBG': culSelect,
                'startBG': culStart,
                'shadow': culShadow,
                'quiz_correct': culCorrect,
                'quiz_play-btn': culPlay,
                'active-btn': 'background: linear-gradient(90deg, rgba(202,202,202,1) 21%, rgba(106,106,106,1) 77%);',
                'non_active-btn': ' background: linear-gradient(90deg, rgba(106,106,106,1) 21%, rgba(202,202,202,1) 79%);'
            },
            question: {
                '1': {
                    questionText: 'In what country is it considered a compliment to slurp loudly while eating soup ?',
                    answers: [
                        {answer: 'Iceland', correct: false},
                        {answer: 'Russian', correct: false},
                        {answer: 'Japan', correct: true},
                        {answer: 'Colombia', correct: false}
                    ]
                },
                '2': {
                    questionText: 'You are in Amman, Jordan, and you are invited to go to the souk. Where will you be going ?',
                    answers: [
                        {answer: 'Mosque', correct: false},
                        {answer: 'Market', correct: true},
                        {answer: 'Park', correct: false},
                        {answer: 'Turkish bath', correct: false}
                    ]
                },
                '3': {
                    questionText: 'In Italy, mums and roses are the favored flowers to take when invited to dinner. True or False ?',
                    answers: [
                        {answer: 'true', correct: false},
                        {answer: 'false', correct: true}
                    ]
                },
                '4': {
                    questionText: 'In many countries, it is perfectly normal for men to be physically affectionate with each other. True or False ?',
                    answers: [
                        {answer: 'true', correct: true},
                        {answer: 'false', correct: false}
                    ]
                },
                '5': {
                    questionText: 'In which country would showing up half an hour late for an invitation be considered rude ?',
                    answers: [
                        {answer: 'Greece', correct: false},
                        {answer: 'Panama', correct: false},
                        {answer: 'Switzerland', correct: false},
                        {answer: 'Guinea', correct: true}
                    ]
                },
                '6': {
                    questionText: 'If you are having dinner with a business partner in Argentina, when is it appropriate to talk business ?',
                    answers: [
                        {answer: 'As soon as you sit down at the table', correct: false},
                        {answer: 'After some polite table conversation', correct: true},
                        {answer: 'After the meal is through', correct: false},
                        {answer: 'Never', correct: false}
                    ]
                },
                '7': {
                    questionText: 'In India, you are invited to a friend’s house to share a meal of rice and curry. What is the best way to eat ?',
                    answers: [
                        {answer: 'Using a spoon', correct: false},
                        {answer: 'Using your left hand only', correct: false},
                        {answer: 'Using your right hand only', correct: true},
                        {answer: 'Using both hands', correct: false}
                    ]
                },
                '8': {
                    questionText: 'In which country are people generally most comfortable giving direct, negative feedback to colleagues at work ?',
                    answers: [
                        {answer: 'Brazil', correct: false},
                        {answer: 'Japan', correct: false},
                        {answer: 'Germany', correct: true},
                        {answer: 'Poland', correct: false}
                    ]
                },
                '9': {
                    questionText: 'In which culture would you most typically see “high fives” at the office ?',
                    answers: [
                        {answer: 'Korea', correct: false},
                        {answer: 'USA', correct: true},
                        {answer: 'German', correct: false},
                        {answer: 'UK', correct: false}
                    ]
                },
                '10': {
                    questionText: 'In which culture are you most likely to go out drinking with your boss ?',
                    answers: [
                        {answer: 'France', correct: false},
                        {answer: 'Japan', correct: true},
                        {answer: 'Germany', correct: false},
                        {answer: 'Switzerland', correct: false}
                    ]
                },
                '11': {
                    questionText: 'End of the culture section'
                }
            }
        },
        prog: {
            assets: {
                'dragBG': proDrag,
                'scoreBG': proScore,
                'selectBG': proSelect,
                'startBG': proStart,
                'shadow': proShadow,
                'quiz_correct': proCorrect,
                'quiz_play-btn': proPlay,
                'active-btn': 'linear-gradient(90deg, rgba(178,54,140,1) 45%, rgba(59,31,87,1) 83%);',
                'non_active-btn': 'background: linear-gradient(30deg, rgba(44,24,70,1) 33%, rgba(81,46,121,1) 83%);'
            },
            question: {
                '1': {
                    questionText: 'Inside which HTML element do we put the JavaScript ?',
                    answers: [
                        {answer: 'js', correct: false},
                        {answer: 'scripting', correct: false},
                        {answer: 'javascript', correct: false},
                        {answer: 'script', correct: true}
                    ]
                },
                '2': {
                    questionText: 'Where is the correct place to insert a JavaScript ?',
                    answers: [
                        {answer: 'The body section', correct: true},
                        {answer: 'Both the head section and the body are correct', correct: false},
                        {answer: 'The head section', correct: false},
                    ]
                },
                '3': {
                    questionText: 'The external JavaScript file must contain the script tag.',
                    answers: [
                        {answer: 'false', correct: true},
                        {answer: 'true', correct: false}
                    ]
                },
                '4': {
                    questionText: 'How do you write Hello World in an alert box?',
                    answers: [
                        {answer: 'alert("hello Wolrd")', correct: true},
                        {answer: 'console.log("hello world")', correct: false},
                        {answer: 'msg("hello world")', correct: false},
                        {answer: 'box("hello world")', correct: false}
                    ]
                },
                '5': {
                    questionText: 'How do you create a function in JavaScript ?',
                    answers: [
                        {answer: 'function = myFunction()', correct: true},
                        {answer: 'function: myFunction()', correct: false},
                        {answer: 'function myFunction()', correct: false},
                        {answer: 'function / myFunction()', correct: false}
                    ]
                },
                '6': {
                    questionText: 'How do you call a function named "myFunction"?',
                    answers: [
                        {answer: 'call call myFunction()', correct: false},
                        {answer: 'call myFunction()', correct: false},
                        {answer: 'myFunction()', correct: true},
                        {answer: 'call on myFunction()', correct: false}
                    ]
                },
                '7': {
                    questionText: 'How can you add a comment in a JavaScript ?',
                    answers: [
                        {answer: '<!--comment-->', correct: false},
                        {answer: ';comment', correct: false},
                        {answer: '/comment', correct: false},
                        {answer: '//commnet', correct: true}
                    ]
                },
                '8': {
                    questionText: 'How do you round the number 7.25, to the nearest integer ?',
                    answers: [
                        {answer: 'Math.round(7.25)', correct: true},
                        {answer: 'Math.rnd(7.25)', correct: false},
                        {answer: 'round(7.25)', correct: false},
                        {answer: 'rnd(7.25)', correct: false}
                    ]
                },
                '9': {
                    questionText: 'JavaScript is the same as Java.',
                    answers: [
                        {answer: 'true', correct: false},
                        {answer: 'false', correct: true}
                    ]
                },
                '10': {
                    questionText: 'Which event occurs when the user clicks on an HTML element?',
                    answers: [
                        {answer: 'onmouseover', correct: false},
                        {answer: 'onclick', correct: true},
                        {answer: 'onmouseclick', correct: false},
                        {answer: 'onchange', correct: false}
                    ]
                },
                '11': {
                    questionText: 'end of programming section'
                }
            }
        }
    }
]

export default data