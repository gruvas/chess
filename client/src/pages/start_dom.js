import {NavLink} from 'react-router-dom'

export const StartPage = () => {
    return(
        <div className="no_scrolling">
            <div className="container">
                <button className="burger menu_icon burger_white">
                    <span className="test"></span>
                </button>
                <nav className="burger menu_body">
                    <ul className="menu_list" id="menu_list_white">
                        <a href="personal_area" className="previous_page_link">
                            <li>Перейти в <br></br>
                            личный кабинет</li>
                        </a>
                    </ul>
                </nav>

                <div className="sidebar">
                    <div style={{backgroundColor: "#000"}}>
                    <h1 className="startH startH_exception">Игра на выбывание</h1>
                        <NavLink to="/exception">
                            <button className="startBt startBt_exception">
                                Начать
                            </button>
                        </NavLink>
                    </div>
                    <div style={{backgroundColor: "#0B1922"}}>
                    <h1 className="startH startH_circle">Жеребьевка по<br></br> круговой системе</h1>
                        <NavLink to="/circle">
                            <button className="startBt startBt_circle">
                                Начать
                            </button>
                        </NavLink>
                    </div>
                    <div style={{backgroundColor: "#FFCB7B"}}>
                    <h1 className="startH startH_swiss">Жеребьевка по<br></br> швейцарской системе</h1>
                        <NavLink to="/swiss">
                            <button className="startBt startBt_swiss">
                                Начать
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className="main-slide">
                    <div className="start_img_2"></div>
                    <div className="start_img_1"></div>
                    <div className="start_img_3"></div>
                </div>
                <div className="controls">
                    <button className="down-button">
                        <div className="down-button_arrow">
                            <i className="fas fa-arrow-down"></i>
                        </div>
                    </button>
                    <button className="up-button">
                        <div className="up-button_arrow">
                            <i className="fas fa-arrow-down"></i>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
