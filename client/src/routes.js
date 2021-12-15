import React from "react"
import ReactDOM from "react-dom"
import { Switch, Route, Redirect } from "react-router"
import {NavLink, useHistory} from 'react-router-dom'

// import {StartPage as StartDom} from './pages/start_dom'
// import {Start} from './pages/start'
import {StartPage} from './pages/StartPage'

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



// const StartPage = () => {
//     setTimeout(function(){
//         Start()

//         console.log(localStorage.getItem('useData').userId)
//         const burger = document.querySelector(".menu_icon")

//         function addActive_burger_black(event){
//             event.stopPropagation()
//             const menu_icon = document.querySelector(".menu_icon")
//             const menu_list = document.querySelector("#menu_list_white")

//             menu_list.classList.toggle('active')
//             menu_list.classList.toggle('active')
//             console.log('eq')
//         }
//         burger.addEventListener('click', addActive_burger_black)
//         // burger.addEventListener('click', function(){
//         //     console.log('da')
//         // })

//     }, 1)

//     return(
//         <div>
//             <StartDom/>
//         </div>
//     )
// }

const SwissPage = () => {
    setTimeout(function(){
        Swiss()
        swiss_r()

        const basic_information_proceed = document.querySelector('.basic_information_proceed')

        basic_information_proceed.addEventListener('click', function(){
            ReactDOM.render(generation_fillingParticipants(), document.querySelector('.fillingParticipants_user_container'))
        }
        )

        const fillingParticipants_btn_proceed = document.querySelector('#fillingParticipants_btn_proceed')

        fillingParticipants_btn_proceed.addEventListener('click', function(){
                let number_team = 4
                let number_people_team = 4
                let array_user_fields = []
                let we = generation_complete_checkout()
                const copyOfUser = Object.assign({}, we);
                let element_line
                let intermediate_variable

                ReactDOM.render(array_team_ret(), document.querySelector('.completion_registration_participants'))

                for(let ii = 0; ii < number_team; ii++){
                for(let i = 0; i < number_people_team; i++){
                    array_user_fields.push(we[i])
                }
                element_line = "element_line_" + ii
                intermediate_variable = '#' + element_line

                ReactDOM.render(array_user_fields, document.querySelector(`${intermediate_variable}`))
                array_user_fields = []
                }
                take_data_fields()
            }
        )

        const link_login = document.querySelectorAll(".link_login")
        const previous_page_link = document.querySelectorAll(".previous_page_link")

        link_login[0].addEventListener('click', function(){
        localStorage.setItem('current_screen', "login")
        localStorage.setItem('previous_screen', "swiss")
        window.location.reload()
        })
        link_login[1].addEventListener('click', function(){
        localStorage.setItem('current_screen', "login")
        localStorage.setItem('previous_screen', "swiss")
        window.location.reload()
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

// const PersonalArea_Dom = () => {
//     setTimeout(function(){
//         function addActive_burger_black(){
//             const menu_icon_black = document.querySelector("#menu_icon_black")
//             const menu_list_black = document.querySelector("#menu_list_black")

//             // menu_list_black.classList.toggle('active')
//             // menu_icon_black.classList.toggle('active')

//             menu_list_black.addEventListener('click', function(){
//                 console.log('da')
//             })
//             menu_icon_black.classList.addEventListener('click', function(){
//                 console.log('da')
//             })
//         }
//     }, 1)

//     return(
//         <div>
//             <PersonalArea/>
//         </div>
//     )
// }