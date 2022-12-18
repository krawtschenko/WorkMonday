import {combineReducers, legacy_createStore} from "redux";
import {valuesReducer} from "./valuesReducer";
import {numReducer} from "./numReducer";

const rootReducer = combineReducers({
    values: valuesReducer,
    num: numReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>