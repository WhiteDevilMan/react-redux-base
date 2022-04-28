import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "./redux/actions";

const Likes = (props) => {
  return (
    <div className='button-controls'>
      <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementLikes: () => {
      return dispatch(incrementLikes());
    },

    onDecrementLikes: () => {
      return dispatch(decrementLikes());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
