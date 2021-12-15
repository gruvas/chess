import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'


export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
  
    const logoutHandler = event => {
      event.preventDefault()
      auth.logout()
      history.push('/login')
    }
  
    return (
        <div>

        </div>
      // <nav>
      //   <div>
      //     <span>Сокращение ссылок</span>
      //     <ul className="right hide-on-med-and-down">
      //       <li><NavLink to="/create">Создать</NavLink></li>
      //       <li><NavLink to="/links">Ссылки</NavLink></li>
      //       <li><a href="/login" onClick={logoutHandler}>Выйти</a></li>
      //     </ul>
      //   </div>
      // </nav>
    )
}