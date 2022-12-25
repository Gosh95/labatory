import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth';
import counter from './counter';

const reducer = combineReducers({ auth, counter });

export type ReducerType = ReturnType<typeof reducer>;

export default reducer;
