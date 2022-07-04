import ReactDOM from "react-dom"
import dropDawn_btn from "../img/arrow_down.svg"
import { useHttp } from '../hooks/http.hook'

import user_photo from "../img/user.png"

const mongoose = require('mongoose')

function personal_area_link(){
    document.location.href = "/personal_area"
}

function main_swiss(){
    document.location.href = "/main_swiss"
}

let maximum_number_tours = 5
let maximum_number_member = 7

function field_validation(){
    let game_type = localStorage.getItem('gameType') || 'Один на один'

    // const warning = document.querySelector('.warning_number_tours')
    const warning = document.querySelector('.warning_number_tours')
    const warning_text = document.querySelector('.warning_number_tours_text')
    let prepared_text = 'Допустимое количество туров '
    // const maximum_number_tours_p = document.querySelector('.maximum_number_tours')
    // const maximum_number_member_p = document.querySelector('.maximum_number_member')

    const btn_next = document.querySelector('.basic_information_proceed')


    if(game_type == 'Один на один'){
        const tours = document.querySelector('.basic_information_numberTours_input').value
        const players = document.querySelector('#basic_information_participants_amount').value
        
        if((players == 7 || players == 8) && tours != 5){
            // maximum_number_tours_p.textContent = ' 5 '
            // maximum_number_member_p.textContent = '7 до 8'
            warning_text.textContent = prepared_text + '5 для игроков в количестве от 7 до 8'

            warning.classList.remove('hide')

            btn_next.disabled = true
            
            return false
        }else if((players > 8 && players < 17) && (tours != 6 && tours != 7)){
            // maximum_number_tours_p.textContent = ' от 6 до 7 '
            // maximum_number_member_p.textContent = '9 до 16'
            warning_text.textContent = prepared_text + 'от 6 до 7 для игроков в количестве от 9 до 16'

            warning.classList.remove('hide')

            btn_next.disabled = true
            
            return false
        }else if((players > 16 && players < 33) && (tours < 7 || tours > 9)){
            // maximum_number_tours_p.textContent = ' от 7 до 9 '
            // maximum_number_member_p.textContent = '17 до 32'
            warning_text.textContent = prepared_text + 'от 7 до 9 для игроков в количестве от 17 до 32'

            warning.classList.remove('hide')

            btn_next.disabled = true
            
            return false
        }else if((players > 32 && players < 65) && (tours < 8 || tours > 16)){
            // maximum_number_tours_p.textContent = ' от 8 до 16 '
            // maximum_number_member_p.textContent = '33 до 64'
            warning_text.textContent = prepared_text + 'от 8 до 16 для игроков в количестве от 33 до 64'

            warning.classList.remove('hide')

            btn_next.disabled = true
            
            return false
        // }else if((players > 64 && players < 129) && (tours < 8 || tours > 16)){
        //     // maximum_number_tours_p.textContent = ' от 8 до 16 '
        //     // maximum_number_member_p.textContent = '65 до 129'
        //     warning_text.textContent = prepared_text + 'от 8 до 16 для игроков в количестве от 65 до 128'

        //     warning.classList.remove('hide')

        //     btn_next.disabled = true
            
        //     return false
        }else if((players > 64 && players < 513) && (tours < 8 || tours > 16)){
            // maximum_number_tours_p.textContent = ' от 8 до 16 '
            // maximum_number_member_p.textContent = '128 до 257'
            warning_text.textContent = prepared_text + 'от 8 до 16 для игроков в количестве от 64 до 512'
            warning.classList.remove('hide')

            btn_next.disabled = true
            
            return false
        }else if(players > 512 || tours > 16){
            // maximum_number_tours_p.textContent = ' от 8 до 16 '
            // maximum_number_member_p.textContent = '128 до 257'

            warning_text.textContent = 'Максимальное количество туров 16. максимальное число игроков 512. '

            warning.classList.remove('hide')

            btn_next.disabled = true
            
            return false
        }else if(players < 7){
            warning_text.textContent = 'Минимальное количество игроков 7 '

            warning.classList.remove('hide')

            btn_next.disabled = true
            
            return false
        }
        // else if(players < 6 || players > 257){
        //     const warning_tours_flex = document.querySelector('.warning_tours_flex')
            
        //     warning_tours_flex.textContent = 'Количество игроков должно находится в диапазоне между 7 и 256'

        //     warning.classList.remove('hide')

        //     btn_next.disabled = true
            
        //     return false
        // }
        else{
            warning.classList.add('hide')
            
            btn_next.disabled = false

            return true
        }
    }else if(game_type == 'Команда на команду'){
        const tours = document.querySelector('.basic_information_numberTours_input').value
        const players = document.querySelector('#basic_information_teamsAmount_input').value

        if(tours > players/2){
            maximum_number_tours = players/2

            // maximum_number_tours_p.textContent = Math.ceil(maximum_number_tours)
            warning_text.textContent = prepared_text + Math.ceil(maximum_number_tours)

            warning.classList.remove('hide')

            btn_next.disabled = true

            return false
        }else{
            warning.classList.add('hide')

            btn_next.disabled = false

            return true
        }
    }
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
            let intermediate = await request('/api/auth/tournamentData', 'POST', {id_tournament})
            tournament_data = intermediate.tournament_data
        } catch (e) {}

        let tour_name = tournament_data.name_tour
        let tour_org = tournament_data.organizer

        let tour_time = tournament_data.date_beginning +
        " - " + tournament_data.date_expiration

        let people_team = tournament_data.participants_number

        let tours_number = tournament_data.tours_number


        document.querySelector('.completion_registration_name_text').textContent = tour_name
        document.querySelector('.completion_registration_orginizer_text').textContent = tour_org
        document.querySelector('.completion_registration_time_text').textContent = tour_time
        document.querySelector('.completion_registration_numberTours_text').textContent = people_team
        document.querySelector('.completion_registration_numberParticipants_text').textContent = tours_number


        if(slide_test == 'slide_2'){
            let teams_number = tournament_data.teams_number
            document.querySelector('.completion_registration_numberTeams_text ').textContent = teams_number
        }

        let member_data

        try {
                member_data = await request('/api/auth/memberData', 'POST', {...tournament})

                        // const intermediate_sending = await request('/api/auth/tournamentLinks', 'POST', {...new_obj})

        } catch (e) {}

        let arr_id = []
        let link_tournament = mongoose.Types.ObjectId(id_tournament)

        for(let i = 0; i < member_data.tournament_data.length; i++){
            arr_id.push(mongoose.Types.ObjectId(member_data.tournament_data[i]._id))
        }

        try {
            await request('/api/auth/tournamentLinks', 'POST', {arr_id, link_tournament})
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
                    <div className="slide active" id="slide_1">
                        <h3>Один на один</h3>
                    </div>
                    <div className="slide" id="slide_2">
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
                            <input defaultValue={'Name'} id="basic_information_tournament_name" type="text" className="basic_information_name_input input_txBox" maxLength={320}></input>
                        </div>
                        <div className="basic_information_organization">
                            <h1 className="basic_information_title basic_information_organization_title">
                                Организатор
                            </h1>
                            <input defaultValue={'Org'} id="basic_information_organizer" type="text" className="basic_information_organization_input input_txBox" maxLength={320}></input>
                        </div>

                        <div className="basic_information_Container">
                            <div className="basic_information_time">
                                <h1 className="basic_information_title basic_information_time_title">
                                    Время 1 матча
                                </h1>
                                <div className="input_time">
                                    <input defaultValue={15} id="basic_information_time_amount" onKeyPress={validate} type="text" placeholder="60" className="basic_information_time_inputQuantity input_txBox"  maxLength={4}></input>
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
                                <input defaultValue={5} onInput={field_validation} id="basic_information_tours_amount" onKeyPress={validate} type="text" className="basic_information_numberTours_input input_txBox" maxLength={2}></input>
                            </div>

                            <div className="horizontal_line"></div>

                            <div className="basic_information_numberParticipants">
                                <h1 id="basic_information_participants_text" className="basic_information_title basic_information_numberParticipants_title">
                                    Количество участников
                                </h1>
                                <input defaultValue={8} onInput={field_validation} id="basic_information_participants_amount" onKeyPress={validate} type="text" className="basic_information_numberParticipants_input input_txBox" maxLength={4}></input>
                            </div>
                        </div>

                        <div className="basic_information_Container">
                            <div id="basic_information_teamsAmount_div" className="basic_information_numberTeam">
                                <h1 id="basic_information_teamsAmount_text" className="basic_information_title basic_information_numberParticipants_title">
                                    Количество команд
                                </h1>
                                <input defaultValue={4} onInput={field_validation} id="basic_information_teamsAmount_input" onKeyPress={validate} type="text" className="basic_information_numberParticipants_input input_txBox"></input>
                            </div>

                            <div className="horizontal_line horizontal_line_slide_2"></div>

                            <div id="basic_information_data_div" className="basic_information_data">
                                <h1 id="basic_information_data_text" className="basic_information_title basic_information_data_title">
                                    Даты проведения
                                </h1>
                                <div className="inf_dataContainer">
                                    <input id="inf_dataBeginning_input" type="text" defaultValue={'15.07.2017'}
                                    className="inf_dataBeginning_input input_txBox" placeholder="Дата начала" maxLength={60}></input>

                                    <div className="data_line"> - </div>

                                    <input id="inf_dataExpiration_input" type="text" defaultValue={'21.09.2021'}
                                     className="inf_dataExpiration_input input_txBox" placeholder="Дата окончания" maxLength={60}></input>
                                </div>
                            </div>
                        </div>

                        <div className="warning_number_tours hide">
                            <div className="warning_number_tours_flex">

                                <p className="warning_number_tours_text">

                                </p>
                                
                                {/* <div className="warning_tours_flex">
                                    <p>Количество туров не должно превышать&#160;</p>

                                    <p className="maximum_number_tours">{maximum_number_tours}</p>
                                </div>

                                &#160;и быть меньше 1 */}
                                
                                {/* <div className="warning_tours_flex">
                                    <p>
                                        Допустимое количесто туров&#160;
                                    </p>

                                    <p className="maximum_number_tours">{maximum_number_tours}</p>

                                    <p>
                                        &#160;для игроков в количестве от&#160;
                                    </p>

                                    <p className="maximum_number_member">{maximum_number_member}</p>
                                </div> */}
                                
                                {/* <div className="warning_tours_flex">
                                    <p>
                                        Допустимое количесто туров&#160;
                                    </p>

                                    <p className="maximum_number_tours">{maximum_number_tours}</p>

                                    <p>
                                        &#160;для игроков в количестве от&#160;
                                    </p>

                                    <p className="maximum_number_member">{maximum_number_member}</p>
                                </div> */}
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
                        <button id="completion_registration_btn_proceed" className="main_btn" onClick={main_swiss}>
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