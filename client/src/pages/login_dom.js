import React, {useContext, useEffect, useState} from 'react'
import { ReactDOM } from 'react-dom'
import { useHttp } from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'

import eye from '../img/eye.svg'

export const LoginDom = () => {
    const auth = useContext(AuthContext)
    const {loading, request,} = useHttp()
    const [form, setForm] = useState({
      email: '', password: ''
    })

    const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)

            window.location.reload();
        } catch (e) {
            const warning_login = document.querySelector('.warning_login')

            warning_login.style.display = 'block'
            warning_login.style.color = 'red'
        }
      }

    setTimeout(function(){
        const registration_btn = document.querySelector(".login_btn_registration")
        registration_btn.addEventListener('click', function(){
            document.location.href = '/registration'
        })
    }, 1)

    return(
        <div>
            <div className="login_container">
                <p className="login_title">Вход</p>
                <div className="login_input_name">
                    <p className="input_name_title login_input_name_title">Имя</p>
                    <input className="input_txBox login_input_name_textBox" type="text"
                    id="email" name="email" onChange={changeHandler}></input>
                </div>
                <div className="login_input_password">
                    <p className="input_name_title login_input_password_title">Пароль</p>
                    <div className="password_bloc">
                        <input className="input_txBox login_input_password_textBox" type="password"
                        id="password" name="password" onChange={changeHandler}></input>
                        <button className="password_bloc_btn">
                            <img className="password_bloc_img" src={eye} alt=""></img>
                        </button>
                    </div>
                </div>
                <div className="login_btn">
                    <button className="login_btn_registration main_btn">
                        Регистрация
                    </button>
                    <button className="login_btn_entry main_btn"
                    onClick={loginHandler} disabled={loading}>
                        Вход
                    </button>
                </div>
                <h1 className='warning_login'>
                    Неверно введено имя или пароль
                </h1>
            </div>
        </div>
    )
}