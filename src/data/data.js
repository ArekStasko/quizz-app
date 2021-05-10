//History imports 
import hisDrag from '../assets/historia/drag_background.png'
import hisScore from '../assets/historia/score_background.png'
import hisSelect from '../assets/historia/select_background.png'
import hisStart from '../assets/historia/his_start.png'
import hisPlay from '../assets/historia/his_play-btn.png'
//History mobile imports 
import his1Bg from '../assets/historia/mobile/background_1.png'
import his2Bg from '../assets/historia/mobile/background_2.png'
import his3Bg from '../assets/historia/mobile/background_3.png'
import his4Bg from '../assets/historia/mobile/background_4.png'
import hisMobilePlay from '../assets/historia/mobile/his_play-btn.png'
//Culture imports 
import culDrag from '../assets/kultura/drag_background.png'
import culScore from '../assets/kultura/score_background.png'
import culSelect from '../assets/kultura/select_background.png'
import culStart from '../assets/kultura/start_background.png'
import culPlay from '../assets/kultura/quiz_play-btn.png'
//Programming imports 
import proDrag from '../assets/programowanie/drag_background.png'
import proScore from '../assets/programowanie/score_background.png'
import proSelect from '../assets/programowanie/select_background.png'
import proStart from '../assets/programowanie/start_background.png'
import proPlay from '../assets/programowanie/prog_play-btn.png'
//Motor imports 
import motDrag from '../assets/motoryzacja/drag_background.png'
import motScore from '../assets/motoryzacja/score_background.png'
import motSelect from '../assets/motoryzacja/select_background.png'
import motStart from '../assets/motoryzacja/start_background.png'
import motPlay from '../assets/motoryzacja/mot_play-btn.png'
//Motor mobile imports 
import mot1Bg from '../assets/motoryzacja/mobile/background_1.png'
import mot2Bg from '../assets/motoryzacja/mobile/background_2.png'
import mot3Bg from '../assets/motoryzacja/mobile/background_3.png'
import mot4Bg from '../assets/motoryzacja/mobile/background_4.png'
//Tech imports 
import techDrag from '../assets/technologia/drag_background.png'
import techScore from '../assets/technologia/score_background.png'
import techSelect from '../assets/technologia/select_background.png'
import techStart from '../assets/technologia/start_background.png'
import techPlay from '../assets/technologia/tech_play-btn.png'
//Tech mobile imports 
import tech1Bg from '../assets/technologia/mobile/background_1.png'
import tech2Bg from '../assets/technologia/mobile/background_2.png'
import tech3Bg from '../assets/technologia/mobile/background_3.png'
import tech4Bg from '../assets/technologia/mobile/background_4.png'
//Global imports
import chooseBackground from '../assets/choose_background.png'
import culIcon from '../assets/hand-icon.png'
import hisIcon from '../assets/his_icon.png'
import progIcon from '../assets/prog_icon.png'
import motIcon from '../assets/mot_icon.png'
import techIcon from '../assets/tech_icon.png'
import quizIcon from '../assets/quiz_icon.png'
import quizLogo from '../assets/quiz_logo.png'




