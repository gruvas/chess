import ReactDOM from "react-dom"
import { useHttp } from '../hooks/http.hook'

import user_photo from "../img/user.png"


let round_current = 0
let not_render = 0
let validation_variable = 0
let counter_not_render = 1
let who_won = []
let copy_member_data = []
let array_vector = []
let intermediate_index = []
let color_distribution_coefficient = []
let first_iteration = true
let check_cycle = false
let member_data, tournament_data, redundant_array



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
                            <button className='mainSwiss_board_btn_draw' id={`mainSwiss_board_btn_draw${i}`}>
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
                                    <button className='mainSwiss_board_btn_draw' id={`mainSwiss_board_btn_draw${i}`}>
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

    const statusUpdate = async (finished_tournament_intermediate) => {
        try {
            await request('/api/auth/status_update', 'POST', {...finished_tournament_intermediate})
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

    window.onload = async function() {
        let tournament_id = localStorage.getItem('tournament_id')

        await launch_draw(tournament_id)
        round_current = tournament_data.current_tour

        if(round_current == 1){
            document.querySelector('.link_login_game_history').classList.add('hide')
            document.querySelector('.link_login_leader_board').classList.add('hide')
        }

        if(tournament_data.tours_number < tournament_data.current_tour){
            tournament_data.finished_tournament = true

            let finished_tournament_intermediate = {
                id: member_data[0].owner,
                finished_tournament: tournament_data.finished_tournament
            }

            await statusUpdate(finished_tournament_intermediate)
            
            alert("Данный турнир завершен. Сейчас вас переправит на страницу лидеров.");
            
            window.location.href = 'leader_board'
        }        

        document.querySelector('.burger_type_game').textContent = `${tournament_data.type_tournament} система`

        await start()

        await color_distribution()
        
        await end_round()

        await round_generation(member_data)

        await active_buttons()


        let start_round = document.querySelector('.mainSwiss_start_round')
            

        start_round.addEventListener('click', async function(){
            let btn_active = document.querySelectorAll('.active')
            
            if((member_data.length%2 == 0) && (btn_active.length < ((member_data.length / 2) - (not_render / 2)))){
                window.alert("Необходимо выбрать результат игры у каждой доски")
            }else if((member_data.length%2 != 0) && (btn_active.length < ((member_data.length / 2) - (not_render / 2)) - 1)){
                window.alert("Необходимо выбрать результат игры у каждой доски")
            }else{
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                await btn_result()
                await tour_results()

                if(member_data.length%2 == 0){
                    for(let i = 0; i < member_data.length; i = i + 2){
                        delete member_data[i].color
                        delete member_data[i+1].color
                    }
                }else{
                    for(let i = 0; i < member_data.length; i = i + 2){
                        if((member_data.length - 1) != i){
                            delete member_data[i].color
                            delete member_data[i+1].color
                        }
                    }
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
                            <a href="game_history" className="link_login link_login_game_history">
                                <li>История турнира</li>
                            </a>
                            <a href="leader_board" className="link_login link_login_leader_board">
                                <li>Таблица лидеров</li>
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



async function start(){
    console.log('Start')
    console.log(`Round ${round_current}`)

    await sorting_points()
    await sort_arr()
    console.log(JSON.parse(JSON.stringify(member_data)))
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

function verification_member_data(){
    for(let i = 0; i < member_data.length; i = i + 2){
        for(let ii = 0; ii < member_data[i].rivals.length; ii++){
            if(member_data.length%2 == 0){
                if(round_current > 2){
                    if((member_data[i].rivals[member_data[i].rivals.length - 1].color == member_data[i].rivals[member_data[i].rivals.length - 2].color) &&
                    (member_data[i+1].rivals[member_data[i+1].rivals.length - 1].color == member_data[i+1].rivals[member_data[i+1].rivals.length - 1].color) && 
                    (member_data[i].rivals[member_data[i].rivals.length - 1].color == member_data[i+1].rivals[member_data[i+1].rivals.length - 1].color)){
        
                        return false
                    }
                }

                if(member_data[i].rivals[ii].id_player == member_data[i+1].player_number){
                    return false
                }
            }
            
            if(member_data.length%2 != 0 && i != (member_data.length - 1)){
                if(round_current > 2){
                    if((member_data[i].rivals[member_data[i].rivals.length - 1].color == member_data[i].rivals[member_data[i].rivals.length - 2].color) &&
                    (member_data[i+1].rivals[member_data[i+1].rivals.length - 1].color == member_data[i+1].rivals[member_data[i+1].rivals.length - 1].color) && 
                    (member_data[i].rivals[member_data[i].rivals.length - 1].color == member_data[i+1].rivals[member_data[i+1].rivals.length - 1].color)){

                        return false
                    }
                }  
                
                
                if(member_data[i].rivals[ii].id_player == member_data[i+1].player_number){
                    return false
                }
            }
        }
    }

    return true
}

function sort_arr(){
    let member_id, intermediate
    sorting_points()

    redundant_array = JSON.parse(JSON.stringify(member_data))

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
                }while(ii < member_data[i].rivals.length && member_id != member_data.length)
                
                check_cycle = false
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
                else if(member_data.length%2 == 0){
                    if(round_current > 2){
                        if((member_data[i].rivals[member_data[i].rivals.length - 1].color == member_data[i].rivals[member_data[i].rivals.length - 2].color) &&
                        (member_data[i+1].rivals[member_data[i].rivals.length - 1].color == member_data[i+1].rivals[member_data[i].rivals.length - 1].color) &&
                        (member_data[i].rivals[member_data[i].rivals.length - 1].color == member_data[i+1].rivals[member_data[i].rivals.length - 1].color)){

                            member_data[i].not_render = true
                            not_render++
                            member_data[i+1].not_render = true
                            not_render++
                        }
                    }
                }else if(member_data.length%2 != 0 && i != (member_data.length - 1)){
                    if(round_current > 2){
                        if((member_data[i].rivals[member_data[i].rivals.length - 1].color == member_data[i].rivals[member_data[i].rivals.length - 2].color) &&
                        (member_data[i+1].rivals[member_data[i].rivals.length - 1].color == member_data[i+1].rivals[member_data[i].rivals.length - 1].color) &&
                        (member_data[i].rivals[member_data[i].rivals.length - 1].color == member_data[i+1].rivals[member_data[i].rivals.length - 1].color)){
    
                            member_data[i].not_render = true
                            not_render++
                            member_data[i+1].not_render = true
                            not_render++
                        }
                    }
                }
            }
        }
    }

    if(not_render > 1 && validation_variable < 1){
        array_vector = []
        intermediate_index = []

        let intermediate = []
        let array_vector_intermediate = []
        let intermediate_arr = []
        let index

        member_data = JSON.parse(JSON.stringify(redundant_array))


        if(first_iteration){

            for(let i = 1; i < member_data.length + 1; i++){
                array_vector.push(i)
            }

            for(let i = 0; i < member_data.length; i++){
                intermediate_arr.push(member_data[i].rivals)
            }

            for(let i = 0; i < member_data.length; i++){
                array_vector_intermediate = JSON.parse(JSON.stringify(array_vector))

                for(let ii = 0; ii < member_data[i].rivals.length; ii++){
                    let index = array_vector.indexOf(member_data[i].rivals[ii].id_player)
                    delete array_vector_intermediate[index]
                }

                array_vector_intermediate = array_vector_intermediate.filter(function (el) {
                    return (el != null && el != "" || el === 0);
                });

                intermediate_index.push({id: member_data[i].player_number, arr: array_vector_intermediate})
            }
                
            for(let i = 0; i < member_data.length; i++){
                for(let ii = 0; ii < member_data.length; ii++){

                    for(let iii = 0; iii < member_data.length; iii++){
                        
                        for(let j = 0; j < intermediate_index.length; j++){
                            for(let jj = 0; jj < intermediate_index[j].arr.length; jj++){

                                for(let ind = 0; ind < member_data.length; ind++){
                                    if(member_data[ind].player_number == intermediate_index[j].arr[jj]){
                                        ind = member_data.length
                                        index = intermediate_index[j].arr[jj] - 1
                                    }
                                }
                                
                                intermediate =  member_data[0]
                                member_data[0] = member_data[(intermediate_index[j].id - 1)]
                                member_data[(intermediate_index[j].id - 1)] = intermediate

                                intermediate =  member_data[1]
                                member_data[1] = member_data[index]
                                member_data[index] = intermediate

                                if(verification_member_data()){
                                    console.log('good')

                                    i = ii = iii = member_data.length
                                    jj = intermediate_index[j].arr.length
                                    j = intermediate_index.length

                                    not_render = 0

                                    console.log(JSON.parse(JSON.stringify(member_data)))

                                    break
                                }                                
                            }
                        }
                    }
                }
            }


            first_iteration = false
        }


        intermediate = []
        intermediate_arr = []
        validation_variable++
    }

    if(not_render > 1 && validation_variable < 5){
        member_data = JSON.parse(JSON.stringify(redundant_array))

console.log(13)

        not_render = 0 
        validation_variable++

        intermediate =  member_data[0]
        member_data[0] = member_data[member_data.length-1]
        member_data[member_data.length-1] = intermediate

        intermediate =  member_data[1]
        member_data[1] = member_data[member_data.length-2]
        member_data[member_data.length-2] = intermediate

        sort_arr()
    }
    else if(not_render > 1 && validation_variable < 10){
        member_data = JSON.parse(JSON.stringify(redundant_array))

console.log(31)

        not_render = 0 
        validation_variable++

        intermediate =  member_data[0]
        member_data[0] = member_data[member_data.length-1]
        member_data[member_data.length-1] = intermediate

        intermediate =  member_data[1]
        member_data[1] = member_data[member_data.length-2]
        member_data[member_data.length-2] = intermediate
        
        intermediate =  member_data[3]
        member_data[3] = member_data[member_data.length-3]
        member_data[member_data.length-3] = intermediate

        intermediate =  member_data[4]
        member_data[4] = member_data[member_data.length-4]
        member_data[member_data.length-4] = intermediate

        sort_arr()
    }
    else if(not_render > 1 && validation_variable < 15){
        member_data = JSON.parse(JSON.stringify(redundant_array))

console.log(133)

        not_render = 0 
        validation_variable++

        let middle = Math.round(member_data.length/2)

        intermediate =  member_data[0]
        member_data[0] = member_data[middle]
        member_data[middle] = intermediate

        intermediate =  member_data[middle+1]
        member_data[middle+1] = member_data[member_data.length-1]
        member_data[member_data.length-1] = intermediate
        
        sort_arr()
    }
    else if(not_render > 1 && validation_variable < 20){
        member_data = JSON.parse(JSON.stringify(redundant_array))

console.log(311)

        not_render = 0 
        validation_variable++

        
        for(let ii = 0; ii < member_data.length/2; ii++){
            let random = Math.round(0 + Math.random() * ((member_data.length-1)-0))
            let random1 = Math.round(0 + Math.random() * ((member_data.length-1)-0))

            intermediate =  member_data[random]
            member_data[random] = member_data[random1]
            member_data[random1] = intermediate
        }

        sort_arr()
    }
    else if(not_render > 1 && validation_variable < 30){
        member_data = JSON.parse(JSON.stringify(redundant_array))

console.log(3111)

        not_render = 0 
        validation_variable++

        let random = Math.round(0 + Math.random() * ((member_data.length-1)-0))

        intermediate =  member_data[0]
        member_data[0] = member_data[random]
        member_data[random] = intermediate

        sort_arr()
    }
}

function end_round(){
    validation_variable = 0
    counter_not_render = 1
    first_iteration = true
    copy_member_data = []

    for(let i = 0; i < member_data.length; i++){
        if(member_data[i].not_render == true){
            copy_member_data.push(member_data[i])
            member_data[i].score++
            // member_data.splice(i, 1)
            // i = 0
        }
    }

   for(let i = 0; i < copy_member_data.length; i++){
        copy_member_data[i].score++

        copy_member_data[i].rivals.push({
            round: round_current,
            result: 'rest'
        }) 
    }

    if(copy_member_data.length > 1){
        console.log('Количество пользователей без пары: ', JSON.parse(JSON.stringify(copy_member_data.length)))
        console.log('Пользователи без пары: ', JSON.parse(JSON.stringify(copy_member_data)))
    }

    // if(copy_member_data.length > 0){
    //     for(let i = 0; i < copy_member_data.length; i++){
    //         member_data.push(copy_member_data[i])
    //     }
    // }
}


function tour_results(){
    let who_won_counter = 0

    for(let i = 0; i < member_data.length; i = i + 2){
        if(who_won[who_won_counter] == 'draw'){
            member_data[i].score = member_data[i].score + 0.5
            member_data[i+1].score = member_data[i+1].score + 0.5

            member_data[i].rivals.push({
                round: round_current,
                id_player: member_data[i+1].player_number,
                color: color_distribution_coefficient[i],
                result: 'draw'
            }) 
            member_data[i+1].rivals.push({
                round: round_current,
                id_player: member_data[i].player_number,
                color: color_distribution_coefficient[i+1],
                result: 'draw'
            })
        }

        if(who_won[who_won_counter] == 'victory1'){
            member_data[i].score = member_data[i].score + 1

            member_data[i].rivals.push({
                round: round_current,
                id_player: member_data[i+1].player_number,
                color: color_distribution_coefficient[i],
                result: 'win'
            }) 
            member_data[i+1].rivals.push({
                round: round_current,
                id_player: member_data[i].player_number,
                color: color_distribution_coefficient[i+1],
                result: 'loss'
            })
        }

        if(who_won[who_won_counter] == 'victory2'){
            member_data[i+1].score = member_data[i+1].score + 1

            member_data[i].rivals.push({
                round: round_current,
                id_player: member_data[i+1].player_number,
                color: color_distribution_coefficient[i],
                result: 'loss'
            }) 
            member_data[i+1].rivals.push({
                round: round_current,
                id_player: member_data[i].player_number,
                color: color_distribution_coefficient[i+1],
                result: 'win'
            })
        }

        if(who_won[who_won_counter] == 'rest'){
            member_data[i].score = member_data[i].score + 1

            member_data[i].rivals.push({
                round: round_current,
                result: 'rest'
            })
        }

        who_won_counter++
    }
}


function btn_result(){
    who_won = []

    let btn_active = document.querySelectorAll('.active')

    if(member_data.length%2 == 0){
        for(let i = 0; i < member_data.length / 2; i++){
    
            let btn_active_reg = regular_btn_id(btn_active[i].id)
    
            if(btn_active_reg.let == 'mainSwiss_board_btn_draw'){
                who_won.push('draw')
            }
            if(btn_active_reg.let == 'mainSwiss_board_btn_victory'){
                if(btn_active_reg.num % 2 == 0){
                    who_won.push('victory1')
                }
    
                if(btn_active_reg.num % 2 != 0){
                    who_won.push('victory2')
                }
            }
        }
    }else{
        for(let i = 0; i < Math.round(member_data.length / 2); i++){
            // console.log(i)
            // console.log(btn_active)
    
            if(Math.round(member_data.length/2 - 1) != i){
                let btn_active_reg = regular_btn_id(btn_active[i].id)
        
                if(btn_active_reg.let == 'mainSwiss_board_btn_draw'){
                    who_won.push('draw')
                }
                if(btn_active_reg.let == 'mainSwiss_board_btn_victory'){
                    if(btn_active_reg.num % 2 == 0){
                        who_won.push('victory1')
                    }
        
                    if(btn_active_reg.num % 2 != 0){
                        who_won.push('victory2')
                    }
                }
            } else if((Math.round(member_data.length/2 - 1)) == i) {
                who_won.push('rest') 
            }
        }
    }
}

function color_distribution(){
    let random
    color_distribution_coefficient = []

    if(member_data.length%2 == 0){
        if(round_current > 2){
            for(let i = 0; i < member_data.length; i = i + 2){
                if((member_data[i].rivals[member_data[i].rivals.length - 1].color == 'Б') &&
                (member_data[i].rivals[member_data[i].rivals.length - 2].color == 'Б')){
                    member_data[i].color = 'Ч'
                    member_data[i+1].color = 'Б'
                    color_distribution_coefficient.push('Ч', 'Б')
                }
                else if((member_data[i].rivals[member_data[i].rivals.length - 1].color == 'Ч') &&
                (member_data[i].rivals[member_data[i].rivals.length - 2].color == 'Ч')){
                    member_data[i].color = 'Б'
                    member_data[i+1].color = 'Ч'
                    color_distribution_coefficient.push('Б', 'Ч')
                }
                else if((member_data[i+1].rivals[member_data[i+1].rivals.length - 1].color == 'Б') &&
                (member_data[i+1].rivals[member_data[i+1].rivals.length - 2].color == 'Б')){
                    member_data[i].color = 'Б'
                    member_data[i+1].color = 'ч'
                    color_distribution_coefficient.push('Б', 'Ч')
                }
                else if((member_data[i+1].rivals[member_data[i+1].rivals.length - 1].color == 'Ч') &&
                (member_data[i+1].rivals[member_data[i+1].rivals.length - 2].color == 'Ч')){
                    member_data[i].color = 'Ч'
                    member_data[i+1].color = 'Б'
                    color_distribution_coefficient.push('Ч', 'Б')
                }else{
                    let score1, score2

                    for(let ii = 0; ii < member_data[i].rivals.length; ii++){
                        if(member_data[i].rivals[ii].color == 'Б'){
                            score1++
                        }
                    }

                    for(let ii = 0; ii < member_data[i+1].rivals.length; ii++){
                        if(member_data[i+1].rivals[ii].color == 'Б'){
                            score2++
                        }
                    }

                    if(score1 > score2){
                        member_data[i].color = 'Ч'
                        member_data[i+1].color = 'Б'
                        color_distribution_coefficient.push('Ч', 'Б')
                    }else{
                        member_data[i].color = 'Б'
                        member_data[i+1].color = 'Ч'
                        color_distribution_coefficient.push('Б', 'Ч')
                    }
                }
            }
        }else{
            for(let i = 0; i < member_data.length; i = i + 2){
                random = Math.round(0 + Math.random() * (2-1))

                if(random == 1){
                    member_data[i].color = 'Б'
                    member_data[i+1].color = 'Ч'
                    color_distribution_coefficient.push('Б', 'Ч')
                }else{
                    member_data[i].color = 'Ч'
                    member_data[i+1].color = 'Б'
                    color_distribution_coefficient.push('Ч', 'Б')
                }
            }
        }
    }else{
        if(round_current > 2){
            for(let i = 0; i < member_data.length; i = i + 2){
                if((member_data.length-1) != i){

                    if((member_data[i].rivals[member_data[i].rivals.length - 1].color == 'Б') &&
                    (member_data[i].rivals[member_data[i].rivals.length - 2].color == 'Б')){
                        member_data[i].color = 'Ч'
                        member_data[i+1].color = 'Б'
                        color_distribution_coefficient.push('Ч', 'Б')
                    }
                    else if((member_data[i].rivals[member_data[i].rivals.length - 1].color == 'Ч') &&
                    (member_data[i].rivals[member_data[i].rivals.length - 2].color == 'Ч')){
                        member_data[i].color = 'Б'
                        member_data[i+1].color = 'Ч'
                        color_distribution_coefficient.push('Б', 'Ч')
                    }
                    else if((member_data[i+1].rivals[member_data[i+1].rivals.length - 1].color == 'Б') &&
                    (member_data[i+1].rivals[member_data[i+1].rivals.length - 2].color == 'Б')){
                        member_data[i].color = 'Б'
                        member_data[i+1].color = 'Ч'
                        color_distribution_coefficient.push('Б', 'Ч')
                    }
                    else if((member_data[i+1].rivals[member_data[i+1].rivals.length - 1].color == 'Ч') &&
                    (member_data[i+1].rivals[member_data[i+1].rivals.length - 2].color == 'Ч')){
                        member_data[i].color = 'Ч'
                        member_data[i+1].color = 'Б'
                        color_distribution_coefficient.push('Ч', 'Б')
                    }else{ 
                        let score1, score2

                        for(let ii = 0; ii < member_data[i].rivals.length; ii++){
                            if(member_data[i].rivals[ii].color == 'Б'){
                                score1++
                            }
                        }

                        for(let ii = 0; ii < member_data[i+1].rivals.length; ii++){
                            if(member_data[i+1].rivals[ii].color == 'Б'){
                                score2++
                            }
                        }

                        if(score1 > score2){
                            member_data[i].color = 'Ч'
                            member_data[i+1].color = 'Б'
                            color_distribution_coefficient.push('Ч', 'Б')
                        }else{
                            member_data[i].color = 'Б'
                            member_data[i+1].color = 'Ч'
                            color_distribution_coefficient.push('Б', 'Ч')
                        }
                    }
                }
            }
        }else{
            for(let i = 0; i < member_data.length - 2; i = i + 2){
                random = Math.round(0 + Math.random() * (2-1))

                if(random == 1){
                    member_data[i].color = 'Б'
                    member_data[i+1].color = 'Ч'
                    color_distribution_coefficient.push('Б', 'Ч')
                }else{
                    member_data[i].color = 'Ч'
                    member_data[i+1].color = 'Б'
                    color_distribution_coefficient.push('Ч', 'Б')
                }
            }
        }
    }
}



function active_buttons(){
    if(member_data.length % 2 == 0){
        for(let i = 0; i < member_data.length; i = i + 2){
            if((document.querySelector(`#mainSwiss_board_btn_victory${i}`)) != null){
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
        }
    }else{
        for(let i = 0; i < member_data.length - 1; i = i + 2){
            if((document.querySelector(`#mainSwiss_board_btn_victory${i}`)) != null){
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
        }
    }
}