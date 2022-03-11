import ReactDOM from "react-dom"
import {NavLink} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'

import user_photo from "../img/user.png"

const mongoose = require('mongoose')


function round_generation(arr_members){
    let arr_round = []
    let key_counter = 0
    console.log(arr_members)


    for(let i = 0; i < arr_members.length/2; i++){
        arr_round.push(
            <div key={key_counter++} className='mainSwiss_unit_players'>
                <div className='mainSwiss_board_players'>
                    <div className='mainSwiss_board_player'>
                        <img id="mainSwiss_user_photo_img_1"
                            className="mainSwiss_user_photo" src={user_photo} alt=''>
                        </img>
                        <p className='mainSwiss_board_player_field'>{arr_members[i].full_name}</p>
                    </div>


                    <div className='mainSwiss_board_player'>

                    </div>



                    <div className='mainSwiss_board_player'>
                        <img id="mainSwiss_user_photo_img_2"
                            className="mainSwiss_user_photo" src={user_photo} alt=''>
                        </img>
                        <p className='mainSwiss_board_player_field'>{arr_members[i+1].full_name}</p>
                    </div>
                </div>

                <div  className='mainSwiss_board_btn'>
                    <button className='mainSwiss_board_btn_victory'>
                        Победил
                    </button>
                    <button className='mainSwiss_board_btn_draw'>
                        Ничья
                    </button>
                    <button className='mainSwiss_board_btn_victory'>
                        Победил
                    </button>
                </div>
            </div>
        )
    }

    ReactDOM.render(arr_round, document.querySelector('.mainSwiss_board'))
    // console.log(document.querySelector('.mainSwiss_board'))
}


function addActive_burger_white(){
    const menu_list_white = document.querySelector("#menu_list_white")
    const burger_white = document.querySelector(".burger_white")

    menu_list_white.classList.toggle('active')
    burger_white.classList.toggle('active')
    console.log('white')
}

let member_data

export const MainSwiss = () => {
    const {request} = useHttp()

    const typeTournament = async (id) => {
        try {
            let member_data_intermediate = await request('/api/auth/memberData', 'POST', {id})
            member_data = member_data_intermediate.tournament_data
        } catch (e) {}
    }

    window.onload = async function() {
        let member_id = localStorage.getItem('tournament_id')

        await typeTournament(member_id)

        round_generation(member_data)
    }

    return(
        <div className="no_scrolling">
                <button className="burger menu_icon burger_white" onClick={addActive_burger_white} id="dadsa213">
                    <span></span>
                </button>
                <nav className="burger menu_body" id="">
                    <ul className="menu_list" id="menu_list_white">
                            <p>Швейцарская система</p>
                            <a href="personal_area" className="link_login">
                                <li>Личный кабинет</li>
                            </a>
                    </ul>
                </nav>


                <div className="mode_selection">
                    <div className="horizontal_menu_center horizontal_menu">
                        <p>Выберите режим</p>
                    </div>
                </div>

                <div className='main_container'>
                    <div className='mainSwiss_number'>
                        <h1 className='mainSwiss_number_text'>
                            Номер турнира
                        </h1>
                    </div>

                    <div className='mainSwiss_board'>
                        <div className='mainSwiss_board_players'>
                            <div className='mainSwiss_board_player'>
                                <img id="mainSwiss_user_photo_img_1"
                                    className="mainSwiss_user_photo" src={user_photo} alt=''>
                                </img>
                                <p className='mainSwiss_board_player_field'>Поле игрока 1</p>
                            </div>
                            <div className='mainSwiss_board_player'>
                                <img id="mainSwiss_user_photo_img_2"
                                    className="mainSwiss_user_photo" src={user_photo} alt=''>
                                </img>
                                <p className='mainSwiss_board_player_field'>Поле игрока 2</p>
                            </div>
                        </div>

                        <div  className='mainSwiss_board_btn'>
                            <button className='mainSwiss_board_btn_victory'>
                                Победил
                            </button>
                            <button className='mainSwiss_board_btn_draw'>
                                Ничья
                            </button>
                            <button className='mainSwiss_board_btn_victory'>
                                Победил
                            </button>
                        </div>
                    </div>

                    <div className='main_container'>
                        <button  className='mainSwiss_start_round' onClick={round_generation}>
                            Начать раунд
                        </button>
                    </div>
                </div>

        </div>
    )
}
