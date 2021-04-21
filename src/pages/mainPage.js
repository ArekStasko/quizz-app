import React from 'react'
import data from '../data/data'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Icon = styled.div`
background-image: url(${({item}) => data[0].mainAssets[item]});
background-repeat: no-repeat;
background-size: contain;
width: 50px;
height: 50px;
`


const MainPage = () => {

    return(
        <div className='main_page-container'>
<div className='main_page-wrapper'>
<div className='main_quiz-logo'></div>

<div className='main_quiz-header'>
    <p>10 PYTAŃ/{data[0].categories.length} KATEGORIE</p>
</div>

            <div className='main_categories-container'>
                {
                    data[0].categories.map(item => {
        
                        const param = '/quiz' + `/${item}`

                        return(
                            <Link key={item} to={param} className='main_category-wrapper'>
                                <Icon item={item}></Icon>
                                <div>
                                <div className='category-line'></div>
                                <p>{item}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default MainPage