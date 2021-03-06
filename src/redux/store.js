import { createStore, combineReducers } from 'redux';
import {
    loggedReducer,
    tokenReducer,
    userReducer,
} from './reducers';

const store = createStore(
    combineReducers({
        isLoggedIn: loggedReducer,
        token: tokenReducer,
        user: userReducer,
    }),
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;