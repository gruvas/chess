import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

import completed_tour from "../img/completed_tour.jpg"
import continue_tour from "../img/continue_tour.jpg"
import new_tour from "../img/new_tour.jpg"

function addActive_burger_black(){
    const menu_icon_black = document.querySelector("#menu_icon_black")
    const menu_list_black = document.querySelector("#menu_list_black")

    menu_list_black.classList.toggle('active')
    menu_icon_black.classList.toggle('active')
}

export const PersonalArea = () => {
    setTimeout(function(){
        const menu_icon_black = document.querySelector("#menu_icon_black")

        menu_icon_black.addEventListener('click', addActive_burger_black)

        const create_newTour = document.querySelector('#create_newTour').addEventListener('click', function(){
            document.location.href = "start";
        })
        const continue_tour = document.querySelector('#continue_tour').addEventListener('click', function(){
            document.location.href = "continue_tour";
        })
        const completed_tour  = document.querySelector('#completed_tour').addEventListener('click', function(){
            document.location.href = "completed_tour";
        })
    }, 1)


    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
      event.preventDefault()
      auth.logout()
      history.push('/login')
    }

    return(
        <div className='no_scrolling'>
            <button className="burger menu_icon menu_icon_black" id="menu_icon_black">
                <span></span>
            </button>
            <nav className="burger menu_body">
                <ul className="menu_list" id="menu_list_black">
                    <p className="menu_list_nickname">nicname</p>
                    <a href="/login" onClick={logoutHandler}>
                        <li>Выйти из учетной записи</li>
                    </a>
                </ul>
            </nav>

            <div className="personal_area_container">
                <h1 className="personal_area_title">Личный кабинет</h1>

                <div className="personal_area_main">
                    <div className="personal_area_block" id='create_newTour'>
                        <img className="personal_area_img" src={completed_tour} alt=""></img>
                        <p>Создать новый тур</p>
                    </div>
                    <div className="personal_area_block" id='continue_tour'>
                        <img className="personal_area_img" src={continue_tour} alt=""></img>
                        <p>Продолжить турнир</p>
                    </div>
                    <div className="personal_area_block" id='completed_tour'>
                        <img className="personal_area_img" src={new_tour} alt=""></img>
                        <p>Посмотреть завершенные турниры</p>
                    </div>
                </div>
            </div>
        </div>
    )
}