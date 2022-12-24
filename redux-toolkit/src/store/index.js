import reduxLogger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/counter';
import authReducer from './reducers/auth';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger), //리덕스 미들웨어를 담는 배열이다. 미들웨어를 따로 명시하지 않으면 기본적으로 getDefaultMiddleware를 호출한다.
  devTools: true, //리덕스 개발자 도구를 끄거나 킨다.
});

export default store;
