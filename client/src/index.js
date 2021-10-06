import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {StartPage} from './pages/start_dom'
import {Start} from './pages/start'

import {Swiss} from './pages/swiss'
import {SwissDom} from './pages/swiss_dom'
import {swiss_r} from './pages/swiss_r'
import {generation_fillingParticipants, generation_complete_checkout,
   take_data_fields, array_team_ret} from './pages/swiss_r'

import {LoginDom} from './pages/login_dom'
import {login} from './pages/login'

import {RegistretionDom} from './pages/registration_dom'

current_screen()

function current_screen(){
  if(localStorage.getItem('current_screen') == undefined){
    localStorage.setItem('current_screen', "start")
    current_screen()
    current_screen()
  }

  if(localStorage.getItem('previous_screen') == undefined){
    localStorage.setItem('previous_screen', null)
    current_screen()
  }

  if(localStorage.getItem('current_screen') == "start"){
    ReactDOM.render(
      <div>
        <StartPage />
      </div>,
      document.getElementById('root')
    )
  
    Start()
  
    document.querySelector('.startBt_swiss').addEventListener('click', function(){
      localStorage.setItem('current_screen', "swiss")
      localStorage.setItem('previous_screen', "start")
      current_screen()
    })
  }
  
  if(localStorage.getItem('current_screen') == "swiss"){
    ReactDOM.render(
      <div>
        <SwissDom />
      </div>,
      document.getElementById('root')
    )
  
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
      current_screen()
      window.location.reload()
    })
    link_login[1].addEventListener('click', function(){
      localStorage.setItem('current_screen', "login")
      localStorage.setItem('previous_screen', "swiss")
      current_screen()
      window.location.reload()
    })

    previous_page_link[0].addEventListener('click', function(){
      // let previous_screen = localStorage.getItem('previous_screen')

      localStorage.setItem('current_screen', "start")
      localStorage.setItem('previous_screen', "swiss")
      current_screen()
    })
    previous_page_link[1].addEventListener('click', function(){
      localStorage.setItem('current_screen', "start")
      localStorage.setItem('previous_screen', "swiss")
      current_screen()
    })
  }

  if(localStorage.getItem('current_screen') == "login"){
    ReactDOM.render(
      <div>
        <LoginDom />
      </div>,
      document.getElementById('root')
    )

    document.querySelector('.login_btn_registration').addEventListener('click', function(){
      localStorage.setItem('current_screen', "registretion")
      localStorage.setItem('previous_screen', "login")
      current_screen()
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
        current_screen()
    })
  }

  if(localStorage.getItem('current_screen') == "registretion"){
    ReactDOM.render(
      <div>
        <RegistretionDom />
      </div>,
      document.getElementById('root')
    )

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
        current_screen()
    })
  }
}





// reportWebVitals();



















