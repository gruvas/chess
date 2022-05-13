import ReactDOM from "react-dom"
import {NavLink} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'

import user_photo from "../img/user.png"

const mongoose = require('mongoose')



function round_generation(arr_members){
    let arr_round = []
    let key_counter = 0

    for(let i = 0; i < arr_members.length; i = i + 2){
        if(arr_members.length%2 == 0){
            if(!arr_members[i].not_render && !arr_members[i+1].not_render){
                arr_round.push(
                    <div key={key_counter++} className='mainSwiss_unit_players'>

                        <div className='mainSwiss_board_players'>
                            <div className='mainSwiss_board_player mainSwiss_board_player_first'>
                                <img id={`mainSwiss_user_photo_img_${i}`}
                                    className="mainSwiss_user_photo" src={user_photo} alt=''>
                                </img>
                                <p className='mainSwiss_board_player_field'>{arr_members[i].full_name}</p>
                            </div>


                            <div className='mainSwiss_board_player'>
                                <div className="mainSwiss_field mainSwiss_field_win mainSwiss_field_three">
                                    <h1>
                                        {arr_members[i].score}
                                    </h1>
                                        
                                    <p className="mainSwiss_field_score">
                                        Количество очков
                                    </p>

                                    <h1>
                                        {arr_members[i+1].score}
                                    </h1>
                                </div>

                                <div className="mainSwiss_field mainSwiss_field_color mainSwiss_field_three">
                                    <h1 id={`mainSwiss_color${i}`}>
                                        {arr_members[i].color}
                                    </h1>
                                        
                                    <p>
                                        Цвета
                                    </p>

                                    <h1 id={`mainSwiss_color${i+1}`}>
                                        {arr_members[i+1].color}
                                    </h1>
                                </div>

                                <div className="mainSwiss_field mainSwiss_field_time mainSwiss_field_two">
                                    <p>
                                        Время:
                                    </p>

                                    <h1>
                                        {tournament_data.time_tour} {tournament_data.time_type_tour}
                                    </h1>
                                </div>

                                <div className="mainSwiss_field mainSwiss_field_rank mainSwiss_field_three">
                                    <h1>
                                        {arr_members[i].rank}
                                    </h1>
                                        
                                    <p>
                                        Разряд
                                    </p>

                                    <h1>
                                        {arr_members[i+1].rank}
                                    </h1>
                                </div>
                                
                                <div className="mainSwiss_field mainSwiss_field_age mainSwiss_field_three">
                                    <h1>
                                        {arr_members[i].age}
                                    </h1>
                                        
                                    <p>
                                        Возраст
                                    </p>

                                    <h1>
                                        {arr_members[i+1].age}
                                    </h1>
                                </div>
                            </div>



                            <div className='mainSwiss_board_player mainSwiss_board_player_second'>
                                <img id={`mainSwiss_user_photo_img_${i+1}`}
                                    className="mainSwiss_user_photo" src={user_photo} alt=''>
                                </img>
                                <p className='mainSwiss_board_player_field'>{arr_members[i+1].full_name}</p>
                            </div>
                        </div>

                        <div  className='mainSwiss_board_btn'>
                            <button className='mainSwiss_board_btn_victory' id={`mainSwiss_board_btn_victory${i}`}>
                                Победил
                            </button>
                            <button className='mainSwiss_board_btn_draw active' id={`mainSwiss_board_btn_draw${i}`}>
                                Ничья
                            </button>
                            <button className='mainSwiss_board_btn_victory' id={`mainSwiss_board_btn_victory${i+1}`}>
                                Победил
                            </button>
                        </div>
                    </div>
                )
            }
        }else{
            if(arr_members.length % 2 == 1){
                if(i != arr_members.length - 1){
                    if(!arr_members[i].not_render && !arr_members[i+1].not_render){
                        arr_round.push(
                            <div key={key_counter++} className='mainSwiss_unit_players'>
                                <div className='mainSwiss_board_players'>
                                    <div className='mainSwiss_board_player mainSwiss_board_player_first'>
                                        <img id={`mainSwiss_user_photo_img_${i}`}
                                            className="mainSwiss_user_photo" src={user_photo} alt=''>
                                        </img>
                                        <p className='mainSwiss_board_player_field'>{arr_members[i].full_name}</p>
                                    </div>


                                    <div className='mainSwiss_board_player'>
                                        <div className="mainSwiss_field mainSwiss_field_win mainSwiss_field_three">
                                            <h1>
                                                {arr_members[i].score}
                                            </h1>
                                                
                                            <p className="mainSwiss_field_score">
                                                Количество очков
                                            </p>

                                            <h1>
                                                {arr_members[i+1].score}
                                            </h1>
                                        </div>

                                        <div className="mainSwiss_field mainSwiss_field_color mainSwiss_field_three">
                                            <h1 id={`mainSwiss_color${i}`}>
                                                {arr_members[i].color}
                                            </h1>
                                                
                                            <p>
                                                Цвета
                                            </p>

                                            <h1 id={`mainSwiss_color${i+1}`}>
                                                {arr_members[i+1].color}
                                            </h1>
                                        </div>

                                        <div className="mainSwiss_field mainSwiss_field_time mainSwiss_field_two">
                                            <p>
                                                Время:
                                            </p>

                                            <h1>
                                                {tournament_data.time_tour} {tournament_data.time_type_tour}
                                            </h1>
                                        </div>

                                        <div className="mainSwiss_field mainSwiss_field_rank mainSwiss_field_three">
                                            <h1>
                                                {arr_members[i].rank}
                                            </h1>
                                                
                                            <p>
                                                Разряд
                                            </p>

                                            <h1>
                                                {arr_members[i+1].rank}
                                            </h1>
                                        </div>
                                        
                                        <div className="mainSwiss_field mainSwiss_field_age mainSwiss_field_three">
                                            <h1>
                                                {arr_members[i].age}
                                            </h1>
                                                
                                            <p>
                                                Возраст
                                            </p>

                                            <h1>
                                                {arr_members[i+1].age}
                                            </h1>
                                        </div>
                                    </div>



                                    <div className='mainSwiss_board_player mainSwiss_board_player_second'>
                                        <img id={`mainSwiss_user_photo_img_${i+1}`}
                                            className="mainSwiss_user_photo" src={user_photo} alt=''>
                                        </img>
                                        <p className='mainSwiss_board_player_field'>{arr_members[i+1].full_name}</p>
                                    </div>
                                </div>

                                <div  className='mainSwiss_board_btn'>
                                    <button className='mainSwiss_board_btn_victory' id={`mainSwiss_board_btn_victory${i}`}>
                                        Победил
                                    </button>
                                    <button className='mainSwiss_board_btn_draw active' id={`mainSwiss_board_btn_draw${i}`}>
                                        Ничья
                                    </button>
                                    <button className='mainSwiss_board_btn_victory' id={`mainSwiss_board_btn_victory${i+1}`}>
                                        Победил
                                    </button>
                                </div>
                            </div>
                        )
                    }
                }else{
                    if(i == arr_members.length - 1){
                        arr_round.push(
                            <div key={key_counter++} className='mainSwiss_unit_players'>
                                <div className='mainSwiss_board_players'>
                                    <div className='mainSwiss_board_player mainSwiss_board_player_first'>
                                        <img id={`mainSwiss_user_photo_img_${i}`}
                                            className="mainSwiss_user_photo" src={user_photo} alt=''>
                                        </img>
                                        <p className='mainSwiss_board_player_field'>{arr_members[i].full_name}</p>
                                    </div>

                                    <div className="mainSwiss_not_render">
                                        <h1 className="mainSwiss_not_render_first">
                                            У данного игрока отсутствует пара 
                                        </h1>
                                        <h1>
                                            Ему будет автоматически добавлено 1 очко
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            }
        }
    }

    for(let i = 0; i < copy_member_data.length; i++){
        arr_round.push(
            <div key={key_counter++} className='mainSwiss_unit_players'>
                <div className='mainSwiss_board_players'>
                    <div className='mainSwiss_board_player mainSwiss_board_player_first'>
                        <img id={`mainSwiss_user_img_copy${i}`}
                            className="mainSwiss_user_photo" src={user_photo} alt=''>
                        </img>
                        <p className='mainSwiss_board_player_field'>{copy_member_data[i].full_name}</p>
                    </div>

                    <div className="mainSwiss_not_render">
                        <h1 className="mainSwiss_not_render_first">
                            У данного игрока отсутствует пара 
                        </h1>
                        <h1>
                            Ему будет автоматически добавлено 1 очко
                        </h1>
                    </div>
                </div>
            </div>
        )
    }

    ReactDOM.render(arr_round, document.querySelector('.mainSwiss_board'))
}


function addActive_burger_white(){
    const menu_list_white = document.querySelector("#menu_list_white")
    const burger_white = document.querySelector(".burger_white")

    menu_list_white.classList.toggle('active')
    burger_white.classList.toggle('active')
    console.log('white')
}

function regular(line){
    let regex = /[^\s\d]/
    let regex_str = line.match(regex)
    return(regex_str)
}

function regular_rank(line){
    let regex = /\d+ \D/
    let regex_str = line.match(regex)

    if(regex_str == null){
        regex = /\D/
        regex_str = line.match(regex)
    }

    return(regex_str)
}

function regular_btn_id(line){
    let regex_letter = /\D+/
    let regex_number = /\d+/
    let letter = line.match(regex_letter)
    let number = line.match(regex_number)

    let obj = {
        let: letter,
        num: number
    }
    return(obj)
}

let copy_member_data = []

function array_sorting(){
    let member_id
    let intermediate

    not_render = 0
    copy_member_data = []

    for(let ii = 0; ii < member_data.length; ii++){
        for(let i = 0; i < member_data.length; i++){
            if(i+1 != member_data.length){
                if(member_data[i].score < member_data[i+1].score){
                    intermediate = member_data[i]
                    member_data[i] = member_data[i+1]
                    member_data[i+1] = intermediate
                }
            }
        }
    }

    for(let i = 0; i < member_data.length; i = i + 2){
        member_id = i + 1

        for(let ii = 0; ii < member_data[i].rivals.length; ii++){
            if(member_id != member_data.length){
                do{
                    if(member_data[i].rivals[ii].id_player == member_data[member_id].player_number){
                        ii = 0
                        member_id++
                    }else{
                        ii++
                    }
                }while(ii < member_data[i].rivals.length && member_id != member_data.length && member_id != member_data.length - 1)
            }

            if(member_id != member_data.length){
                intermediate = member_data[i + 1]
                member_data[i + 1] = member_data[member_id]
                member_data[member_id] = intermediate
            }
        }

        if(i+1 < member_data.length){
            for(let j = 0; j < member_data[i].rivals.length; j++){
                if(member_data[i].rivals[j].id_player == member_data[i+1].player_number){
                    member_data[i].not_render = true
                    not_render++
                    member_data[i+1].not_render = true
                    not_render++
                }
            }
        }
    }

    for(let i = 0; i < member_data.length; i++){
        if(member_data[i].not_render == true){
            copy_member_data.push(member_data[i])
            member_data.splice(i, 1)
            i = 0
        }
    }

    for(let i = 0; i < copy_member_data.length; i++){
        copy_member_data[i].number_wins++

        copy_member_data[i].rivals.push({
            round: tournament_data.current_tour,
            result: 'rest'
        }) 
    }
    // console.log('copy_member_data', copy_member_data)
    
    // console.log('-----')
    // console.log(member_data)
    // console.log('-----')
}

let not_render = 0
let member_data, tournament_data

export const MainSwiss = () => {
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

    const memberDelete = async (tour_id) => {
        try {
            await request('/api/auth/delete_memeber', 'POST', {tour_id})
        } catch (e) {}
    }
    const memberAdd = async (member_data) => {
        try {
            await request('/api/auth/add_member', 'POST', {...member_data})
        } catch (e) {}
    }
    const currentTour = async (current_tour) => {
        try {
            await request('/api/auth/current_tour', 'POST', {...current_tour})
        } catch (e) {}
    }

    async function launch_draw(tournament_id){
        await memberData(tournament_id)
        await tournamentData(tournament_id)

        tournament_data.time_type_tour = regular(tournament_data.time_type_tour)

        for(let i = 0; i < member_data.length; i++){
            if(regular_rank(member_data[i].rank) != null){
                member_data[i].rank = regular_rank(member_data[i].rank).toString()
            }
        }
            
        document.querySelector('.mainSwiss_number_text').textContent = `${tournament_data.current_tour} тур`
    }


    let who_won = []

    window.onload = async function() {
        let tournament_id = localStorage.getItem('tournament_id')

        await launch_draw(tournament_id)

        document.querySelector('.burger_type_game').textContent = `${tournament_data.type_tournament} система`

        if(tournament_data.current_tour == 1){
            for(let i = 0; i < member_data.length; i++){
                if(i%2 == 0){
                    member_data[i].color = 'Ч'
                }else{
                    member_data[i].color = 'Б'
                }
            }
            console.log(member_data)
        }else{
            await array_sorting()

            let cpy_member_data
            let cpy_member_data_length
            let cpy_not_render
            let cpy_not_render_counter
            let cpy_not_render_check = 0 
                
            if(not_render != 0){
                cpy_not_render_counter = JSON.parse(JSON.stringify(not_render))

                for(let i = 0; i < copy_member_data.length; i++){
                    copy_member_data[i].not_render = false
                    member_data.push(copy_member_data[i])
                }
    
                copy_member_data = []
                cpy_member_data = JSON.parse(JSON.stringify(member_data))
                cpy_member_data_length = cpy_member_data.length
            }

            async function recursion(){
                if(not_render != 0){
                    member_data = JSON.parse(JSON.stringify(cpy_member_data))

                    for(let j = 0; j < cpy_member_data_length; j++){
                        if(not_render != 0){
                            member_data = JSON.parse(JSON.stringify(cpy_member_data))

                            for(let i = 0; i < cpy_member_data_length; i++){
                                if(i>j){
                                    if(not_render == 0){
                                        console.log('1', JSON.parse(JSON.stringify(member_data)))
                                    }

                                    if(not_render != 0){
                                        member_data = JSON.parse(JSON.stringify(cpy_member_data))

                                        member_data[i].rivals.push({
                                            id_player: member_data[j].player_number
                                        }) 
                                        member_data[j].rivals.push({
                                            id_player: member_data[i].player_number
                                        }) 
                        
                                        await array_sorting()

                                        if(cpy_not_render_counter > not_render){
                                            cpy_not_render_check = 1
                                            cpy_not_render = JSON.parse(JSON.stringify(member_data))
                                            cpy_not_render_counter = JSON.parse(JSON.stringify(not_render))
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if(cpy_not_render_counter < not_render && cpy_not_render_check == 1){
                    console.log(cpy_not_render)
                    console.log(cpy_not_render_counter)
                }
            }

            await recursion()
        }


        await round_generation(member_data)

        if(member_data.length % 2 == 0){
            for(let i = 0; i < member_data.length; i = i + 2){
                let btn_win1 = document.querySelector(`#mainSwiss_board_btn_victory${i}`)
                let btn_win2 = document.querySelector(`#mainSwiss_board_btn_victory${i+1}`)
                let btn_draw = document.querySelector(`#mainSwiss_board_btn_draw${i}`)
                

                btn_win1.addEventListener('click', function(){
                    btn_win1.classList.add('active')
                    btn_win2.classList.remove('active')
                    btn_draw.classList.remove('active')
                })
                btn_win2.addEventListener('click', function(){
                    btn_win1.classList.remove('active')
                    btn_win2.classList.add('active')
                    btn_draw.classList.remove('active')
                })
                btn_draw.addEventListener('click', function(){
                    btn_win2.classList.remove('active')
                    btn_win1.classList.remove('active')
                    btn_draw.classList.add('active')
                })
            }
        }else{
            for(let i = 0; i < member_data.length - 1; i = i + 2){
                let btn_win1 = document.querySelector(`#mainSwiss_board_btn_victory${i}`)
                let btn_win2 = document.querySelector(`#mainSwiss_board_btn_victory${i+1}`)
                let btn_draw = document.querySelector(`#mainSwiss_board_btn_draw${i}`)
                

                btn_win1.addEventListener('click', function(){
                    btn_win1.classList.add('active')
                    btn_win2.classList.remove('active')
                    btn_draw.classList.remove('active')

                })
                btn_win2.addEventListener('click', function(){
                    btn_win1.classList.remove('active')
                    btn_win2.classList.add('active')
                    btn_draw.classList.remove('active')
                })
                btn_draw.addEventListener('click', function(){
                    btn_win2.classList.remove('active')
                    btn_win1.classList.remove('active')
                    btn_draw.classList.add('active')
                })
            }

            member_data[member_data.length - 1].number_wins++

            member_data[member_data.length - 1].rivals.push({
                round: tournament_data.current_tour,
                result: 'rest'
            }) 
        }

        let start_round = document.querySelector('.mainSwiss_start_round')

        start_round.addEventListener('click', async function(){
            let btn_active = document.querySelectorAll('.active')

           if(btn_active.length < ((member_data.length / 2) - (not_render / 2))){
                window.alert("Необходимо выбрать результат игры у каждой доски")
            }else{
                for(let i = 0; i < member_data.length / 2; i++){
                    let btn_active_reg = regular_btn_id(btn_active[i].id)

                    if(btn_active_reg.let == 'mainSwiss_board_btn_draw'){
                        if(btn_active_reg.num == 0){
                            member_data[0].number_draws++
                            member_data[1].number_draws++

                            member_data[0].score = member_data[0].score + 0.5
                            member_data[1].score = member_data[1].score + 0.5
                        }else{
                            member_data[parseInt(btn_active_reg.num)].number_draws++
                            member_data[parseInt(btn_active_reg.num) + 1].number_draws++

                            member_data[parseInt(btn_active_reg.num)].score = member_data[parseInt(btn_active_reg.num)].score + 0.5
                            member_data[parseInt(btn_active_reg.num) + 1].score = member_data[parseInt(btn_active_reg.num) + 1].score + 0.5
                        }

                        who_won.push('draw')
                    }
                    if(btn_active_reg.let == 'mainSwiss_board_btn_victory'){
                        if(btn_active_reg.num % 2 == 0){
                            member_data[parseInt(btn_active_reg.num)].number_wins++
                            member_data[parseInt(btn_active_reg.num) + 1].number_lesions++

                            member_data[parseInt(btn_active_reg.num)].score++

                            who_won.push('victory1')
                        }

                        if(btn_active_reg.num % 2 != 0){
                            member_data[parseInt(btn_active_reg.num) - 1].number_lesions++
                            member_data[parseInt(btn_active_reg.num)].number_wins++
                            
                            member_data[parseInt(btn_active_reg.num)].score++

                            who_won.push('victory2')
                        }
                    }
                }

                let who_won_counter = 0

                for(let i = 0; i < member_data.length; i = i + 2){
                    let color_1 = document.querySelector(`#mainSwiss_color${i}`).textContent
                    let color_2 = document.querySelector(`#mainSwiss_color${i+1}`).textContent
                    
                    if(color_1 == 'Б'){
                        member_data[i].color_coef++
                    }
                    
                    if(color_2 == 'Б'){
                        member_data[i+1].color_coef++
                    }

                    if(who_won[who_won_counter] == 'draw'){
                        member_data[i].rivals.push({
                            round: tournament_data.current_tour,
                            id_player: member_data[i+1].player_number,
                            color: color_2,
                            result: 'draw'
                        }) 
                        member_data[i+1].rivals.push({
                            round: tournament_data.current_tour,
                            id_player: member_data[i].player_number,
                            color: color_1,
                            result: 'draw'
                        })
                    }
                    if(who_won[who_won_counter] == 'victory1'){
                        member_data[i].rivals.push({
                            round: tournament_data.current_tour,
                            id_player: member_data[i+1].player_number,
                            color: color_2,
                            result: 'win'
                        }) 
                        member_data[i+1].rivals.push({
                            round: tournament_data.current_tour,
                            id_player: member_data[i].player_number,
                            color: color_1,
                            result: 'loss'
                        })
                    }

                    // console.log(i)
                    console.log(who_won[who_won_counter])

                    if(who_won[who_won_counter] == 'victory2'){
                        member_data[i].rivals.push({
                            round: tournament_data.current_tour,
                            id_player: member_data[i+1].player_number,
                            color: color_2,
                            result: 'loss'
                        }) 
                        member_data[i+1].rivals.push({
                            round: tournament_data.current_tour,
                            id_player: member_data[i].player_number,
                            color: color_1,
                            result: 'win'
                        })
                    }

                    who_won_counter++
                }

                for(let i = 0; i < member_data.length; i = i + 2){
                    delete member_data[i].color
                    delete member_data[i+1].color
                }

                let tour_id = member_data[0].owner
    
                tournament_data.current_tour++
    
                let current_tour = {
                    id: tour_id,
                    current_tour: tournament_data.current_tour
                }
    
                console.log('-----')
                console.log(member_data)
                console.log('-----')
    
    
                await currentTour(current_tour)
    
                await memberDelete(tour_id)
                await memberAdd(member_data)
    
                window.location.reload()
            }
        })
    }

    return(
        <div className="no_scrolling">
                <button className="burger menu_icon burger_white" onClick={addActive_burger_white}>
                    <span></span>
                </button>
                <nav className="burger menu_body" id="">
                    <ul className="menu_list" id="menu_list_white">
                            <p className="burger_type_game">Тип жеребьевки</p>
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
                        
                    </div>

                    <div className='main_container'>
                        <button  className='mainSwiss_start_round'>
                            Начать раунд
                        </button>
                    </div>
                </div>

        </div>
    )
}

