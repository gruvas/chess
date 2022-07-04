import * as React from 'react'
import ReactDOM from "react-dom"
import { useHttp } from '../hooks/http.hook'



let member_data, tournament_data, member_data_copy
let table = []
let user = []
let user_byRounds = []
let tournament_id = localStorage.getItem('tournament_id')



function addActive_burger_black(){
    const menu_list_black = document.querySelector("#menu_list_black")
    const burger_black= document.querySelector(".menu_icon_black")

    menu_list_black.classList.toggle('active')
    burger_black.classList.toggle('active')
}

function sort_id(member_data){
    let intermediate

    for(let i = 0; i < member_data.length; i++){
        for(let ii = 0; ii < member_data.length - 1; ii++){
            if(member_data[ii].player_number > member_data[ii+1].player_number){
                intermediate = member_data[ii]
                member_data[ii] = member_data[ii+1]
                member_data[ii+1] = intermediate
            }
        }
    }

    return member_data
}

function render_tour_information(){
    let tournament = document.querySelectorAll('.tournament_data_title_field')
    
    tournament[0].textContent = `Название турнира: ${tournament_data.name_tour}`
    tournament[1].textContent = `Название организации: ${tournament_data.organizer}`
    tournament[2].textContent = `Даты проведения: ${tournament_data.date_beginning} - ${tournament_data.date_expiration}`
    tournament[3].textContent = `Тип игры: ${tournament_data.type_game}`
    tournament[4].textContent = `Система жеребьевки: ${tournament_data.type_tournament}`
}


function search_missing_values(){
    let intermediate_arr = []
    let user_intermediate = []
    let user_intermediate2 = []


    for(let i = 0; i < member_data.length; i++){
        intermediate_arr.push(member_data[i].rivals)
    }


    for(let i = 0; i < member_data.length; i++){
        member_data[i].rested = 0
    }
    

    for(let i = 0; i < intermediate_arr.length; i++){
        for(let ii = 0; ii < intermediate_arr[i].length-1; ii++){
            let intermediate

             if((intermediate_arr[i][ii].result == 'rest')){
                delete intermediate_arr[i][ii]

                intermediate_arr[i] = intermediate_arr[i].filter(function (el) {
                    return (el != null && el != "" || el === 0);
                });

                member_data[i].rested++
            }else if(intermediate_arr[i][ii].id_player > intermediate_arr[i][ii+1].id_player){
                intermediate = intermediate_arr[i][ii]
                intermediate_arr[i][ii] = intermediate_arr[i][ii+1]
                intermediate_arr[i][ii+1] = intermediate

                i = 0
                ii = 0
            }
        }
    }

    for(let i = 0; i < intermediate_arr.length; i++){
        if(intermediate_arr[i][intermediate_arr[i].length-1].result == 'rest'){
            delete intermediate_arr[i][intermediate_arr[i].length-1]

            intermediate_arr[i] = intermediate_arr[i].filter(function (el) {
                return (el != null && el != "" || el === 0);
            });

            member_data[i].rested++
        }
    }


    console.log('intermediate_arr', intermediate_arr)



    let copy = (JSON.parse(JSON.stringify(intermediate_arr)))


    for(let i = 0; i < member_data.length; i++){
        intermediate_arr = (JSON.parse(JSON.stringify(copy)))
        

        for(let ii = 0; ii < member_data.length; ii++){
            let check = false

            for(let j = 0; j < intermediate_arr[i].length; j++){

                if(member_data[i].player_number == (ii+1)){
                    user_intermediate.push(
                        <td className='gh_yourself'>&nbsp;</td>
                    )

                    check = true
                    j = intermediate_arr[i].length + 1
                }
                
                if(check == false){
                    if(intermediate_arr[i][j].id_player == (ii + 1)){
                        if(intermediate_arr[i][j].result == 'win'){
                            user_intermediate.push(
                                <td className='gh_win'>В</td>
                            )

                            check = true
                            j = intermediate_arr[i].length + 1
                        }else if(intermediate_arr[i][j].result == 'draw'){
                            user_intermediate.push(
                                <td className='gh_draw'>Н</td>
                            )

                            check = true
                            j = intermediate_arr[i].length + 1
                        }else if(intermediate_arr[i][j].result == 'loss'){
                            user_intermediate.push(
                                <td className='gh_loss'>П</td>
                            )

                            check = true
                            j = intermediate_arr[i].length + 1
                        }
                    }
                }
            }

            if(check == false){
                user_intermediate.push(
                    <td>&nbsp;</td>
                )
            }
        }

            
        user_intermediate.push(
            <td>{member_data[i].score}</td>
        )

        user_intermediate.push(
            <td>{member_data[i].rested}</td>
        )
    
        user_intermediate2.push(
            user_intermediate
        )
    
        user_intermediate = []
    }

    for(let i = 0; i < member_data.length; i++){
        user.push(
            <tr>
                <td>{member_data[i].player_number}</td>
                <td>{member_data[i].full_name}</td>

                {user_intermediate2[i]}
            </tr>
        )
    }
}






let table_body = []
let header = []

function table_generation(){

    header.push(
        <th key={0}>№</th>
    )
    header.push(
        <th  key={1}>Участник</th>
    )

    for(let i = 0; i < member_data.length; i++){
        header.push(
            <th  key={`test${i}`}>{i+1}</th>
        )
    }

    header.push(
        <th  key={2}>Общий счет</th>
    )

    header.push(
        <th  key={2}>Количество пропущенных туров</th>
    )


    table_body.push(
        <div key={table_body}>
            <table>
                <thead>
                    <tr className=''>
                        {header}
                    </tr> 
                    
                    {user}
                </thead>
            </table>
        </div>
    )

    ReactDOM.render(table_body, document.querySelector('.game_history_table'))
}

