import { createStore as reduxCreateStore, combineReducers } from "redux";
import { conditions } from "./reducers";

export default function createStore() {
    const store = reduxCreateStore(
        combineReducers({
            conditions
        })
    );
    return store;
}
