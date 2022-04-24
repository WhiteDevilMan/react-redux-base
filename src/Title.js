import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";

const Title = (props) => {
  console.log('props title > ', props);

  const text = useSelector(state => {
    const { inputReducer } = state;
    return inputReducer.text;
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log('handle text >> ', e.target.value);
    dispatch(inputText(e.target.value));
  }

  return (
    <div className='card-title'>
      <div className='card-title-top'>
        <input
          style={{cursor: 'url(input_cursor.cur),auto'}}
          className='card-title-input'
          type='text'
          onChange={handleChange}/>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Title;