let header_tours = []
let table_body_tours = []

function table_generation_tours(){

    header_tours.push(
        <th key={0}>№</th>
    )

    header_tours.push(
        <th  key={1}>Участник</th>
    )

    for(let i = 0; i < tournament_data.tours_number; i++){
        header_tours.push(
            <th  key={`test${i}`}>{i+1}</th>
        )
    }

    header_tours.push(
        <th  key={2}>Общий счет</th>
    )

    header_tours.push(
        <th  key={2}>Количество пропущенных туров</th>
    )


    table_body_tours.push(
        <div key={table_body}>
            <table>
                <thead>
                    <tr className=''>
                        {header_tours}
                    </tr> 
                    
                    {user_byRounds}
                </thead>
            </table>
        </div>
    )

    ReactDOM.render(table_body_tours, document.querySelector('.game_history_table_2'))
}

function filling_table(){
    let number_missed_tours = 0
    let intermediate_arr = []
    let user_intermediate = []
    let user_intermediate2 = []

    for(let i = 0; i < member_data_copy.length; i++){
        intermediate_arr.push(member_data_copy[i].rivals)
    }


    for(let i = 0; i < member_data_copy.length; i++){
        member_data_copy[i].rested = 0
    }
    

    for(let i = 0; i < tournament_data.participants_number; i++){
        for(let ii = 0; ii < tournament_data.tours_number; ii++){
            if(member_data_copy[i].rivals.length > ii){
                if(member_data_copy[i].rivals[ii].result == 'win'){
                    if(member_data_copy[i].rivals[ii].color == 'Б'){
                        user_intermediate.push(
                            <td className='gh_win'>{`(Б) ${member_data_copy[i].player_number}:${member_data_copy[i].rivals[ii].id_player} (Ч)`}</td>
                        )
                    }else{
                        user_intermediate.push(
                            <td className='gh_win'>{`(Ч) ${member_data_copy[i].player_number}:${member_data_copy[i].rivals[ii].id_player} (Б)`}</td>
                        )
                    }
                }
                else if(member_data_copy[i].rivals[ii].result == 'loss'){
                    if(member_data_copy[i].rivals[ii].color == 'Б'){
                        user_intermediate.push(
                            <td className='gh_loss'>{`(Б) ${member_data_copy[i].player_number}:${member_data_copy[i].rivals[ii].id_player} (Ч)`}</td>
                        )
                    }else{
                        user_intermediate.push(
                            <td className='gh_loss'>{`(Ч) ${member_data_copy[i].player_number}:${member_data_copy[i].rivals[ii].id_player} (Б)`}</td>
                        )
                    }
                }
                else if(member_data_copy[i].rivals[ii].result == 'draw'){
                    if(member_data_copy[i].rivals[ii].color == 'Б'){
                        user_intermediate.push(
                            <td className='gh_draw'>{`(Б) ${member_data_copy[i].player_number}:${member_data_copy[i].rivals[ii].id_player} (Ч)`}</td>
                        )
                    }else{
                        user_intermediate.push(
                            <td className='gh_draw'>{`(Ч) ${member_data_copy[i].player_number}:${member_data_copy[i].rivals[ii].id_player} (Б)`}</td>
                        )
                    }
                }
                else{
                    user_intermediate.push(
                        <td>&nbsp;</td>
                    )

                    number_missed_tours++
                }
            }else{
                user_intermediate.push(
                    <td>&nbsp;</td>
                )
            }
        }

        user_intermediate.push(
            <td>{member_data_copy[i].score}</td>
        )
        
        user_intermediate.push(
            <td>{number_missed_tours}</td>
        )

        number_missed_tours = 0

        user_intermediate2.push(
            user_intermediate
        )

        user_intermediate = []
    }

    for(let i = 0; i < member_data_copy.length; i++){
        user_byRounds.push(
            <tr>
                <td>{member_data_copy[i].player_number}</td>
                <td>{member_data_copy[i].full_name}</td>

                {user_intermediate2[i]}
            </tr>
        )
    }
}





export const GameHistory = () => {
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
        document.body.classList.add('overflow_x')        
        
        await memberData(tournament_id)
        await tournamentData(tournament_id)

        member_data_copy = (JSON.parse(JSON.stringify(member_data)))
        console.log(member_data_copy)

        if(tournament_data.finished_tournament == true){
            document.querySelector('.link_login_main_swiss').classList.add('hide')
        }

        render_tour_information()

        member_data = await sort_id(member_data)
        member_data_copy = await sort_id(member_data_copy)

        await search_missing_values()
        
        await filling_table()

        console.log(member_data)

        await table_generation()

        await table_generation_tours()
    }











    return(
        <div>
            <button className="burger menu_icon menu_icon_black burger_pers_area_plus" onClick={addActive_burger_black}>
                <span></span>
            </button>
            <nav className="burger menu_body" id="">
                <ul className="menu_list" id="menu_list_black">
                        <p className="burger_type_game">История турнира</p>
                        <a href="personal_area" className="link_login">
                            <li>Личный кабинет</li>
                        </a>
                        <a href="leader_board" className="link_login">
                            <li>Таблица лидеров</li>
                        </a>
                        <a href="main_swiss" className="link_login link_login_main_swiss">
                            <li>Перейти обратно к матчу</li>
                        </a>
                </ul>
            </nav>
                

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

            
            <div className='game_history_table'>
                
            </div>


            <div className='game_history_table_2'>
                
            </div>
        </div>
    )
}

