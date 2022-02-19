function addActive_burger_black(){
    const menu_icon_black = document.querySelector("#menu_icon_black")
    const menu_list_black = document.querySelector("#menu_list_black")

    menu_list_black.classList.toggle('active')
    menu_icon_black.classList.toggle('active')
}




export const ContinueTour = () => {
    setTimeout(function(){
        const menu_icon_black = document.querySelector("#menu_icon_black")

        menu_icon_black.addEventListener('click', addActive_burger_black)
    }, 1)

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

                <div className="continue_tour_space_between">
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

                <hr className="continue_tour_hr"></hr>

            </div>
        </div>
    )
}
