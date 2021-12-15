import {Start} from './start'
import {StartPage as StartDom} from './start_dom'

const StartPage = () => {
    setTimeout(function(){
        Start()
    }, 1)

    return(
        <div>
            <StartDom/>
        </div>
    )
}

export {StartPage}