import dropDawn_btn from "../img/arrow_down.svg"

export const SwissDom = () => {
    return(
        <div>
            <div className="header">
                <button className="burger menu_icon menu_icon_black" id="menu_icon_black">
                    <span></span>
                </button>
                <nav className="burger menu_body">
                    <ul className="menu_list" id="menu_list_black">
                        <a className="link_login">
                            <li>Вход/Регистрация</li>
                        </a>
                        <a className="previous_page_link">
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
                        <a className="link_login">
                            <li>Вход/Регистрация</li>
                        </a>
                        <a>
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
                        <h3>Команда против команды</h3>
                    </div>
                </div>
                <button className="mode_selection_btn">
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
                            <input id="basic_information_tournament_name" type="text" className="basic_information_name_input input_txBox"></input>
                        </div>
                        <div className="basic_information_organization">
                            <h1 className="basic_information_title basic_information_organization_title">
                                Организатор
                            </h1>
                            <input id="basic_information_organizer" type="text" className="basic_information_organization_input input_txBox"></input>
                        </div>

                        <div className="basic_information_Container">
                            <div className="basic_information_time">
                                <h1 className="basic_information_title basic_information_time_title">
                                    Время 1 матча
                                </h1>
                                <div className="input_time">
                                    <input id="basic_information_time_amount" onKeyPress={validate} type="text" placeholder="60" className="basic_information_time_inputQuantity input_txBox"></input>
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
                                <input id="basic_information_tours_amount" onKeyPress={validate} type="text" className="basic_information_numberTours_input input_txBox"></input>
                            </div>

                            <div className="horizontal_line"></div>

                            <div className="basic_information_numberParticipants">
                                <h1 id="basic_information_participants_text" className="basic_information_title basic_information_numberParticipants_title">
                                    Количество участников
                                </h1>
                                <input id="basic_information_participants_amount" onKeyPress={validate} type="text" className="basic_information_numberParticipants_input input_txBox"></input>
                            </div>

                        </div>

                        <div id="basic_information_teamsAmount_div" className="basic_information_numberTeam">
                            <h1 id="basic_information_teamsAmount_text" className="basic_information_title basic_information_numberParticipants_title">
                                Количество команд
                            </h1>
                            <input id="basic_information_teamsAmount_input" onKeyPress={validate} type="text" className="basic_information_numberParticipants_input input_txBox"></input>
                        </div>

                        <div className="btn_bottom_page">
                            <button className="main_btn basic_information_comeBack">
                                Вернуться назад
                            </button>
                            <button className="main_btn basic_information_proceed">
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
                        <button id="fillingParticipants_btn_proceed" className="main_btn">
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