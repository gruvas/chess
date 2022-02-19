import ReactDOM from "react-dom"
import dropDawn_btn from "../img/arrow_down.svg"
import { useHttp } from '../hooks/http.hook'

import user_photo from "../img/user.png"

const mongoose = require('mongoose')

function personal_area_link(){
    document.location.href = "/personal_area"
}

export const SwissDom = () => {
    const {request} = useHttp()

    let test
    let id_tournament = localStorage.getItem('tournament_id')

    let tournament = {id: mongoose.Types.ObjectId(id_tournament), type_game: ''}

    const typeGame = async () => {
        test = document.querySelector('.slide.active').id

        if(test == 'slide_1'){
            test = 'Один на один'
            localStorage.setItem('gameType', test)
        }

        if(test == 'slide_2'){
            test = 'Команда на команду'
            localStorage.setItem('gameType', test)
        }

        tournament.type_game = test

        try {
            const addGame_type = await request('/api/auth/type_game', 'POST', {...tournament})
            console.log('Adding a game type ')
        } catch (e) {}
    }

    const mainCharacteristics = async () => {
        // let tournament = {id: mongoose.Types.ObjectId(id_tournament), teams_number: Number(1)}
        let tournament12 = {id: mongoose.Types.ObjectId(id_tournament), teams_number: -1}

        let slide = document.querySelector('.slide.active').id

        tournament12.name_tour  = document.querySelector('#basic_information_tournament_name').value
        tournament12.organizer  = document.querySelector('#basic_information_organizer').value
        tournament12.time_tour  = Number(document.querySelector('#basic_information_time_amount').value)
        tournament12.time_type_tour  = document.querySelector('#basic_information_time_type').textContent
        tournament12.tours_number  = Number(document.querySelector('#basic_information_tours_amount').value)
        tournament12.date_expiration  = document.querySelector('#inf_dataExpiration_input').value
        tournament12.date_beginning  = document.querySelector('#inf_dataBeginning_input').value

        // Один на один
        if(slide == 'slide_1'){
            tournament12.participants_number =  Number(document.querySelector('#basic_information_participants_amount').value)

            try {
                const add_mainCharact = await request('/api/auth/main_characteristics', 'POST', {...tournament12})
                console.log('Adding main characteristics')
            } catch (e) {}
        }

        // Команда на команду
        if(slide == 'slide_2'){
            tournament12.participants_number  = Number(document.querySelector('#basic_information_participants_amount').value)
            tournament12.teams_number  = Number(document.querySelector('#basic_information_teamsAmount_input').value)

            try {
                const add_mainCharact = await request('/api/auth/main_characteristics', 'POST', {...tournament12})
                console.log('Adding main characteristics')
            } catch (e) {}
        }
    }
    let new_obj
    const addMember = async () => {
        let slide_test = document.querySelector('.slide.active').id

        let number_team = Number(document.querySelector('#basic_information_teamsAmount_input').value)
        let number_people_team = Number(document.querySelector('#basic_information_participants_amount').value)

        let team_num = 0
        let counter_people = 0


        if(slide_test == 'slide_1'){
            let member_input_name =  document.querySelectorAll('.input_txBox_title')
            let member_input_age =  document.querySelectorAll('.input_txBox_digit')
            let member_input_rank =  document.querySelectorAll('.input_txBox_discharge')

            let new_arr = []
            let length_member = member_input_name.length

            for(let i = 0; i < length_member; i++){
                new_arr.push({
                    full_name: member_input_name[i].value,
                    age: member_input_age[i].value,
                    rank: member_input_rank[i].value,
                    player_number: i+1,
                    owner: id_tournament
                })
            }

            new_obj = Object.assign({}, new_arr)
        }

        if(slide_test == 'slide_2'){
            let member_input_name =  document.querySelectorAll('.input_txBox_title')
            let member_input_age =  document.querySelectorAll('.input_txBox_digit')
            let member_input_rank =  document.querySelectorAll('.input_txBox_discharge')

            let new_arr = []

            for(let i = 0; i < number_team; i++){
                team_num++
                for(let i = 0; i < number_people_team; i++){
                    new_arr.push({
                        full_name: member_input_name[counter_people].value,
                        age: member_input_age[counter_people].value,
                        rank: member_input_rank[counter_people].value,
                        team: team_num,
                        player_board: i+1,
                        owner: id_tournament
                    })
                    counter_people++
                }
            }

            new_obj = Object.assign({}, new_arr)
        }

        let tournament_data

        try {
            const addGame_type = await request('/api/auth/addMember', 'POST', {...new_obj})
            tournament_data = await request('/api/auth/tournamentData', 'POST', {...tournament})
        } catch (e) {}



        let tour_name = tournament_data.tournament_data.name_tour
        let tour_org = tournament_data.tournament_data.organizer

        let tour_time = tournament_data.tournament_data.date_beginning +
        " - " + tournament_data.tournament_data.date_expiration

        let people_team = tournament_data.tournament_data.participants_number

        let tours_number = tournament_data.tournament_data.tours_number


        document.querySelector('.completion_registration_name_text').textContent = tour_name
        document.querySelector('.completion_registration_orginizer_text').textContent = tour_org
        document.querySelector('.completion_registration_time_text').textContent = tour_time
        document.querySelector('.completion_registration_numberTours_text').textContent = people_team
        document.querySelector('.completion_registration_numberParticipants_text').textContent = tours_number


        if(slide_test == 'slide_2'){
            let teams_number = tournament_data.tournament_data.teams_number
            document.querySelector('.completion_registration_numberTeams_text ').textContent = teams_number
        }
























     
        let member_data

        try {
                member_data = await request('/api/auth/memberData', 'POST', {...tournament})
    
                console.log(member_data.tournament_data)
                console.log(member_data.tournament_data.length)
                console.log(member_data.tournament_data[0])
        } catch (e) {}
    
        // setTimeout(function(){
        //     document.querySelector('.mode_selection').classList.toggle('hide')
        //     window.scrollTo({top: 0});
        // }, 1)

        let game_type = localStorage.getItem('gameType') || 'Один на один'
        let arr_member = []

        if(game_type == 'Один на один'){

            for(let i = 0; i < member_data.tournament_data.length; i++){
                arr_member.push(
                    // <div key={'completion_registration_participants' + counter_users} className="completion_registration_user">
                    <div key={'completion_registration_participants' + i} className="completion_registration_user">
                        <h1 className="completion_user_number">
                            {/* {counter_users++}. */}
                            {i+1}.
                        </h1>
        
                        <div className="completion_user_indent">
                            <div className="completion_user_fullName">
                                <h1 id="completion_user_fullName_title_1" className="completion_registration_text">
                                    ФИО:
                                </h1>
                                <h1 id="completion_user_fullName_text_1" className="completion_registration_text">
                                {member_data.tournament_data[i].full_name}
                                </h1>
                            </div>
        
                            <div className="completion_user_age">
                                <h1 id="completion_user_age_title_1" className="completion_registration_text">
                                    Возраст:
                                </h1>
                                <h1 id="completion_user_age_text_1" className="completion_registration_text">
                                {member_data.tournament_data[i].age}
                                </h1>
                            </div>
        
                            <div className="completion_user_rank">
                                <h1 id="completion_user_rank_title_1" className="completion_registration_text">
                                    Разряд:
                                </h1>
                                <h1 id="completion_user_rank_text_1" className="completion_registration_text">
                                    {member_data.tournament_data[i].rank}
                                </h1>
                            </div>
        
                            <div className="completion_user_photo">
                                <h1 id="completion_user_photo_title_1" className="completion_user_photo_title completion_registration_text">
                                    Фотография:
                                </h1>
                                <img id="completion_user_photo_img_1"
                                className="completion_registration_img" src={user_photo} alt=''>
        
                                </img>
                            </div>
                        </div>
                    </div>
                )
            }
            ReactDOM.render(arr_member, document.querySelector('.completion_registration_participants'))
        }else if(game_type == 'Команда на команду'){
            let number_team = Number(document.querySelector('#basic_information_teamsAmount_input').value)
            let number_people_team = Number(document.querySelector('#basic_information_participants_amount').value)

            let arr_team = []

            for(let ii = 0; ii < number_team; ii++){
                let block_team = "block_team" + ii;
                let element_line = "element_line_" + ii

                arr_team.push(
                    <div key={block_team}>
                        <div className = "fillingParticipants_team">
                            Команда №{ii + 1}
                        </div>

                        <div id={element_line} className="fillingParticipants_team_number">

                        </div>
                    </div>
                )
            }

            ReactDOM.render(arr_team, document.querySelector('.completion_registration_participants'))

            let counter_member = -1

            for(let ii = 0; ii < number_team; ii++){
                for(let i = 0; i < number_people_team; i++){
                    counter_member++

                    arr_member.push(
                        // <div key={'completion_registration_participants' + counter_users} className="completion_registration_user">
                        <div key={'completion_registration_participants'+ ((ii+1) * i)} className="completion_registration_user">
                            <h1 className="completion_user_number">
                                {/* {counter_users++}. */}
                                {i+1}.
                            </h1>

                            <div className="completion_user_indent">
                                <div className="completion_user_fullName">
                                    <h1 id="completion_user_fullName_title_1" className="completion_registration_text">
                                        ФИО:
                                    </h1>
                                    <h1 id="completion_user_fullName_text_1" className="completion_registration_text">
                                        {member_data.tournament_data[counter_member].full_name}
                                    </h1>
                                </div>

                                <div className="completion_user_age">
                                    <h1 id="completion_user_age_title_1" className="completion_registration_text">
                                        Возраст:
                                    </h1>
                                    <h1 id="completion_user_age_text_1" className="completion_registration_text">
                                        {member_data.tournament_data[counter_member].age}
                                    </h1>
                                </div>

                                <div className="completion_user_rank">
                                    <h1 id="completion_user_rank_title_1" className="completion_registration_text">
                                        Разряд:
                                    </h1>
                                    <h1 id="completion_user_rank_text_1" className="completion_registration_text">
                                        {member_data.tournament_data[counter_member].rank}
                                    </h1>
                                </div>

                                <div className="completion_user_photo">
                                    <h1 id="completion_user_photo_title_1" className="completion_user_photo_title completion_registration_text">
                                        Фотография:
                                    </h1>
                                    <img id="completion_user_photo_img_1"
                                    className="completion_registration_img" src={user_photo} alt=''>

                                    </img>
                                </div>
                            </div>
                        </div>
                    )
                }
                ReactDOM.render(arr_member, document.querySelector(`${'#element_line_' + ii}`))
                // element_line
                arr_member = []
            }
        }

        // ReactDOM.render(arr_member, document.querySelector('.completion_registration_participants'))
    }



    return(
        <div>
            <div className="header">
                <button className="burger menu_icon menu_icon_black" id="menu_icon_black">
                    <span></span>
                </button>
                <nav className="burger menu_body">
                    <ul className="menu_list" id="menu_list_black">
                        <a href="personal_area" className="link_login">
                            <li>Личный кабинет</li>
                        </a>
                        <a href="start" className="previous_page_link">
                            <li>Вернуться на <br></br>
                            страницу выбора режима</li>
                        </a>
                    </ul>
                </nav>
                <div className="sidebar">
                    <div className="sidebar_color">
                        <h1 className="startH startH_swiss">Жеребьевка по<br></br> швейцарской системе</h1>
                        <button className="startBt startBt_swiss">
                            Начать
                        </button>
                    </div>
                </div>
                <div className="main-slide">
                    <div className="start_img_2"></div>
                </div>
            </div>



            <button className="burger menu_icon burger_white">
                <span></span>
            </button>
            <nav className="burger menu_body" id="">
                <ul className="menu_list" id="menu_list_white">
                        <p>Швейцарская система</p>
                        <a href="personal_area" className="link_login">
                            <li>Личный кабинет</li>
                        </a>
                        <a href="start">
                            <li className="previous_page_link">Вернуться на <br></br>
                            страницу выбора режима</li>
                        </a>
                </ul>
            </nav>



            <div className="mode_selection hide">
                <div className="horizontal_menu_center horizontal_menu">
                    <p>Выберите режим</p>
                </div>
                <div className="mode_selection_container">
                    <div className="slide " id="slide_1">
                        <h3>Один на один</h3>
                    </div>
                    <div className="slide active" id="slide_2">
                        <h3>Команда на команду</h3>
                    </div>
                </div>
                <button className="mode_selection_btn" onClick={typeGame}>
                    Завершить выбор
                </button>
            </div>


            <div className="horizontal_menu_div hide">
                <div className="horizontal_menu horizontal_menu_distributed">
                    <p className="">Оформление основных пунктов</p>
                    <p className="horizontal_menu_distributed_center">Заполнение участников</p>
                    <p className="">Завершение оформления</p>
                </div>
            </div>

            <div className="main_information hide">
                <div className="basic_information ">
                    <div className="basic_information_container">
                        <div className="basic_information_name">
                            <h1 className="basic_information_title basic_information_name_title">
                                Название
                            </h1>
                            <input defaultValue={'Name'} id="basic_information_tournament_name" type="text" className="basic_information_name_input input_txBox"></input>
                        </div>
                        <div className="basic_information_organization">
                            <h1 className="basic_information_title basic_information_organization_title">
                                Организатор
                            </h1>
                            <input defaultValue={'Org'} id="basic_information_organizer" type="text" className="basic_information_organization_input input_txBox"></input>
                        </div>

                        <div className="basic_information_Container">
                            <div className="basic_information_time">
                                <h1 className="basic_information_title basic_information_time_title">
                                    Время 1 матча
                                </h1>
                                <div className="input_time">
                                    <input defaultValue={15} id="basic_information_time_amount" onKeyPress={validate} type="text" placeholder="60" className="basic_information_time_inputQuantity input_txBox"></input>
                                    <ul className="dropDawn_title">
                                        <div className="dropDawn_title_displeyFlex">
                                            <p id="basic_information_time_type" className="dropDawn_title_p">Минуты</p>
                                            <img className="dropDawn_btn" src={dropDawn_btn} alt=""></img>
                                        </div>
                                        <ul className="basic_information_dropDawn_time hide">
                                            <li>Часы</li>
                                            <li>Минуты</li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>

                            <div className="horizontal_line horizontal_line_time"></div>

                        {/* При выборе режима "команда" отобразить блок с надписью
                        Количество команд и поменять надпись "Количество участников" на
                        количество участников в команде */}

                            <div className="basic_information_numberTours">
                                <h1 className="basic_information_title basic_information_numberTours_title">
                                    Количество туров
                                </h1>
                                <input defaultValue={16} id="basic_information_tours_amount" onKeyPress={validate} type="text" className="basic_information_numberTours_input input_txBox"></input>
                            </div>

                            <div className="horizontal_line"></div>

                            <div className="basic_information_numberParticipants">
                                <h1 id="basic_information_participants_text" className="basic_information_title basic_information_numberParticipants_title">
                                    Количество участников
                                </h1>
                                <input defaultValue={4} id="basic_information_participants_amount" onKeyPress={validate} type="text" className="basic_information_numberParticipants_input input_txBox"></input>
                            </div>

                        </div>

                        <div className="basic_information_Container">
                            <div id="basic_information_teamsAmount_div" className="basic_information_numberTeam">
                                <h1 id="basic_information_teamsAmount_text" className="basic_information_title basic_information_numberParticipants_title">
                                    Количество команд
                                </h1>
                                <input defaultValue={4} id="basic_information_teamsAmount_input" onKeyPress={validate} type="text" className="basic_information_numberParticipants_input input_txBox"></input>
                            </div>

                            <div className="horizontal_line horizontal_line_slide_2"></div>

                            <div id="basic_information_data_div" className="basic_information_data">
                                <h1 id="basic_information_data_text" className="basic_information_title basic_information_data_title">
                                    Даты проведения
                                </h1>
                                <div className="inf_dataContainer">
                                    <input id="inf_dataBeginning_input" type="text" defaultValue={'15.07.2017'}
                                    className="inf_dataBeginning_input input_txBox" placeholder="Дата начала"></input>

                                    <div className="data_line"> - </div>

                                    <input id="inf_dataExpiration_input" type="text" defaultValue={'21.09.2021'}
                                     className="inf_dataExpiration_input input_txBox" placeholder="Дата окончания"></input>
                                </div>
                            </div>
                        </div>

                        <div className="btn_bottom_page">
                            <button className="main_btn basic_information_comeBack">
                                Вернуться назад
                            </button>
                            <button className="main_btn basic_information_proceed" onClick={mainCharacteristics}>
                                Продолжить оформление
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="fillingParticipants hide">
                <div className="basic_information_container">
                    <div className="fillingParticipants_user">
                        <div className="fillingParticipants_user_container">

                        </div>
                    </div>

                    <div className="btn_bottom_page">
                        <button id="fillingParticipants_btn_comeBack" className="main_btn">
                            Вернуться назад
                        </button>
                        <button onClick={addMember} id="fillingParticipants_btn_proceed" className="main_btn">
                            Продолжить оформление
                        </button>
                    </div>
                </div>
            </div>


            <div className="completion_registration hide">
                <div className="basic_information_container">
                    <div className="completion_registration_main_information">
                        <div className="completion_registration_name">
                            <h1 className="completion_registration_text completion_registration_name_title">
                                Название:
                            </h1>
                            <h1 className="completion_registration_text completion_registration_name_text">
                                test_text
                            </h1>
                        </div>

                        <div className="completion_registration_orginizer">
                            <h1 className="completion_registration_orginizer_title completion_registration_text">
                                Организатор:
                            </h1>
                            <h1 className="completion_registration_orginizer_text completion_registration_text">
                                test_text
                            </h1>
                        </div>

                        <div className="completion_registration_time">
                            <h1 className="completion_registration_time_title completion_registration_text">
                                Время:
                            </h1>
                            <h1 className="completion_registration_time_text completion_registration_text">
                                test_text
                            </h1>
                        </div>

                        <div className="completion_registration_numberTours">
                            <h1 className="completion_registration_numberTours_title completion_registration_text">
                                Количество участников:
                            </h1>
                            <h1 className="completion_registration_numberTours_text completion_registration_text">
                                test_text
                            </h1>
                        </div>
                        <div id="block_number_commands" className="completion_registration_numberTours">
                            <h1 className="completion_registration_numberTeams_title completion_registration_text">
                                Количество команд:
                            </h1>
                            <h1 className="completion_registration_numberTeams_text completion_registration_text">
                                test_text
                            </h1>
                        </div>

                        <div className="completion_registration_numberParticipants">
                            <h1 className="completion_registration_numberParticipants_title completion_registration_text">
                                Количество туров:
                            </h1>
                            <h1 className="completion_registration_numberParticipants_text completion_registration_text">
                                test_text
                            </h1>
                        </div>
                    </div>

                    <hr className="completion_registration_hr"></hr>

                    <div className="completion_registration_participants">

                    </div>



                    <div className="btn_bottom_page">
                        <button id="completion_registration_btn_comeBack" className="main_btn">
                            Вернуться назад
                        </button>
                        <button id="completion_registration_btn_proceed" className="main_btn">
                            Завершить оформление
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function validate(e){
    let theEvent = e || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    let regex = /[0-9]/;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
}