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
            <button className="burger menu_icon menu_icon_black" id="menu_icon_black">
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
        </div>
    )
}
