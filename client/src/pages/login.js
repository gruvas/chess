import eye from '../img/eye.svg'
import close_eye from '../img/close-eye.svg'
import {current_screen} from '../index'

export function login(){
    const password_btn = document.querySelector(".password_bloc_btn")
    const login_input_password = document.querySelector(".login_input_password_textBox")
    const password_bloc_img = document.querySelector(".password_bloc_img")

    let counter_click = 0

    password_btn.addEventListener('click', function(){
        if(counter_click == 0){
            counter_click = 1
            login_input_password.type = "text"
            password_bloc_img.src = close_eye
        }else if(counter_click == 1){
            counter_click = 0
            login_input_password.type = "password"
            password_bloc_img.src = eye
        }
    })

}



