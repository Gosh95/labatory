import { useDispatch } from 'react-redux';

import { authActions } from '../../store/reducers/auth';
import classes from './auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <div>
      <form onSubmit={loginHandler} className={classes.form}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' required />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' required />
        </div>
        <div>
          <button type='submit' className={classes.button}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
