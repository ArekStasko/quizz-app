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




const dataAssets =  [
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
        },
    }
]

export default dataAssets