const data =  [
    {
        categories: ['Historia', 'Kultura', 'Programowanie', 'Technologia', 'Motoryzacja'],
        mainAssets: {
            'chooseBackground': chooseBackground,
            'Kultura': culIcon,
            'Historia': hisIcon,
            'Programowanie': progIcon,
            'Technologia': techIcon,
            'Motoryzacja': motIcon,
            'quizIcon': quizIcon,
            'quizLogo': quizLogo
        },
        Historia: {
           assets: {
               'dragBG': hisDrag,
               'scoreBG': hisScore,
               'selectBG': hisSelect,
               'startBG': hisStart,
               'shadow': 'linear-gradient(90deg, rgba(164,146,127,0) 4%, rgba(164,146,127,0.7) 18%, rgba(164,146,127,0.7) 82%, rgba(164,146,127,0) 97%);',
               'quiz_play-btn': hisPlay,
               'border': 'rgb(230, 228, 228)',
               'active-btn': 'linear-gradient(29deg, rgba(18,15,14,1) 14%, rgba(96,83,75,1) 45%, rgba(184,165,142,1) 79%);',
               'non_active-btn': 'linear-gradient(17deg, rgba(13,11,10,1) 21%, rgba(98,85,77,1) 47%, rgba(187,167,144,1) 75%);',
               'correct': 'linear-gradient(56deg, rgba(25,224,24,1) 21%, rgba(39,149,8,1) 79%)',
               'incorrect': 'linear-gradient(56deg, rgba(224,24,24,1) 21%, rgba(149,8,8,1) 79%)',
           },
           mobile: {
             'bg1': his1Bg,
             'bg2': his2Bg,
             'bg3': his3Bg,
             'bg4': his4Bg,
             'his_play-btn': hisMobilePlay,
             'non_active-btn': 'linear-gradient(48deg, rgba(44,7,116,1) 4%, rgba(141,106,203,1) 97%);',
             'active-btn': 'linear-gradient(48deg, rgba(152,118,210,1) 4%, rgba(46,7,119,1) 97%);',
             'gradient': '#040a9c',
             'shadow': 'linear-gradient(90deg, rgba(4,10,156,0) 4%, rgba(4, 10, 156,0.7) 18%, rgba(4, 10, 156,0.7) 82%, rgba(4, 10, 156,0) 97%);',
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
           }
        },
        Kultura: {
            assets: {
                'dragBG': culDrag,
                'scoreBG': culScore,
                'selectBG': culSelect,
                'startBG': culStart,
                'shadow': 'linear-gradient(90deg, rgba(170,170,170,0) 4%, rgba(170,170,170,0.7) 18%, rgba(170,170,170,0.7) 82%, rgba(170,170,170,0) 97%);',
                'quiz_play-btn': culPlay,
                'border': 'rgb(248, 248, 250)',
                'active-btn': 'linear-gradient(90deg, rgba(202,202,202,1) 21%, rgba(106,106,106,1) 77%);',
                'non_active-btn': ' linear-gradient(90deg, rgba(106,106,106,1) 21%, rgba(202,202,202,1) 79%);',
                'correct': 'linear-gradient(56deg, rgba(25,224,24,1) 21%, rgba(39,149,8,1) 79%)',
                'incorrect': 'linear-gradient(56deg, rgba(224,24,24,1) 21%, rgba(149,8,8,1) 79%)'
            },
            mobile: {
                'bg1': culStart,
                'bg2': culSelect,
                'bg3': culDrag,
                'bg4': culScore,
                'color': 'linear-gradient(90deg, rgba(106,106,106,1) 21%, rgba(202,202,202,1) 79%);',
                'color-active': 'linear-gradient(90deg, rgba(202,202,202,1) 21%, rgba(106,106,106,1) 77%);',
                'gradient': '#979797',
                'shadow': 'linear-gradient(90deg, rgba(151, 151, 151,0) 4%, rgba(151, 151, 151,0.7) 18%, rgba(151, 151, 151,0.7) 82%, rgba(151, 151, 151,0) 97%);',
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
            }
        },
        Programowanie: {
            assets: {
                'dragBG': proDrag,
                'scoreBG': proScore,
                'selectBG': proSelect,
                'startBG': proStart,
                'shadow': 'linear-gradient(90deg, rgba(77,43,114,0) 4%, rgba(77,43,114,0.6) 15%, rgba(77,43,114,0.6) 85%, rgba(77,43,114,0) 97%);',
                'quiz_play-btn': proPlay,
                'border': 'rgb(143, 108, 209)',
                'active-btn': 'linear-gradient(90deg, rgba(178,54,140,1) 45%, rgba(59,31,87,1) 83%);',
                'non_active-btn': 'linear-gradient(30deg, rgba(44,24,70,1) 33%, rgba(81,46,121,1) 83%);',
                'correct': 'linear-gradient(56deg, rgba(25,224,24,1) 21%, rgba(39,149,8,1) 79%)',
                'incorrect': 'linear-gradient(56deg, rgba(224,24,24,1) 21%, rgba(149,8,8,1) 79%)'
            },
            mobile: {
                'bg1': proStart,
                'bg2': proSelect,
                'bg3': proDrag,
                'bg4': proScore,
                'color': 'linear-gradient(30deg, rgba(44,24,70,1) 33%, rgba(81,46,121,1) 83%);',
                'color-active': 'linear-gradient(90deg, rgba(178,54,140,1) 45%, rgba(59,31,87,1) 83%);',
                'gradient': '#d9198f',
                'shadow': 'linear-gradient(90deg, rgba(217, 25, 143,0) 4%, rgba(217, 25, 143,0.7) 18%, rgba(217, 25, 143,0.7) 82%, rgba(217, 25, 143,0) 97%);',
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
                        {answer: 'Both sections are corect', correct: false},
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
                        {answer: 'function = myFunction()', correct: false},
                        {answer: 'function: myFunction()', correct: false},
                        {answer: 'function myFunction()', correct: true},
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
            }
        },
        Motoryzacja: {
            assets: {
                'dragBG': motDrag,
                'scoreBG': motScore,
                'selectBG': motSelect,
                'startBG': motStart,
                'quiz_play-btn': motPlay,
                'shadow': 'linear-gradient(90deg, rgba(23,46,162,0) 4%, rgba(23,46,162,0.6) 18%, rgba(23,46,162,0.6) 82%, rgba(23,46,162,0) 97%);',
                'border': 'rgb(255, 255, 255)',
                'active-btn': 'linear-gradient(16deg, rgba(16,87,255,1) 55%, rgba(26,24,109,1) 100%);',
                'non_active-btn': 'linear-gradient(16deg, rgba(11,15,54,1) 55%, rgba(17,80,238,1) 100%);',
                'correct': 'linear-gradient(56deg, rgba(25,224,24,1) 21%, rgba(39,149,8,1) 79%)',
                'incorrect': 'linear-gradient(56deg, rgba(224,24,24,1) 21%, rgba(149,8,8,1) 79%)'
            },
            mobile: {
                'bg1': mot1Bg,
                'bg2': mot2Bg,
                'bg3': mot3Bg,
                'bg4': mot4Bg,
                'color': ' linear-gradient(48deg, rgba(13,16,61,1) 4%, rgba(19,67,208,1) 97%);',
                'color-active': 'linear-gradient(48deg, rgba(16,87,255,1) 4%, rgba(27,23,107,1) 97%);',
                'gradient': '#040a9c',
                'shadow': 'linear-gradient(90deg, rgba(4,10,156,0) 4%, rgba(4, 10, 156,0.7) 18%, rgba(4, 10, 156,0.7) 82%, rgba(4, 10, 156,0) 97%);',
              },
            question: {
                '1': {
                    questionText: 'Which of these is NOT a system within a car?',
                    answers: [
                        {answer: 'fuel', correct: false},
                        {answer: 'exhaust', correct: false},
                        {answer: 'yaw', correct: true},
                        {answer: 'transmission', correct: false}
                    ]
                },
                '2': {
                    questionText: 'Alignment is an aspect of the _____ system.',
                    answers: [
                        {answer: 'steering', correct: true},
                        {answer: 'fuel', correct: false},
                        {answer: 'exhaust', correct: false},
                        {answer: 'cooling', correct: false},
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
                    questionText: 'Most modern cars run on a ____-stroke gasoline engine.',
                    answers: [
                        {answer: 'four', correct: true},
                        {answer: 'two', correct: false},
                        {answer: 'eight', correct: false},
                        {answer: 'six', correct: false}
                    ]
                },
                '5': {
                    questionText: 'Where does the four-stroke cycle take place?',
                    answers: [
                        {answer: 'in the carburetor', correct: false},
                        {answer: 'in the starter motor', correct: false},
                        {answer: 'in the cylinder', correct: true},
                        {answer: 'in the radiator', correct: false}
                    ]
                },
                '6': {
                    questionText: 'Engine oil is rated by _____.',
                    answers: [
                        {answer: 'octane', correct: false},
                        {answer: 'volume', correct: false},
                        {answer: 'weight', correct: true},
                        {answer: 'price', correct: false}
                    ]
                },
                '7': {
                    questionText: 'Disc and "drum" are words that apply to ____.',
                    answers: [
                        {answer: 'seats', correct: false},
                        {answer: 'tires', correct: false},
                        {answer: 'bushings', correct: false},
                        {answer: 'brakes', correct: true}
                    ]
                },
                '8': {
                    questionText: 'A four-door car that seats four or more persons is usually called a ______.',
                    answers: [
                        {answer: 'either 2 or 3', correct: true},
                        {answer: 'saloon car', correct: false},
                        {answer: 'sedan', correct: false},
                        {answer: 'family car', correct: false}
                    ]
                },
                '9': {
                    questionText: 'Except in rare cases, a coupe has two ____.',
                    answers: [
                        {answer: 'doors', correct: false},
                        {answer: 'owners', correct: true}
                    ]
                },
                '10': {
                    questionText: 'Rack and pinion refers to ...',
                    answers: [
                        {answer: 'brakes', correct: false},
                        {answer: 'steering', correct: true},
                        {answer: 'the drivetrain', correct: false},
                        {answer: 'the cooling system', correct: false}
                    ]
                },
            }
        },
        Technologia: {
            assets: {
                'dragBG': techDrag,
                'scoreBG': techScore,
                'selectBG': techSelect,
                'startBG': techStart,
                'shadow': 'linear-gradient(90deg, rgba(54,32,84,0) 4%, rgba(54,32,84,0.6) 18%, rgba(54,32,84,0.6) 82%, rgba(54,32,84,0) 97%);',
                'quiz_play-btn': techPlay,
                'border': 'rgb(141, 39, 141)',
                'active-btn': 'linear-gradient(90deg, rgba(144,38,141,1) 21%, rgba(15,16,54,1) 68%);',
                'non_active-btn': 'linear-gradient(90deg, rgba(15,16,54,1) 21%, rgba(144,38,141,1) 68%);',
                'correct': 'linear-gradient(56deg, rgba(25,224,24,1) 21%, rgba(39,149,8,1) 79%)',
                'incorrect': 'linear-gradient(56deg, rgba(224,24,24,1) 21%, rgba(149,8,8,1) 79%)'
            },
            mobile: {
                'bg1': tech1Bg,
                'bg2': tech2Bg,
                'bg3': tech3Bg,
                'bg4': tech4Bg,
                'color': 'linear-gradient(48deg, rgba(43,24,69,1) 4%, rgba(82,46,123,1) 97%)',
                'color-active': 'linear-gradient(48deg, rgba(178,54,140,1) 4%, rgba(61,32,88,1) 97%);',
                'gradient': '#d9198f',
                'shadow': 'linear-gradient(90deg, rgba(217, 25, 143,0) 4%, rgba(217, 25, 143,0.7) 18%, rgba(217, 25, 143,0.7) 82%, rgba(217, 25, 143,0) 97%);',
              },
            question: {
                '1': {
                    questionText: 'About how many computer languages are in use?',
                    answers: [
                        {answer: '20', correct: false},
                        {answer: '5,000', correct: false},
                        {answer: '50', correct: false},
                        {answer: '2,000', correct: true}
                    ]
                },
                '2': {
                    questionText: 'Which of these is not an early computer?',
                    answers: [
                        {answer: 'NASA', correct: true},
                        {answer: 'UNIVAC', correct: false},
                        {answer: 'SAGE', correct: false},
                    ]
                },
                '3': {
                    questionText: 'Who founded Apple Computer?',
                    answers: [
                        {answer: 'Steve Jobs', correct: true},
                        {answer: 'Bill Gates', correct: false}
                    ]
                },
                '4': {
                    questionText: 'Which of these is not a peripheral, in computer terms?',
                    answers: [
                        {answer: 'motherboard', correct: true},
                        {answer: 'keyboard', correct: false},
                        {answer: 'monitor', correct: false},
                        {answer: 'mouse', correct: false}
                    ]
                },
                '5': {
                    questionText: 'Which of these is not one of the early “protocols,” or ways to use the Internet?',
                    answers: [
                        {answer: 'blogging', correct: true},
                        {answer: 'gopher', correct: false},
                        {answer: 'ftp', correct: false},
                        {answer: 'telnet', correct: false}
                    ]
                },
                '6': {
                    questionText: 'What does the Internet prefix WWW stand for?',
                    answers: [
                        {answer: 'Worldwide Weather', correct: false},
                        {answer: 'Wide Width Wickets', correct: false},
                        {answer: 'World Wide Web', correct: true},
                        {answer: 'Western Washington World', correct: false}
                    ]
                },
                '7': {
                    questionText: 'Which of these is not a kind of computer?',
                    answers: [
                        {answer: 'Apple', correct: false},
                        {answer: 'Dell', correct: false},
                        {answer: 'Lenovo', correct: false},
                        {answer: 'Lada', correct: true}
                    ]
                },
                '8': {
                    questionText: 'What device, released in 1993, gave rise to the term personal digital assistant?',
                    answers: [
                        {answer: 'Newton MessagePad', correct: true},
                        {answer: 'Microsoft Surface', correct: false},
                        {answer: 'Palm Pilot', correct: false},
                        {answer: 'iPhone', correct: false}
                    ]
                },
                '9': {
                    questionText: 'What is the name for a computer pointing device?',
                    answers: [
                        {answer: 'A monitor', correct: false},
                        {answer: 'A mouse', correct: true}
                    ]
                },
                '10': {
                    questionText: 'A network designed to allow communication within an organization is called...',
                    answers: [
                        {answer: 'a browser', correct: false},
                        {answer: 'an intranet', correct: true},
                        {answer: 'The internet', correct: false},
                        {answer: 'the World Wide Web', correct: false}
                    ]
                },
            }
        },
    }
]

export default data