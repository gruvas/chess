import ReactDOM from "react-dom"
import { useHttp } from '../hooks/http.hook'



function regular(line){
    let regex = /\d+/
    let regex_str = line.match(regex)
    return(regex_str)
}

let id_tour
let id_tour_missing

function definition_id(event){
    let idFlight = event.target.id;
    let regex_str = regular(idFlight).join()

    id_tour = document.querySelector(`#invisible_id_${regex_str}`).innerText
}

function definition_id_missing(event){
    let idFlight = event.target.id;
    let regex_str = regular(idFlight).join()

    id_tour_missing = document.querySelector(`#invisible_id_missing${regex_str}`).innerText
}


function addActive_burger_black(){
    const menu_icon_black = document.querySelector("#menu_icon_black")
    const menu_list_black = document.querySelector("#menu_list_black")

    menu_list_black.classList.toggle('active')
    menu_icon_black.classList.toggle('active')
}

let btn_select = 0
let btn_select_missing = 0

function round_generation(arr_tournament){
    let arr_round = []
    let tournament_counter = 0

    if(arr_tournament == 0){
        arr_round.push(
            <div style={{textAlign: 'center', 
            fontSize: '21px', marginTop: '21px'}}>
                Нет созданных турниров
            </div>
        )
    }

    for(let i = 0; i < arr_tournament.length; i++){
        if(arr_tournament[i].finished_tournament == false){
            if(arr_tournament[i].type_game == 'Один на один'){
                arr_round.push(
                    <div key={'render_container' + i}>
                        <div className="invisible_id" id={'invisible_id_' + i}>
                            {arr_tournament[i]._id}
                        </div>
                        <div className="continue_tour_space_between">
                            <div className="continue_tour">
                                <p className="continue_tour_number">{++tournament_counter}.</p>

                                <div className="continue_tour_main">
                                    <div className="continue_tour_name">
                                        <p>
                                            Название:
                                        </p>

                                        <p className="continue_tour_text continue_tour_name_text">
                                            {arr_tournament[i].name_tour}
                                        </p>
                                    </div>

                                    <div className="continue_tour_organizer">
                                        <p>
                                            Организатор:
                                        </p>

                                        <p className="continue_tour_text continue_tour_organizer_text">
                                            {arr_tournament[i].organizer}
                                        </p>
                                    </div>

                                    <div className="continue_tour_organizer">
                                        <p>
                                            Тип жеребьевки:
                                        </p>

                                        <p className="continue_tour_text continue_tour_organizer_text">
                                            {arr_tournament[i].type_tournament}
                                        </p>
                                    </div>

                                    <div className="continue_tour_date">
                                        <p>
                                            Даты проведения:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].date_beginning} - {arr_tournament[i].date_expiration}
                                        </p>
                                    </div>

                                    <div className="continue_tour_type">
                                        <p>
                                            Тип игры:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].type_game}
                                        </p>
                                    </div>

                                    <div className="continue_tour_players">
                                        <p>
                                            Количество игроков:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].participants_number}
                                        </p>
                                    </div>

                                    <div className="continue_tour_players">
                                        <p>
                                            Продолжительность игры:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].time_tour} {arr_tournament[i].time_type_tour} 
                                        </p>
                                    </div>


                                    <div className="continue_tour_tours">
                                        <p>
                                            Общее количество туров:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].tours_number}
                                        </p>
                                    </div>

                                    <div className="continue_tour_completed_tours">
                                        <p>
                                            Текущий тур:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].current_tour}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <section  className="continue_tour_bt">
                                <button className="continue_tour_bt_select btn_select" id={'btn_select' + btn_select}>
                                    Выбрать
                                </button>

                                <button className="continue_tour_bt_delete btn_delete" id={'btn_delete' + btn_select}>
                                    Удалить
                                </button>
                            </section>
                        </div>

                        <hr className="continue_tour_hr"></hr>
                    </div>
                )
                btn_select++
            }else if(arr_tournament[i].type_game == 'Команда на команду'){
                arr_round.push(
                    <div key={'render_container' + i}>
                        <div className="invisible_id" id={'invisible_id_' + i}>
                            {arr_tournament[i]._id}
                        </div>
                        <div className="continue_tour_space_between">
                            <div className="continue_tour">
                                <p className="continue_tour_number">{++tournament_counter}.</p>

                                <div className="continue_tour_main">
                                    <div className="continue_tour_name">
                                        <p>
                                            Название:
                                        </p>

                                        <p className="continue_tour_text continue_tour_name_text">
                                            {arr_tournament[i].name_tour}
                                        </p>
                                    </div>

                                    <div className="continue_tour_organizer">
                                        <p>
                                            Организатор:
                                        </p>

                                        <p className="continue_tour_text continue_tour_organizer_text">
                                            {arr_tournament[i].organizer}
                                        </p>
                                    </div>

                                    <div className="continue_tour_organizer">
                                        <p>
                                            Тип жеребьевки:
                                        </p>

                                        <p className="continue_tour_text continue_tour_organizer_text">
                                            {arr_tournament[i].type_tournament}
                                        </p>
                                    </div>

                                    <div className="continue_tour_date">
                                        <p>
                                            Даты проведения:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].date_beginning} - {arr_tournament[i].date_expiration}
                                        </p>
                                    </div>

                                    <div className="continue_tour_type">
                                        <p>
                                            Тип игры:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].type_game}
                                        </p>
                                    </div>

                                    <div className="continue_tour_players">
                                        <p>
                                            Количество команд:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].teams_number}
                                        </p>
                                    </div>

                                    <div className="continue_tour_players">
                                        <p>
                                            Количество игроков в команде:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].participants_number}
                                        </p>
                                    </div>

                                    <div className="continue_tour_players">
                                        <p>
                                            Продолжительность игры:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].time_tour} {arr_tournament[i].time_type_tour} 
                                        </p>
                                    </div>


                                    <div className="continue_tour_tours">
                                        <p>
                                            Общее количество туров:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].tours_number}
                                        </p>
                                    </div>

                                    <div className="continue_tour_completed_tours">
                                        <p>
                                            Текущий тур:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].current_tour}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <section  className="continue_tour_bt">
                                <button className="continue_tour_bt_select btn_select" id={'btn_select' + btn_select}>
                                    Выбрать
                                </button>

                                <button className="continue_tour_bt_delete btn_delete" id={'btn_delete' + btn_select}>
                                    Удалить
                                </button>
                            </section>
                        </div>

                        <hr className="continue_tour_hr"></hr>
                    </div>
                )
                btn_select++
            }else{
                arr_round.push(
                    <div key={'render_container' + i}>
                        <div className="invisible_id" id={'invisible_id_missing' + btn_select_missing}>
                            {arr_tournament[i]._id}
                        </div>
                        <div className="continue_tour_space_between">
                            <div className="continue_tour">
                                <p className="continue_tour_number">{++tournament_counter}.</p>
                                <div className="continue_tour_main">
                                    <div className="continue_tour_type">
                                        <p className="continue_tour_missing">
                                            Основная информация по  
                                        </p>
                                        <p className="continue_tour_missing">
                                            данному турниру отсутствует
                                        </p>
                                    </div>
                                    <div className="continue_tour_name">
                                        <p>
                                            Название: 
                                        </p>

                                        <p className="continue_tour_text continue_tour_name_text">
                                            Отсутствует
                                        </p>
                                    </div>

                                    <div className="continue_tour_type">
                                        <p>
                                            Тип жеребьевки:
                                        </p>

                                        <p className="continue_tour_text">
                                            {arr_tournament[i].type_tournament}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <section  className="continue_tour_bt continue_tour_bt_missing">
                                <button className="continue_tour_bt_select btn_select_missing" id={'btn_select_missing' + btn_select_missing}>
                                    Выбрать
                                </button>

                                <button className="continue_tour_bt_delete btn_delete_missing" id={'btn_delete_missing' + btn_select_missing}>
                                    Удалить
                                </button>
                            </section>
                        </div>

                        <hr className="continue_tour_hr"></hr>
                    </div>
                )
                btn_select_missing++
            }
        }
    }

    ReactDOM.render(arr_round, document.querySelector('.render_container'))
}



























