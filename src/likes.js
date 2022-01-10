import { connect } from 'react-redux' 
// соединяем react с redux


function Likes(props) {

    console.log('props', props)
    return (
        <div className="button-controls">
            <button>❤ {props.likes}</button>
            <button>Dislike</button>
        </div>
    )
}


function mapStateToProps(state) {
    console.log('mapStateToProps > ', state)
    return {
        likes: state.likes
    }
    // передаем state.likes в пропсы, (likes: 8)
    // mapStateToProps принимает состояние state из redux,
    // берет состояние state.likes и передеаем его в пропсы
        
    // функция, которая будет передавать данные из хранилища redux в 
    // наш компонент используя наш объект props "mapStateToProps(state)"
}

export default connect(mapStateToProps)(Likes);
    // используем функцию (connect) чтобы интегрировать
    // и соединить (mapStateToProps) с нашим компонентом(likes)


