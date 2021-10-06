import eye from '../img/eye.svg'

export const LoginDom = () => {
    return(
        <div>
            <button className="burger menu_icon menu_icon_black" id="menu_icon_black">
                        <span></span>
            </button>
            <nav className="burger menu_body">
                <ul className="menu_list" id="menu_list_black">
                    <a className="previous_page_link">
                        <li>Вернуться на <br></br>
                        страницу выбора режима</li>
                    </a>
                </ul>
            </nav>

            <div className="login_container">
                <p className="login_title">Вход</p>
                <div className="login_input_name">
                    <p className="input_name_title login_input_name_title">Имя</p>
                    <input className="input_txBox login_input_name_textBox" type="text"></input>
                </div>
                <div className="login_input_password">
                    <p className="input_name_title login_input_password_title">Пароль</p>
                    <div className="password_bloc">
                        <input className="input_txBox login_input_password_textBox" type="password"></input>
                        <button className="password_bloc_btn">
                            <img className="password_bloc_img" src={eye} alt=""></img>
                        </button>
                    </div>
                </div>
                <div className="login_btn">
                    <button className="login_btn_registration main_btn">
                        Регистрация
                    </button>
                    <button className="login_btn_entry main_btn">
                        Вход
                    </button>
                </div>
            </div>
        </div>
    )
}