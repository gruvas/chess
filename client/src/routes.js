import React from "react"
import ReactDOM from "react-dom"
import { Switch, Route, Redirect } from "react-router"

import {StartPage as StartDom} from './pages/start_dom'
import {Start} from './pages/start'

import {Swiss} from './pages/swiss'
import {SwissDom} from './pages/swiss_dom'
import {swiss_r} from './pages/swiss_r'
import {generation_fillingParticipants, generation_complete_checkout,
   take_data_fields, array_team_ret} from './pages/swiss_r'

import { RegistretionDom } from "./pages/registration_dom"
import {LoginDom} from './pages/login_dom'
import {login} from './pages/login'



export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Switch>
                <Route path="/links" exact>
                    <StartPage/>
                </Route>
                <Route path="/swiss" exact>
                    <SwissPage/>
                </Route>
                <Route path="/login" exact>
                    <LoginPage/>
                </Route>
                <Route path="/registration" exact>
                    <RegistretionPage/>
                </Route>
                <Redirect to="/start" />
            </Switch>
        )
    }

    return(
        <Switch>
            <Route path="/" exact>
                {/* <StartPage/> */}
                {/* <RegistretionPage/> */}
                <SwissPage/>
            </Route>

            <Redirect to="/" />
        </Switch>
    )
}






const StartPage = () => {
    setTimeout(function(){Start()}, 1)
    // Start()

    return(
        <div>
            <StartDom/>
        </div>
    )
}

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
    // ReactDOM.render(
    //     <div>
    //       <LoginDom />
    //     </div>,
    //     document.getElementById('root')
    //   )
  

    setTimeout(function(){
        document.querySelector('.login_btn_registration').addEventListener('click', function(){
            localStorage.setItem('current_screen', "registretion")
            localStorage.setItem('previous_screen', "login")
        })

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
            localStorage.setItem('previous_screen', "login")
        })
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