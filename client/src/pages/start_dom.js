import {NavLink} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'

const mongoose = require('mongoose')

export const StartPage = () => {
    const {request} = useHttp()
    let id_tournament = localStorage.getItem('tournament_id')

    let tournament = {id: mongoose.Types.ObjectId(id_tournament), type_tournament: ''}

    async function typeException(){
        tournament.type_tournament = 'Выбывание'

        await typeTournament()

        document.location.href = "/exception"
    }
    async function typeCircle(){
        tournament.type_tournament = 'Круговая'

        await typeTournament()

        document.location.href = "/circle"
    }
    async function typeSwiss(){
        tournament.type_tournament = 'Швейцарская'

        await typeTournament()

        document.location.href = "/swiss"
    }


    const typeTournament = async () => {
        try {
            const searchtest = await request('/api/auth/type_tournament', 'POST', {...tournament})
            console.log('Adding a tournament type ')
        } catch (e) {}
    }

    // async function sendingRequest(){
    //     await definitionType()
    //     typeTournament()
    // }

    return(
        <div className="no_scrolling">
            <div className="container">
                <button className="burger menu_icon burger_white">
                    <span className="test"></span>
                </button>
                <nav className="burger menu_body">
                    <ul className="menu_list" id="menu_list_white">
                        <a href="personal_area" className="previous_page_link">
                            <li>Перейти в <br></br>
                            личный кабинет</li>
                        </a>
                    </ul>
                </nav>

                <div className="sidebar">
                    <div style={{backgroundColor: "#000"}}>
                    <h1 className="startH startH_exception">Игра на выбывание</h1>
                            <button className="startBt startBt_exception" onClick={typeException}>
                                Начать
                            </button>
                    </div>
                    <div style={{backgroundColor: "#0B1922"}}>
                    <h1 className="startH startH_circle">Жеребьевка по<br></br> круговой системе</h1>
                            <button className="startBt startBt_circle" onClick={typeCircle}>
                                Начать
                            </button>
                    </div>
                    <div style={{backgroundColor: "#FFCB7B"}}>
                    <h1 className="startH startH_swiss">Жеребьевка по<br></br> швейцарской системе</h1>
                            <button className="startBt startBt_swiss" onClick={typeSwiss}>
                                Начать
                            </button>
                    </div>
                </div>
                <div className="main-slide">
                    <div className="start_img_2"></div>
                    <div className="start_img_1"></div>
                    <div className="start_img_3"></div>
                </div>
                <div className="controls">
                    <button className="down-button">
                        <div className="down-button_arrow">
                            <i className="fas fa-arrow-down"></i>
                        </div>
                    </button>
                    <button className="up-button">
                        <div className="up-button_arrow">
                            <i className="fas fa-arrow-down"></i>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
