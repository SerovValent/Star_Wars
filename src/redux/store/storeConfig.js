import {applyMiddleware, createStore} from "redux";
import {farGalaxyReducer} from "../reducers/farGalaxyReducer";
import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src";

const initState =
    {
        text : ""
    }

const store = createStore(farGalaxyReducer,initState, applyMiddleware(thunk, logger));
export default store;