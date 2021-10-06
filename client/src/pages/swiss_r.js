import user_photo from "../img/user.png"

let number_users = 7
let counter_users = 0

// Тип игры. 1 обозначает 1 vs 1
// 2 обозначает team vs team
// Достать из бд
let game_type = 2

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

export function generation_fillingParticipants() {
    let array_user_fields  = []

    counter_users = 0
    let users_id, btn_id, user_photo_id, input_fio_id
    let input_age_id, input_rank_id, user_photo_key,btn_hide_id

    if(game_type == 1){
        for(let i = 0; i < number_users; i++){
            counter_users++
            users_id = "fillingParticipants_user_container_" + counter_users
            btn_id = "fillingParticipants_btn_" + counter_users
            btn_hide_id = "fillingParticipants_hide_btn_" + counter_users
            user_photo_id = "fillingParticipants_user_photo_" + counter_users
            user_photo_key = "fillingParticipants_user_photo_key_" + counter_users
            input_fio_id = "input_fio_" + counter_users
            input_age_id = "input_age_" + counter_users
            input_rank_id = "input_discharge_" + counter_users

            array_user_fields.push(
                <div key={users_id} className="fillingParticipants_user_container">
                    <div className="fillingParticipants_user_fields">
                        <div className="fillingParticipants_number">
                            {i+1}.
                        </div>

                        <div className="fillingParticipants_name">
                            <h1 className="fillingParticipants_title">
                                ФИО
                            </h1>
                            <input id={input_fio_id} className="input_txBox input_txBox_title" type="text"></input>
                        </div>

                        <div className="fillingParticipants_age">
                            <h1 className="fillingParticipants_title">
                                Возраст
                            </h1>
                            <input id={input_age_id} onKeyPress = {validate} className="input_txBox input_txBox_digit" type="text"></input>
                        </div>

                        <div className="fillingParticipants_discharge">
                            <h1 className="fillingParticipants_title">
                                Разряд
                            </h1>
                            <input id={input_rank_id} className="input_txBox input_txBox_discharge" type="text"></input>
                        </div>
                        <button id = {btn_id} className="fillingParticipants_btn">
                            Добавить фотографию участника
                        </button>
                    </div>

                    <div id={user_photo_id} className="fillingParticipants_user_photo hide">
                        <img key={user_photo_key} className="fillingParticipants_user_img" id={user_photo_key} src={user_photo} alt="Изображение участника"></img>

                        <div className="fillingParticipants_user_photo_right">
                            <button id={btn_hide_id} className="fillingParticipants_btn_hide">
                                Скрыть
                            </button>

                            <div className="fillingParticipants_add_img">
                                <p>
                                    Загрузите файл со своего устройства не привышающего 2 мб.
                                </p>
                                <button className="fillingParticipants_btn_add_img">
                                    Доавить фотографию участника
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    } else if(game_type == 2){
        let number_team = 4
        let number_people_team = 4
        let hr_team, block_team

        for(let ii = 0; ii < number_team; ii++){
            block_team = "block_team" + (ii + 1)

            array_user_fields.push(
                <div key={block_team} className = "fillingParticipants_team_number">
                    Команда №{ii + 1}
                </div>
            )
            hr_team = "hr_team" + (ii + 1)
            
            for(let i = 0; i < number_people_team; i++){
                counter_users++
                users_id = "fillingParticipants_user_container_" + counter_users
                btn_id = "fillingParticipants_btn_" + counter_users
                btn_hide_id = "fillingParticipants_hide_btn_" + counter_users
                user_photo_id = "fillingParticipants_user_photo_" + counter_users
                user_photo_key = "fillingParticipants_user_photo_key_" + counter_users
                input_fio_id = "input_fio_" + counter_users
                input_age_id = "input_age_" + counter_users
                input_rank_id = "input_discharge_" + counter_users

                array_user_fields.push(
                    <div key={users_id} className="fillingParticipants_user_container">
                        <div className="fillingParticipants_user_fields">
                            <div className="fillingParticipants_number">
                                {i+1}.
                            </div>

                            <div className="fillingParticipants_name">
                                <h1 className="fillingParticipants_title">
                                    ФИО
                                </h1>
                                <input id={input_fio_id} className="input_txBox input_txBox_title" type="text"></input>
                            </div>

                            <div className="fillingParticipants_age">
                                <h1 className="fillingParticipants_title">
                                    Возраст
                                </h1>
                                <input id={input_age_id} onKeyPress = {validate} className="input_txBox input_txBox_digit" type="text"></input>
                            </div>

                            <div className="fillingParticipants_discharge">
                                <h1 className="fillingParticipants_title">
                                    Разряд
                                </h1>
                                <input id={input_rank_id} className="input_txBox input_txBox_discharge" type="text"></input>
                            </div>
                            <button id = {btn_id} className="fillingParticipants_btn">
                                Добавить фотографию участника
                            </button>
                        </div>

                        <div id={user_photo_id} className="fillingParticipants_user_photo hide">
                            <img key={user_photo_key} className="fillingParticipants_user_img" src={user_photo} alt="Изображение участника"></img>

                            <div className="fillingParticipants_user_photo_right">
                                <button id={btn_hide_id} className="fillingParticipants_btn_hide">
                                    Скрыть
                                </button>

                                <div className="fillingParticipants_add_img">
                                    <p>
                                        Загрузите файл со своего устройства не привышающего 2 мб.
                                    </p>
                                    <button className="fillingParticipants_btn_add_img">
                                        Доавить фотографию участника
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            if((ii+1) != number_team){
                array_user_fields.push(
                    <hr key={hr_team} className="completion_registration_hr"></hr>
                )
            }
        }
    }
    return(array_user_fields)
}



let array_team = []
let element_line
// generation_complete_checkout()

export function generation_complete_checkout(){
    let array_user_fields = []
    let counter_users = 1

    if(game_type == 1){
        for(let i = 0; i < number_users; i++){
            array_user_fields.push(
                <div key={'completion_registration_participants' + counter_users} className="completion_registration_user">
                    <h1 className="completion_user_number">
                        {counter_users++}.
                    </h1>

                    <div className="completion_user_indent">
                        <div className="completion_user_fullName">
                            <h1 id="completion_user_fullName_title_1" className="completion_registration_text">
                                ФИО:
                            </h1>
                            <h1 id="completion_user_fullName_text_1" className="completion_registration_text">
                                test_text
                            </h1>
                        </div>

                        <div className="completion_user_age">
                            <h1 id="completion_user_age_title_1" className="completion_registration_text">
                                Возраст:
                            </h1>
                            <h1 id="completion_user_age_text_1" className="completion_registration_text">
                                test_text
                            </h1>
                        </div>

                        <div className="completion_user_rank">
                            <h1 id="completion_user_rank_title_1" className="completion_registration_text">
                                Разряд:
                            </h1>
                            <h1 id="completion_user_rank_text_1" className="completion_registration_text">
                                test_text
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

        return(array_user_fields)
        // ReactDOM.render(array_user_fields, document.querySelector('.completion_registration_participants'))
    }else if(game_type == 2){
        let number_team = 4
        let number_people_team = 4

        // for(let ii = 0; ii < number_team; ii++){
        //     let block_team = "block_team" + ii;
        //     element_line = "element_line_" + ii

        //     array_team.push(
        //         <div key={block_team}>
        //             <div className = "fillingParticipants_team">
        //                 Команда №{ii + 1}
        //             </div>

        //             <div id={element_line} className="fillingParticipants_team_number">

        //             </div>
        //         </div>
        //     )
        // }

        // ReactDOM.render(array_team, document.querySelector('.completion_registration_participants'))

        let key_counter = 0

        array_user_fields = []

        for(let ii = 0; ii < number_team; ii++){
            for(let i = 0; i < number_people_team; i++){
                array_user_fields.push(
                    <div key={'completion_registration_participants' + key_counter} className="completion_registration_user">
                        <h1 className="completion_user_number">
                            {i + 1}.
                        </h1>

                        <div className="completion_user_indent">
                            <div className="completion_user_fullName">
                                <h1 id="completion_user_fullName_title_1" className="completion_registration_text">
                                    ФИО:
                                </h1>
                                <h1 id="completion_user_fullName_text_1" className="completion_registration_text">
                                    test_text
                                </h1>
                            </div>

                            <div className="completion_user_age">
                                <h1 id="completion_user_age_title_1" className="completion_registration_text">
                                    Возраст:
                                </h1>
                                <h1 id="completion_user_age_text_1" className="completion_registration_text">
                                    test_text
                                </h1>
                            </div>

                            <div className="completion_user_rank">
                                <h1 id="completion_user_rank_title_1" className="completion_registration_text">
                                    Разряд:
                                </h1>
                                <h1 id="completion_user_rank_text_1" className="completion_registration_text">
                                    test_text
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
                key_counter++
            }

            element_line = "element_line_" + ii
            let intermediate_variable = '#' + element_line
            // ReactDOM.render(array_user_fields, document.querySelector(`${intermediate_variable}`))
            // array_user_fields = []
        }

        return(array_user_fields)
    }
}

export function array_team_ret(){
    let number_team = 4

    for(let ii = 0; ii < number_team; ii++){
        let block_team = "block_team" + ii;
        element_line = "element_line_" + ii

        array_team.push(
            <div key={block_team}>
                <div className = "fillingParticipants_team">
                    Команда №{ii + 1}
                </div>

                <div id={element_line} className="fillingParticipants_team_number">

                </div>
            </div>
        )
    }
    return(array_team)
}

let array_db = []
let user = {
    name: 'hi',
    age: 13,
    rank: '1 юношеский',
    phote: ''
}

export function take_data_fields(){
    let fio, age, rank, ii

    for(let i = 0; i < number_users; i++){
        ii = i + 1

        fio = "#input_fio_" + ii
        age = "#input_age_" + ii
        rank = "#input_discharge_" + ii

        user.name = document.querySelector(fio).value
        user.age = document.querySelector(age).value
        user.rank = document.querySelector(rank).value

        // Массив со всеми значениями для бд
        array_db.push(JSON.parse(JSON.stringify(user)))
    }
}
















function unit_show(id){
    let btn_add_photo = document.querySelectorAll('.fillingParticipants_btn')
    let img_unit = document.querySelectorAll('.fillingParticipants_user_photo')

    let fillingParticipants_age = document.querySelectorAll('.fillingParticipants_age')
    let fillingParticipants_discharge = document.querySelectorAll('.fillingParticipants_discharge')
    let fillingParticipants_name = document.querySelectorAll('.fillingParticipants_name')

    btn_add_photo[id].classList.add('hide')
    img_unit[id].classList.remove('hide')

    if(window.innerWidth > 636){
        fillingParticipants_name[id].style.width = '70.6%'
        fillingParticipants_age[id].style.width = '10%'
        fillingParticipants_discharge[id].style.width = '20%'
    }else if(window.innerWidth < 636){
        fillingParticipants_name[id].style.width = '90%'
        fillingParticipants_age[id].style.width = '90%'
        fillingParticipants_discharge[id].style.width = '90%'
    }
}

function unit_hide(id){
    let btn_add_photo = document.querySelectorAll('.fillingParticipants_btn')
    let img_unit = document.querySelectorAll('.fillingParticipants_user_photo')

    let fillingParticipants_age = document.querySelectorAll('.fillingParticipants_age')
    let fillingParticipants_discharge = document.querySelectorAll('.fillingParticipants_discharge')
    let fillingParticipants_name = document.querySelectorAll('.fillingParticipants_name')

    btn_add_photo[id].classList.remove('hide')
    img_unit[id].classList.add('hide')

    if(window.innerWidth > 636){
        fillingParticipants_name[id].style.width = '40%'
        fillingParticipants_age[id].style.width = '10%'
        fillingParticipants_discharge[id].style.width = '18%'
    } else if(window.innerWidth < 636){
        fillingParticipants_name[id].style.width = '91%'
        fillingParticipants_age[id].style.width = '90%'
        fillingParticipants_discharge[id].style.width = '90%'
    }
}

function swiss_r(){
    const fillingParticipants_btn_proceed = document.querySelector('#fillingParticipants_btn_proceed')
    // const basic_information_proceed = document.querySelector('.basic_information_proceed')
    const completion_registration_numberTours_title = document.querySelector(".completion_registration_numberTours_title")
    const block_number_commands = document.querySelector("#block_number_commands")


    // basic_information_proceed.addEventListener('click', function(){
    //         generation_fillingParticipants()
    //     }
    // )

    fillingParticipants_btn_proceed.addEventListener('click', function(){
        if(game_type == 2){
            completion_registration_numberTours_title.textContent = "Человек в одной команде:"

            block_number_commands.classList.remove('hide')
        }else if(game_type == 1){
            block_number_commands.classList.add('hide')
            completion_registration_numberTours_title.textContent = "Количество участников:"
        }

            // generation_complete_checkout()
            // take_data_fields()
        }
    )

    document.addEventListener("click", function (e) {
        if(e.target.classList == "fillingParticipants_btn"){
            let id = parseInt(e.target.id.match(/\d+/)) - 1
    
            unit_show(id)
    
        }else if(e.target.classList == "fillingParticipants_btn_hide"){
            let id = parseInt(e.target.id.match(/\d+/)) - 1
            console.log(id)
            unit_hide(id)
        }
    });
}

export {swiss_r}