import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'

import {AuthContext} from '../context/AuthContext'

import { useHttp } from '../hooks/http.hook'

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
    const {request} = useHttp()
    
    let useData_id = JSON.parse(localStorage.getItem('useData')).userId
    const form_dataId = [
        {useData_id: useData_id}
    ]

    let arr_test = ([
        {full_name: 'Test1', age: 28},
        {full_name: 'Test2', age: 31}
    ])


    const test_addMember = async () => {
        try {
            const searchtest = await request('/api/auth/test_addMember', 'POST', {...arr_test})
            console.log('Add arr')
        } catch (e) {}
    }

    const form_31 = {owner: useData_id}

    const createTour_query = async () => {
        try {
            const searchtest = await request('/api/auth/create_tour', 'POST', {...form_31})
            console.log('Create tour')

            localStorage.setItem('tournament_id', searchtest.id)
        } catch (e) {}
    }

    async function createTour(){
        await createTour_query()

        document.location.href = "start";
    }


    setTimeout(function(){
        const menu_icon_black = document.querySelector("#menu_icon_black")

        menu_icon_black.addEventListener('click', addActive_burger_black)

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
            <button className="burger menu_icon menu_icon_black burger_pers_area_plus" id="menu_icon_black">
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

            <div className="main_container">
                <h1 className="main_title">Личный кабинет</h1>

                <div className="personal_area_main">
                    <div onClick={createTour} className="personal_area_block" id='create_newTour'>
                        <img className="personal_area_img" src={completed_tour} alt=""></img>
                        <p>Создать новый турнир</p>
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
