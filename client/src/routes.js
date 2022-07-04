import React from "react"
import ReactDOM from "react-dom"
import { Switch, Route, Redirect } from "react-router"
import {NavLink, useHistory} from 'react-router-dom'

// import {StartPage as StartDom} from './pages/start_dom'
// import {Start} from './pages/start'
import {StartPage} from './pages/StartPage'

import {MainSwiss} from './pages/main_swiss_dom'
import {Leaderboard} from './pages/leaderboard_dom'
import {GameHistory} from './pages/game_history'

import {Swiss} from './pages/swiss'
import {SwissDom} from './pages/swiss_dom'
import {swiss_r} from './pages/swiss_r'
import {generation_fillingParticipants, generation_complete_checkout,
   take_data_fields, array_team_ret} from './pages/swiss_r'

import { RegistretionDom } from "./pages/registration_dom"
import {LoginDom} from './pages/login_dom'
import {login} from './pages/login'

import { Navbar } from "./pages/Navbar"

import {PersonalArea} from './pages/personal_area_dom'
import {CompletedTour} from './pages/completed_tour_dom'
import {ContinueTour} from './pages/continue_tour_dom'


export const useRoutes = isAuthenticated => {
    if(localStorage.getItem('useData') != null){
        return(
            <Switch>
                <Route path="/personal_area">
                    <PersonalArea/>
                </Route>
                <Route path="/completed_tour">
                    <CompletedTour/>
                </Route>
                <Route path="/continue_tour">
                    <ContinueTour/>
                </Route>
                <Route path="/start">
                    <StartPage/>
                </Route>
                <Route path="/game_history">
                    <GameHistory/>
                </Route>
                <Route path="/leader_board">
                    <Leaderboard/>
                </Route>
                <Route path="/main_swiss">
                    <MainSwiss/>
                </Route>
                <Route path="/swiss">
                    <SwissPage/>
                </Route>
                <Route path="/navbar/:id">
                    <Navbar />
                </Route>
                <Redirect to="/personal_area" />
            </Switch>
        )
    }

    if(localStorage.getItem('useData') == null){return(
        <Switch>
            <Route path="/registration" exact>
                <RegistretionPage/>
            </Route>
            <Route path="/login" exact>
                <LoginPage/>
            </Route>
            <Redirect to="/login" />
        </Switch>
    )}
}

const SwissPage =  () => {

    setTimeout(function(){
        Swiss()
        swiss_r()

        const basic_information_proceed = document.querySelector('.basic_information_proceed')

        basic_information_proceed.addEventListener('click', function(){
            ReactDOM.render(generation_fillingParticipants(), document.querySelector('.fillingParticipants_user_container'))
        })

        const fillingParticipants_btn_proceed = document.querySelector('#fillingParticipants_btn_proceed')


        const link_login = document.querySelectorAll(".link_login")
        const previous_page_link = document.querySelectorAll(".previous_page_link")

        link_login[0].addEventListener('click', function(){
            localStorage.setItem('current_screen', "login")
            localStorage.setItem('previous_screen', "swiss")
        })
        link_login[1].addEventListener('click', function(){
            localStorage.setItem('current_screen', "login")
            localStorage.setItem('previous_screen', "swiss")
        })

        previous_page_link[0].addEventListener('click', function(){
            // let previous_screen = localStorage.getItem('previous_screen')

            localStorage.setItem('current_screen', "start")
            localStorage.setItem('previous_screen', "swiss")
        })
        previous_page_link[1].addEventListener('click', function(){
            localStorage.setItem('current_screen', "start")
            localStorage.setItem('previous_screen', "swiss")
        })
    }, 1)

    return(
        <div>
            <SwissDom/>
        </div>
    )
}

const LoginPage = () => {
    setTimeout(function(){
            document.querySelector('.login_btn_registration').addEventListener('click', function(){
            localStorage.setItem('current_screen', "registretion")
            localStorage.setItem('previous_screen', "login")
        })

        login()

        const burger = document.querySelector(".menu_icon")
    }, 1)

    return(
        <div>
            <LoginDom/>
        </div>
    )
}

const RegistretionPage = () => {
    setTimeout(function(){
        login()

        const burger = document.querySelector(".menu_icon")

        burger.addEventListener('click', addActive_burger_black)

        function addActive_burger_black(){
            const menu_icon_black = document.querySelector("#menu_icon_black")
            const menu_list_black = document.querySelector("#menu_list_black")

            menu_list_black.classList.toggle('active')
            menu_icon_black.classList.toggle('active')
        }

        const previous_page_link = document.querySelector(".previous_page_link")

        previous_page_link.addEventListener('click', function(){
            localStorage.setItem('current_screen', "start")
            localStorage.setItem('previous_screen', "registration")
        })
    }, 1)

    return(
        <div>
            <RegistretionDom/>
        </div>
    )
}