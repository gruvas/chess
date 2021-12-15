let counter_dropDawn = 0;
let slides_db = 2


function addActive_burger_black(){
    const menu_icon_black = document.querySelector("#menu_icon_black")
    const menu_list_black = document.querySelector("#menu_list_black")

    menu_list_black.classList.toggle('active')
    menu_icon_black.classList.toggle('active')
    console.log('black')
}

function addActive_burger_white(){
    const menu_list_white = document.querySelector("#menu_list_white")
    const burger_white = document.querySelector(".burger_white")

    menu_list_white.classList.toggle('active')
    burger_white.classList.toggle('active')
    console.log('white')
}




function check_activeElement(){
    const mode_selection = document.querySelector('.mode_selection')
    let slides = document.querySelector('.slide.active').id
    const horizontal_menu_div = document.querySelector('.horizontal_menu_div')
    const main_information = document.querySelector('.main_information')
    // Переменная для бд (выбор режима)

    if(slides == 'slide_1'){
        slides_db = 1
    }else if(slides == 'slide_2'){
        slides_db = 2
    }

    mode_selection.classList.add('hide')
    horizontal_menu_div.classList.remove('hide')
    main_information.classList.remove('hide')
}


function ClearActiveClasses(){
    const slides = document.querySelectorAll('.slide')

    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

function clouse_dropdown(){
    const dropDawn_btn = document.querySelector('.dropDawn_btn')
    const dropDawn_subtext = document.querySelector('.basic_information_dropDawn_time')
    const dropDawn_title = document.querySelector('.dropDawn_title')

    dropDawn_title.style.height = "30px"
    dropDawn_subtext.classList.add('hide')

    dropDawn_btn.style.transform = 'scaleY(1)'

    counter_dropDawn = 0
}
function open_dropdown(){
    const dropDawn_btn = document.querySelector('.dropDawn_btn')
    const dropDawn_subtext = document.querySelector('.basic_information_dropDawn_time')
    const dropDawn_title = document.querySelector('.dropDawn_title')

    dropDawn_title.style.height = "75px"
    window.setTimeout(function(){
        dropDawn_subtext.classList.remove('hide')
    }, 131)

    dropDawn_btn.style.transform = 'scaleY(-1)'
}

function clouse_and_open_dropdown(){
    if(counter_dropDawn == 0){
        open_dropdown()

        counter_dropDawn = 1
    }else if(counter_dropDawn == 1){
        clouse_dropdown()

        counter_dropDawn = 0
    }
}

function new_page(item_number_remove, item_number_add, block_hide, block_show){
    const horizontal_menu = document.querySelectorAll('.horizontal_menu p')

    horizontal_menu[item_number_remove].classList.remove('horizontal_menu_underline')
    horizontal_menu[item_number_add].classList.add('horizontal_menu_underline')
    block_hide.classList.add('hide')
    block_show.classList.remove('hide')
}



function Swiss(){
    const burger = document.querySelector(".menu_icon")
    const menu_list_black = document.querySelector("#menu_list_black")
    const sidebar = document.querySelector(".sidebar")
    const startBt = document.querySelector(".startBt")
    const header = document.querySelector(".header")
    const burger_white = document.querySelector(".burger_white")
    const scroll = document.querySelector("body")
    const mode_selection_btn = document.querySelector('.mode_selection_btn')
    const mode_selection = document.querySelector('.mode_selection')
    const dropDawn_btn = document.querySelector('.dropDawn_btn')
    const dropDawn_title_p = document.querySelector('.dropDawn_title_p')
    const main_information = document.querySelector('.main_information')
    const horizontal_menu = document.querySelectorAll('.horizontal_menu p')
    const horizontal_menu_div = document.querySelector('.horizontal_menu_div')
    const basic_information_comeBack = document.querySelector('.basic_information_comeBack')
    const basic_information_proceed = document.querySelector('.basic_information_proceed')

    const basic_information_teamsAmount_div = document.querySelector('#basic_information_teamsAmount_div')
    const basic_information_teamsAmount_input = document.querySelector('#basic_information_teamsAmount_input')
    const basic_information_participants_text = document.querySelector('#basic_information_participants_text')

    const basic_information_tournament_name = document.querySelector('#basic_information_tournament_name')
    const basic_information_organizer = document.querySelector('#basic_information_organizer')
    const basic_information_time_amount = document.querySelector('#basic_information_time_amount')
    const basic_information_time_type = document.querySelector('#basic_information_time_type')
    const basic_information_participants_amount = document.querySelector('#basic_information_participants_amount')
    const basic_information_tours_amount = document.querySelector('#basic_information_tours_amount')

    const fillingParticipants_btn_comeBack = document.querySelector('#fillingParticipants_btn_comeBack')
    const fillingParticipants_btn_proceed = document.querySelector('#fillingParticipants_btn_proceed')
    const completion_registration = document.querySelector('.completion_registration')

    const completion_registration_btn_comeBack = document.querySelector('#completion_registration_btn_comeBack')
    const completion_registration_btn_proceed = document.querySelector('#completion_registration_btn_proceed')

    // Переменные для формы заполнения участников
    const filling_participants = document.querySelector('.fillingParticipants')

    const slides = document.querySelectorAll('.slide')

    document.addEventListener("DOMContentLoaded", function(event)
    {
        window.onresize = function() {
            if(window.innerWidth > 864){
                if(sidebar.offsetWidth != 0){
                    menu_list_black.style.width = sidebar.offsetWidth + "px"
                }
            }
        };
    });
    
    if(localStorage.getItem('startScreen') == undefined){
        localStorage.setItem('startScreen', "0")
        burger_white.classList.add('hide')
    
        scroll.classList.remove('overScr')
    }else if(localStorage.getItem('startScreen') == 0){
        burger_white.classList.add('hide')
    
        scroll.classList.remove('overScr')
    }else if(localStorage.getItem('startScreen') == 1){
        header.classList.add('hide')
        burger_white.classList.remove('hide')
    
        //  Раскоментировать когда будет закончено
        mode_selection.classList.remove('hide')
    
        scroll.classList.add('overScr')
    }

    startBt.addEventListener('click', function(){
        header.classList.add('hide')
        localStorage.setItem('startScreen', "1")
    
        burger_white.classList.remove('hide')
    
        mode_selection.classList.remove('hide')
    })

    burger.addEventListener('click', addActive_burger_black)

    burger_white.addEventListener('click', addActive_burger_white)

    mode_selection_btn.addEventListener('click', function(){
            horizontal_menu[1].classList.add('horizontal_menu_underline')

            check_activeElement()
            if(slides_db == 1){
                basic_information_teamsAmount_div.classList.add('hide')
                basic_information_participants_text.textContent = "Количество участников"
            }else if(slides_db == 2){
                basic_information_teamsAmount_div.classList.remove('hide')
                basic_information_participants_text.textContent = "Человек в одной команде"
            }
        }
    )

    dropDawn_btn.addEventListener('click', clouse_and_open_dropdown)

    document.addEventListener("click", function (e) {
        if(e.target.textContent == "Часы"){
            dropDawn_title_p.textContent = "Часы"
            clouse_dropdown()
        }else if(e.target.textContent == "Минуты"){
            dropDawn_title_p.textContent = "Минуты"
            clouse_dropdown()
        }
    });

    basic_information_comeBack.addEventListener('click', function(){
        mode_selection.classList.remove('hide')
        horizontal_menu_div.classList.add('hide')
        main_information.classList.add('hide')
    })
    
    basic_information_proceed.addEventListener('click', function(){
        // Отправка в бд основной информации и переход на следующую форму
        // Дописать саму отправку в бд
        let tournament_name, organizer, time_amount,
        time_type, participants_amount, tours_amount, teams_amount
    
        tournament_name = basic_information_tournament_name.value
        organizer = basic_information_organizer.value
        time_amount = basic_information_time_amount.value
        time_type = basic_information_time_type.textContent
        participants_amount = basic_information_participants_amount.value
        tours_amount = basic_information_tours_amount.value
        teams_amount = basic_information_teamsAmount_input.value
    
        new_page(1, 2, main_information, filling_participants)
    })
    
    // fillingParticipants_btn_comeBack.addEventListener('click', new_page(2, 1, filling_participants, main_information))
    fillingParticipants_btn_comeBack.addEventListener('click', function(){
        new_page(2, 1, filling_participants, main_information)
    })
    
    fillingParticipants_btn_proceed.addEventListener('click', function(){
        new_page(2, 3, filling_participants, completion_registration)
    })
    
    completion_registration_btn_comeBack.addEventListener('click', function(){
        new_page(3, 2, completion_registration, filling_participants)
    })
    
    
    // Первая цифра отвечает за удаление подчеркивания у заголовака,
    // вторая за добавления подчеркивания заголовку
    // третий параметр скрывает текущее акно
    // четвертый показывает следующее окно
    
    
    
    
    for(const slide of slides){
        slide.addEventListener('click', ()=>{
            ClearActiveClasses()
    
            slide.classList.add('active')
        })
    }
}

export {Swiss}