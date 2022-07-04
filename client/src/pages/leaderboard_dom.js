import ReactDOM from "react-dom"
import { useHttp } from '../hooks/http.hook'

import first_place from "../img/first_place.svg"
import second_place from "../img/second_place.svg"
import third_place from "../img/third_place.svg"

let member_data, tournament_data
let tournament_id = localStorage.getItem('tournament_id')





function addActive_burger_white(){
    const menu_list_white = document.querySelector("#menu_list_white")
    const burger_white = document.querySelector(".burger_white")

    menu_list_white.classList.toggle('active')
    burger_white.classList.toggle('active')
    console.log('white')
}

function wins_calculation(member){
    let counter = 0

    for(let i = 0; i < member.rivals.length; i++){
        if( member.rivals[i].result == 'win'){
            counter++
        }
    }

    return(counter)
}

function draws_calculation(member){
    let counter = 0

    for(let i = 0; i < member.rivals.length; i++){
        if( member.rivals[i].result == 'draw'){
            counter++
        }
    }

    return(counter)
}

function lesions_calculation(member){
    let counter = 0

    for(let i = 0; i < member.rivals.length; i++){
        if( member.rivals[i].result == 'loss'){
            counter++
        }
    }

    return(counter)
}

function score_calculation(win, draws){
    return(win + (draws * 0.5))
}

function sorting_points(){
    let intermediate

    for(let ii = 0; ii < member_data.length; ii++){
        for(let i = 0; i < member_data.length; i++){
            if(i + 1 != member_data.length){
                if(member_data[i].score < member_data[i+1].score){
                    intermediate = member_data[i]
                    member_data[i] = member_data[i+1]
                    member_data[i+1] = intermediate
                }
            }
        }
    }
}


function rendering_member(){
    let member_dom = []
    
    for(let i = 0; i < member_data.length; i++){
        let mamber_sore = 0
        let mamber_win, mamber_draws, mamber_lesions

        mamber_win = wins_calculation(member_data[i])
        mamber_draws = draws_calculation(member_data[i])
        mamber_lesions = lesions_calculation(member_data[i])
        mamber_sore = score_calculation(mamber_win, mamber_draws)



        member_dom.push(
            <div key={`tournament_score_element_${i}`}>
                <div className='tournament_score_element'>
                    <div className="tournament_score_block_img" key={`tournament_img_${i}`}>
                        <h1 className="tournament_score_img_replacement">
                            {`${i+1} место`}
                        </h1> 
                        <img className="tournament_score_img"  
                        key={`tournament_score_img_${i}`} alt="">
                        
                        </img>
                    </div>

                    <div className="tournament_score_element_middle">
                        <h1 className="tournament_score_element_header">
                            ФИО
                        </h1>

                        <p className='tournament_score_text'>{member_data[i].full_name}</p>
                        
                        <h1 className="tournament_score_element_header">
                            Возраст
                        </h1>
                        
                        <p className='tournament_score_text'>{member_data[i].age}</p>
                        
                        <h1 className="tournament_score_element_header">
                            Разряд
                        </h1>

                        <p className='tournament_score_text'>{member_data[i].rank}</p>
                    </div>

                    <div className="tournament_score_element_right">
                        <div>
                            <h1 className="tournament_score_element_header tournament_element_header_indent tournament_element_indent_width">
                                Побыды | Ничьи | Поражения
                            </h1>

                            <div className="tournament_score_element_wdl tournament_element_indent_width">
                                <p className='tournament_score_text'>{mamber_win}</p>
                                <p className='tournament_score_text'>{mamber_draws}</p>
                                <p className='tournament_score_text'>{mamber_lesions}</p>
                            </div>
                        </div>
                        
                        <h1 className="tournament_score_element_header tournament_element_indent_width">
                            Рейтинг
                        </h1>
                        
                        <p className='tournament_score_text tournament_score_text_last tournament_element_indent_width'>{mamber_sore}</p>
                    </div>
                </div>

                <hr className="main_container_continue_hr continue_tour_hr"></hr>
                {/* <hr className="main_container continue_tour_hr"></hr> */}
            </div>
        )
    }

    ReactDOM.render(member_dom, document.querySelector('.tournament_score'))
}

function render_tour_information(){
    let tournament = document.querySelectorAll('.tournament_data_title_field')
    
    tournament[0].textContent = `Название турнира: ${tournament_data.name_tour}`
    tournament[1].textContent = `Название организации: ${tournament_data.organizer}`
    tournament[2].textContent = `Даты проведения: ${tournament_data.date_beginning} - ${tournament_data.date_expiration}`
    tournament[3].textContent = `Тип игры: ${tournament_data.type_game}`
    tournament[4].textContent = `Система жеребьевки: ${tournament_data.type_tournament}`
}

function render_img(){
    let h1 = document.querySelectorAll('.tournament_score_img_replacement')
    let img = document.querySelectorAll('.tournament_score_img')

    for(let i = 0; i < 3; i++){
        h1[i].classList.add('hide')
    }

    img[0].src = first_place
    img[1].src = second_place
    img[2].src = third_place

    for(let i = 3; i < img.length; i++){
        img[i].classList.add('hide')
    }
}




export const Leaderboard = () => {
    const {request} = useHttp()

    const memberData = async (id) => {
        try {
            let intermediate = await request('/api/auth/memberData', 'POST', {id})
            member_data = intermediate.tournament_data
        } catch (e) {}
    }

    const tournamentData = async (id_tournament) => {
        try {
            let intermediate = await request('/api/auth/tournamentData', 'POST', {id_tournament})
            tournament_data = intermediate.tournament_data
        } catch (e) {}
    }



    
    window.onload = async function() {
        await memberData(tournament_id)
        await tournamentData(tournament_id)

        if(tournament_data.finished_tournament == true){
            document.querySelector('.link_login_main_swiss').classList.add('hide')
        }

        await sorting_points()
        await render_tour_information()
        await rendering_member()
        await render_img()
    }

    return(
        <div>
                <button className="burger menu_icon burger_white" onClick={addActive_burger_white}>
                    <span></span>
                </button>
                <nav className="burger menu_body" id="">
                    <ul className="menu_list" id="menu_list_white">
                            <p className="burger_type_game">Тип жеребьевки</p>
                            <a href="personal_area" className="link_login">
                                <li>Личный кабинет</li>
                            </a>
                            <a href="game_history" className="link_login">
                                <li>История турнира</li>
                            </a>
                            <a href="main_swiss" className="link_login link_login_main_swiss">
                                <li>Перейти обратно к матчу</li>
                            </a>
                    </ul>
                </nav>


                <div className="mode_selection">
                    <div className="horizontal_menu_center horizontal_menu">
                        <p className="tournament_score_title">Таблица лидеров</p>
                    </div>
                </div>

                <div className="tournament_data_title">
                    <p className="tournament_data_title_field">
                        Имя турнира
                    </p>
                    <p className="tournament_data_title_field">
                        Организатор 
                    </p>
                    <p className="tournament_data_title_field">
                        Даты проведения
                    </p>

                    <div  className="tournament_data_title_type">
                        <p className="tournament_data_title_field">
                            Тип игры
                        </p>
                        <p className="tournament_data_title_field">
                            Тип турнира
                        </p>
                    </div>
                </div>
                
                <div className="tournament_score">
                    
                </div>
        </div>
    )
}