export const StartPage = () => {
    return(
        <div className="no_scrolling ">
            <div className="container">
                <div className="sidebar">
                    {/* <div style="background:#000000;"> */}
                    <div style={{backgroundColor: "#000"}}>
                    <h1 className="startH startH_exception">Игра на выбывание</h1>
                    <button className="startBt startBt_exception">
                        Начать
                    </button>
                    </div>
                    {/* <div style="background:#0B1922;"> */}
                    <div style={{backgroundColor: "#0B1922"}}>
                    <h1 className="startH startH_circle">Жеребьевка по<br></br> круговой системе</h1>
                    <button className="startBt startBt_circle">
                        Начать
                    </button>
                    </div>
                    {/* <div style="background:#FFCB7B;"> */}
                    <div style={{backgroundColor: "#FFCB7B"}}>
                    <h1 className="startH startH_swiss">Жеребьевка по<br></br> швейцарской системе</h1>
                    <button className="startBt startBt_swiss">
                        Начать
                    </button>
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
