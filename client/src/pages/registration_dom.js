import React, {useContext, useEffect, useState} from 'react'
import { useHttp } from '../hooks/http.hook'

import eye from "../img/eye.svg"

export const RegistretionDom = () => {
    // const {loading, error, request} = useHttp()
    // const [form, setForm] = useState({
    //     email: '', password: ''
    // })

    // const changeHandler = event => {
    //     setForm({...form, [event.target.name]: event.target.value})
    // }

    // const registerHandler = async() => {
    //     try{
    //         const data = await request('/api/auth/register', 'POST', {...form})
    //         console.log('Data', data)
    //     }catch(e){console.log(e)}
    // }

    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
      email: '', password: ''
    })

    const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value })
    }

    const warning_registreting = document.querySelector('.warning_registreting')

    const registerHandler = async () => {
      try {
        const data = await request('/api/auth/register', 'POST', {...form})
        console.log('Works')

        warning_registreting.style.display = 'block'
        warning_registreting.style.color = 'rgb(2, 182, 2)'
        warning_registreting.innerHTML = 'Регистрация завершена'

        setTimeout(function(){
            document.location.href = '/login'
        }, 1000)
      } catch (e) {
        const warning_registreting = document.querySelector('.warning_registreting')

        warning_registreting.style.display = 'block'
        warning_registreting.style.color = 'red'
        warning_registreting.innerHTML = 'Некорректное имя или пароль (может быть такой пользователь уже существует или пароль меньше 6 символов)'
      }
    }




    return(
        <div>
            <button className="burger menu_icon menu_icon_black" id="menu_icon_black">
                        <span></span>
            </button>
            <nav className="burger menu_body">
                <ul className="menu_list" id="menu_list_black">
                    <a href="login" className="previous_page_link">
                        <li>Вернуться на <br></br>
                        предыдущую страницу</li>
                    </a>
                </ul>
            </nav>

            <div className ="login_container">
                <p className ="login_title">Регистрация</p>
                <div className ="login_input_name">
                    <p className ="input_name_title login_input_name_title">Имя</p>
                    <input className ="input_txBox login_input_name_textBox" type="text"
                    id="email" name="email" onChange={changeHandler} maxLength={32}></input>
                </div>
                <div className ="login_input_password">
                    <p className ="input_name_title login_input_password_title">Пароль</p>
                    <div className ="password_bloc">
                        <input className ="input_txBox login_input_password_textBox" type="password"
                        id="password" name="password" onChange={changeHandler} maxLength={32}></input>
                        <button className ="password_bloc_btn">
                            <img className ="password_bloc_img" src={eye} alt=""></img>
                        </button>
                    </div>
                </div>
                <div className="complete_registration ">
                    <button className="complete_registration_btn"
                    onClick={registerHandler} disabled={loading}>
                        Завершить регистрацию
                    </button>
                </div>
                <h1 className="warning_registreting">
                    Некорректное имя или пароль
                </h1>
            </div>
        </div>
    )
}