let arr_tournament

export const ContinueTour = () => {
    const {request} = useHttp()


    const tournamentData = async (tournament_id) => {
        try {
            let intermediate_variable  = await request('/api/auth/tournamentData_many', 'POST', {tournament_id})
            arr_tournament = intermediate_variable.tournament_data
        } catch (e) {}
    }

    const tournamentDelete = async (tour_id) => {
        try {
            await request('/api/auth/delete_tour', 'POST', {tour_id})
        } catch (e) {}
    }
    const memberDelete = async (tour_id) => {
        try {
            await request('/api/auth/delete_memeber', 'POST', {tour_id})
        } catch (e) {}
    }

    const user_delete_link = async (user_id, tournament_id) => {
        try {
            await request('/api/auth/user_delete_link', 'POST', {user_id, tournament_id})
        } catch (e) {}
    }


    window.onload = async function() {
        const menu_icon_black = document.querySelector("#menu_icon_black")
        menu_icon_black.addEventListener('click', addActive_burger_black)

        let tournament_id = JSON.parse(localStorage.getItem('useData')).userId

        await tournamentData(tournament_id)
        console.log(arr_tournament)

        round_generation(arr_tournament)

        let btn_delete = document.querySelectorAll('.btn_delete').length
        let btn_delete_missing = document.querySelectorAll('.btn_delete_missing').length


        for(let i = 0; i < btn_delete; i++){
            document.querySelector(`#btn_delete${i}`).addEventListener('click', async function(event){
                await definition_id(event)

                document.querySelector('.popup').classList.add('active')
                document.querySelector('.popup_block_btn').classList.remove('hide')

                console.log(id_tour)
            })
        }

        const popup_btn_no = document.querySelector('#popup_btn_no')
        const popup_btn_yes = document.querySelector('#popup_btn_yes')

        popup_btn_no.addEventListener('click', function(){
            document.querySelector('.popup').classList.remove('active')
            document.querySelector('.popup_block_btn').classList.add('hide')
        }) 
        popup_btn_yes.addEventListener('click', async function(){
            await tournamentDelete(id_tour)
            await memberDelete(id_tour)
            await user_delete_link(tournament_id, id_tour)
            
            document.querySelector('.popup').classList.remove('active')
            document.querySelector('.popup_block_btn').classList.add('hide')

            window.location.reload()
        }) 



        for(let i = 0; i < btn_delete_missing; i++){
            document.querySelector(`#btn_delete_missing${i}`).addEventListener('click', async function(event){
                await definition_id_missing(event)

                document.querySelector('.popup').classList.add('active')
                document.querySelector('.popup_block_btn_missing').classList.remove('hide')
            })
        }
        

        const popup_btn_missing_no = document.querySelector('#popup_btn_missing_no')
        const popup = document.querySelector('.popup')
        const popup_btn_missing_yes = document.querySelector('#popup_btn_missing_yes')

        popup.addEventListener('click', function(){
            popup.classList.remove('active')
            document.querySelector('.popup_block_btn_missing').classList.add('hide')
        }) 
        popup_btn_missing_no.addEventListener('click', function(){
            popup.classList.remove('active')
            document.querySelector('.popup_block_btn_missing').classList.add('hide')
        }) 
        popup_btn_missing_yes.addEventListener('click', async function(){
            await tournamentDelete(id_tour_missing)
            await memberDelete(id_tour_missing)
            await user_delete_link(tournament_id, id_tour_missing)
            
            popup.classList.remove('active')
            document.querySelector('.popup_block_btn_missing').classList.add('hide')

            window.location.reload()
        }) 

        let btn_select = document.querySelectorAll('.btn_select').length

        for(let i = 0; i < btn_select; i++){
            document.querySelector(`#btn_select${i}`).addEventListener('click', async function(event){
                await definition_id(event)

                await localStorage.setItem('tournament_id', id_tour)

                window.location.href = 'main_swiss'
            })
        }

        let btn_select_missing = document.querySelectorAll('.btn_select_missing').length

        for(let i = 0; i < btn_select_missing; i++){
            console.log(i)
            console.log(document.querySelector(`#btn_select_missing${i}`))

            document.querySelector(`#btn_select_missing${i}`).addEventListener('click', async function(event){
                await definition_id_missing(event)

                await localStorage.setItem('tournament_id', id_tour_missing)

                window.location.href = 'swiss'
            })
        }
    }



    return(
        <div>
            <button className="burger menu_icon menu_icon_black burger_pers_area_minus" id="menu_icon_black">
                <span></span>
            </button>
            <nav className="burger menu_body">
                <ul className="menu_list" id="menu_list_black">
                    <p className="menu_list_nickname">nicname</p>
                    <a href="/personal_area">
                        <li>Вернуться в личный кабинет</li>
                    </a>
                </ul>
            </nav>



            <div className="main_container">
                <h1 className="main_title">Продолжить турнир</h1>

                <div className="render_container ">

                </div>

            </div>

            <div className="popup">
                <div className="popub_body">
                    <div className="popub_content">
                        <div className="popub_title">
                            Вы точно хотите удалить данный турнир?
                        </div>

                        <div className="popup_block_btn hide">
                            <button className="popup_btn popup_btn_yes" id="popup_btn_yes">
                                Да
                            </button>
                            <button className="popup_btn popup_btn_no" id="popup_btn_no">
                                Нет
                            </button>
                        </div>

                        <div className="popup_block_btn_missing hide">
                            <button className="popup_btn popup_btn_yes" id="popup_btn_missing_yes">
                                Да
                            </button>
                            <button className="popup_btn popup_btn_no" id="popup_btn_missing_no">
                                Нет
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}





















{/* <div className="continue_tour_space_between">
                    <div className="continue_tour">
                        <p className="continue_tour_number">1.</p>

                        <div className="continue_tour_main">
                            <div className="continue_tour_name">
                                <p>
                                    Название:
                                </p>

                                <p className="continue_tour_text continue_tour_name_text">
                                    test
                                </p>
                            </div>

                            <div className="continue_tour_organizer">
                                <p>
                                    Организатор:
                                </p>

                                <p className="continue_tour_text continue_tour_organizer_text">
                                    test
                                </p>
                            </div>

                            <div className="continue_tour_date">
                                <p>
                                    Дата:
                                </p>

                                <p className="continue_tour_text">
                                    23.01.2021
                                </p>
                            </div>

                            <div className="continue_tour_type">
                                <p>
                                    Тип:
                                </p>

                                <p className="continue_tour_text">
                                    команда на команду
                                </p>
                            </div>

                            <div className="continue_tour_players">
                                <p>
                                    Количество игроков в команде:
                                </p>

                                <p className="continue_tour_text">
                                    123
                                </p>
                            </div>

                            <div className="continue_tour_teams">
                                <p>
                                    Количество команд:
                                </p>

                                <p className="continue_tour_text">
                                    123
                                </p>
                            </div>

                            <div className="continue_tour_completed_tours">
                                <p>
                                    Количество завершенных туров:
                                </p>

                                <p className="continue_tour_text">
                                    123
                                </p>
                            </div>

                            <div className="continue_tour_tours">
                                <p>
                                    Общее количество туров:
                                </p>

                                <p className="continue_tour_text">
                                    123
                                </p>
                            </div>
                        </div>
                    </div>

                    <section  className="continue_tour_bt">
                        <button className="continue_tour_bt_select">
                            Выбрать
                        </button>

                        <button className="continue_tour_bt_delete">
                            Удалить
                        </button>
                    </section>
                </div>

                <hr className="continue_tour_hr"></hr> */}