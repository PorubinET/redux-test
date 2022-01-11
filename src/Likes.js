// компонент likes

import { connect } from 'react-redux' 
// соединяем react с redux
import { incrementLikes, decrementLikes} from './redux/actions'

function Likes(props) {

        console.log('props', props)

    return (
        <div className="button-controls">
            <button
                onClick={props.onIncremetLikes}
            >
                ❤ 
            {props.likes}
            </button>
            <button 
                onClick={props.onDecremetLikes}
            >
                Dislike
            </button>
        </div>
    )
}


function mapStateToProps(state) {

    const { likesReducer } = state;
    return {
        likes: likesReducer.likes
    }
    // пробрасываем состояние хранилища redux в компонент, используя функцию mapStateToProps
    // передаем state.likes в пропсы, (likes: 8)
    // mapStateToProps принимает состояние state из redux,
    // берет состояние state.likes и передеаем его в пропсы
        
    // функция, которая будет передавать данные из хранилища redux в 
    // наш компонент используя наш объект props "mapStateToProps(state)"
}

    // пробрасываем состояние хранилища redux в компонент, используя функцию mapDispathToProps
function mapDispathToProps(dispatch) {
    return {
        onIncremetLikes: () => {dispatch(incrementLikes())},
        onDecremetLikes: () => {dispatch(decrementLikes())}
            // console.log('click')
            // const action = {type: 'INCREMENT'}
            // tip akshena {type: 'INCREMENT'}
            // dispatch(action)
            // dispatch zapuskaet action
    }
    // actions - это объекты в redux, которые содержат свойства tipe
    // это тип action и свойства в которые могут передаваться какие-то
    // данные
}

export default connect(mapStateToProps, mapDispathToProps)(Likes);
    // подключаем этот компонент к приложению, используя функцию (connect)
    // используем функцию (connect) чтобы интегрировать
    // и соединить (mapStateToProps) с нашим компонентом(likes)


