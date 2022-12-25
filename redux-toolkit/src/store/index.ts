import reduxLogger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducers/root';

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
  devTools: true,
});

export default store;
