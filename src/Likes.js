import { connect } from "react-redux";

const Likes = (props) => {
  console.log('render > ', props);
  return (
    <div className='button-controls'>
      <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps > ', state);
  return {
    likes: state.likes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementLikes: () => {
      console.log('increment click');
      const action = {type: 'INCREMENT'};
      dispatch(action);
    },

    onDecrementLikes: () => {
      console.log('decrement click')
      const action = {type: 'DECREMENT'};
      dispatch(action);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
