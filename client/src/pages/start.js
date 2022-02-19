// const upBtn = document.querySelector('.up-button')
// const downBtn = document.querySelector('.down-button')
// const sidebar = document.querySelector('.sidebar')
// const mainSlide = document.querySelector('.main-slide')
// const slidesCount = mainSlide.querySelectorAll('div').length
// const container = document.querySelector('.container')

// const link_btn_swiss = document.querySelector('.startBt_swiss')
// const link_btn_circle = document.querySelector('.startBt_circle')
// const link_btn_exception = document.querySelector('.startBt_exception')

let counter = 0

// link_btn_swiss.onclick = link_swiss
// link_btn_circle.onclick = link_swiss
// link_btn_exception.onclick = link_swiss

// document.addEventListener('keyup', (e) => {
//     if(e.code == 'Enter'){
//         if(activeSlideIndex == 1){
//             link_circle()
//         }else if(activeSlideIndex == 2){
//             link_exception()
//         }else{
//             link_swiss()
//         }
//     }
// })

function link_swiss(){
    //Жеребьевка по швейцарской системе
    // document.location.href = "/swiss"
}
function link_circle(){
    //Жеребьевка по круговой системе
    // document.location.href = "/circle"
}
function link_exception(){
    //Игра на выбывание
    // document.location.href = "/exception"
}

let activeSlideIndex = 0

// sidebar.style.top = `-${(slidesCount - 1)*100}vh`

// upBtn.addEventListener('click', () => {
//     changeSlide('up')
// })
// document.addEventListener('keyup', (e) => {
//     if(e.code == 'ArrowUp'){
//         changeSlide('up')
//     }
// })

// downBtn.addEventListener('click', () => {
//     changeSlide('down')
// })
// document.addEventListener('keyup', (e) => {
//     if(e.code == 'ArrowDown'){
//         changeSlide('down')
//     }
// })

function changeSlide(direction){
    const mainSlide = document.querySelector('.main-slide')
    const slidesCount = mainSlide.querySelectorAll('div').length
    const container = document.querySelector('.container')
    const sidebar = document.querySelector('.sidebar')

    if(direction === 'up')
    activeSlideIndex++
    if(activeSlideIndex === slidesCount){
        activeSlideIndex = 0
    }else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`//Right

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`//Left
}


function click_burger(){
    const menu_icon = document.querySelector(".menu_icon")
    const menu_list_white = document.querySelector("#menu_list_white")

    menu_icon.classList.toggle('active')
    menu_list_white.classList.toggle('active')
    console.log('burger_start')
}




function Start(){
    // const link_btn_swiss = document.querySelector('.startBt_swiss')
    const upBtn = document.querySelector('.up-button')
    const downBtn = document.querySelector('.down-button')
    const sidebar = document.querySelector('.sidebar')
    const mainSlide = document.querySelector('.main-slide')
    const slidesCount = mainSlide.querySelectorAll('div').length

    // const link_btn_swiss = document.querySelector('.startBt_swiss')
    const link_btn_circle = document.querySelector('.startBt_circle')
    const link_btn_exception = document.querySelector('.startBt_exception')

    const menu_icon = document.querySelector(".menu_icon")

    menu_icon.addEventListener('click', click_burger)
    // menu_icon.addEventListener('click', function(){
    //     console.log('da')
    // })

    // link_btn_swiss.onclick = link_swiss
    link_btn_circle.onclick = link_swiss
    link_btn_exception.onclick = link_swiss

    document.addEventListener('keyup', (e) => {
        if(e.code == 'Enter'){
            if(activeSlideIndex == 1){
                link_circle()
            }else if(activeSlideIndex == 2){
                link_exception()
            }else{
                link_swiss()
            }
        }
    })

    // link_btn_swiss.addEventListener('click', function(){
    //     document.location.href = '/swiss'
    // })


    sidebar.style.top = `-${(slidesCount - 1)*100}vh`

    upBtn.addEventListener('click', () => {
        changeSlide('up')
    })
    document.addEventListener('keyup', (e) => {
        if(e.code == 'ArrowUp'){
            changeSlide('up')
        }
    })

    downBtn.addEventListener('click', () => {
        changeSlide('down')
    })
    document.addEventListener('keyup', (e) => {
        if(e.code == 'ArrowDown'){
            changeSlide('down')
        }
    })
}

export {Start}