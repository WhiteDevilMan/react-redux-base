import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

const Spin = (props) => {
  const spinner = useSelector(state => state.appReducer.loading);

  return (
    <div className='loader-styles'>
      <Loader
        type='Oval'
        color='#00bfff'
        height={50}
        width={50}
        visible={spinner}
      />
    </div>
  )
}

export default Spin;