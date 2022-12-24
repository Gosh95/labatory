import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../../store/reducers/counter';
import classes from './counter.module.css';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increase());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrease());
  };

  return (
    <div className={classes.counter}>
      <div>
        <span>{count}</span>
      </div>
      <div>
        <button type='button' onClick={decrementHandler}>
          -
        </button>
        <button type='button' onClick={incrementHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
