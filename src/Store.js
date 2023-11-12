import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import { guestReducer } from './reducers/guestReducer';
const reducers = combineReducers({
    guest: guestReducer

});
const initialState = {};
const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [thunk];


const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
}
    , initialState,
    composeWithDevTools(applyMiddleware(...middleware)))
export default store;