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
    // const [form, setForm] = useState({
    //     full_name: 'Test_inquiry', age: 25
    // })
// console.log(localStorage.getItem('current_screen'))
let useData_id = JSON.parse(localStorage.getItem('useData')).userId
const form_dataId = [
    {useData_id: useData_id}
]
// console.log(useData_id.userId)
// console.log(useData_id)
// console.log(form_dataId, " ", useData_id)

    const form1 = {full_name: 'Test_inquiry', age: 21}
    const form_id = {full_name: 'Test_inquiry', age: 21, owner: useData_id}
        // {full_name: 'Test_inquiry', age: 21, useData_id: useData_id}
    

    const form2 = {full_name: 'Test_inquiry', age: 21}

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/adding_member', 'POST', {...form_id})
            console.log('Works')
        } catch (e) {}
    }

    const searchHandler = async () => {
        try {
            const searchtest = await request('/api/auth/search_member', 'POST', {...form2})
            console.log('Search')
        } catch (e) {}
    }

    const deleteHandler = async () => {
        try {
            const searchtest = await request('/api/auth/delete_member', 'POST', {...form2})
            console.log('Delete')
        } catch (e) {}
    }

    const updateHandler = async () => {
        try {
            const searchtest = await request('/api/auth/update_member', 'POST', {...form2})
            console.log('Update')
        } catch (e) {}
    }


    const inputHandler = async () => {
        let full_name, rank
        const age = Number(document.querySelector('#age_in').value)

        if(Number(document.querySelector('#full_name_in').value) == 0){
            full_name = " "
        }else{
            full_name = document.querySelector('#full_name_in').value
        }

        if(Number(document.querySelector('#rank_in').value) == 0){
            rank = " "
        }else{
            rank = document.querySelector('#rank_in').value
        }

        const data_input = {full_name, age, rank, owner: useData_id}

        console.log(full_name, age, rank)
        console.log(typeof full_name, typeof age, typeof rank)

        try {
            const searchtest = await request('/api/auth/adding_member_input', 'POST', {...data_input})
            console.log('Add member input')
        } catch (e) {}
    }

    // let arr_test = [
    //     {full_name: 'Test1', age: 28, owner: id_tournament},
    //     {full_name: 'Test2', age: 28, owner: id_tournament}
    // ]
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

                <div style={{marginTop: '20px', display: 'flex'}}>
                    <h1 style={{fontSize: '14px', marginLeft: '10px'}}>full_name: </h1>
                    <input id='full_name_in' defaultValue={'test_name'} style={{marginLeft: '10px'}}></input>

                    <h1 style={{fontSize: '14px', marginLeft: '10px'}}>age: </h1>
                    <input id='age_in' defaultValue={23} style={{marginLeft: '10px'}}></input>

                    <h1 style={{fontSize: '14px', marginLeft: '10px'}}>rank: </h1>
                    <input id='rank_in' defaultValue='rank' style={{marginLeft: '10px'}}></input>
                </div>

                <div style={{display: 'flex', width: '100px', position: 'relative', margin: '0 auto', marginTop: '20px', float: 'left'}}>
                    <button style={{backgroundColor: '#28323b', marginLeft: '15px',
                        width: '135px', height: '35px', borderRadius: '15px'
                    }}>
                        <h1 style={{color: '#fff', fontSize: '16px', marginTop: '-8px'}} onClick={registerHandler}>
                            Добавление
                        </h1>
                    </button>

                    <button style={{backgroundColor: '#d1914b', marginLeft: '15px',
                        width: '135px', height: '35px', borderRadius: '15px'
                    }}>
                        <h1 style={{color: '#fff', fontSize: '16px', marginTop: '-8px'}} onClick={updateHandler}>
                            Обновление
                        </h1>
                    </button>

                    <button style={{backgroundColor: '#9b2d30', marginLeft: '15px',
                        width: '135px', height: '35px', borderRadius: '15px'
                    }}>
                        <h1 style={{color: '#fff', fontSize: '16px', marginTop: '-8px'}} onClick={deleteHandler}>
                            Удаление
                        </h1>
                    </button>

                    <button style={{backgroundColor: '#fff', marginLeft: '15px',
                        width: '135px', height: '35px', border: '1px solid', borderRadius: '15px'
                    }}>
                        <h1 style={{color: '#000', fontSize: '16px', marginTop: '-8px'}} onClick={searchHandler}>
                            Поиск
                        </h1>
                    </button>


                    <button style={{backgroundColor: '#33495a', marginLeft: '15px',
                        width: '135px', height: '35px', border: '1px solid', borderRadius: '15px'
                    }}>
                        <h1 style={{color: '#fff', fontSize: '16px', marginTop: '-8px'}} onClick={test_addMember}>
                            Test
                        </h1>
                    </button>
                </div>
            </div>
        </div>
    )
}


