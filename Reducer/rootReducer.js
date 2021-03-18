import { combineReducers } from "redux";
import LangReducer from "./LangReducer";

const rootReducer = combineReducers({
    lang: LangReducer
})

export default rootReducer;