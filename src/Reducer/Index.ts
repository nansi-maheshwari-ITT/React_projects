import changeCount from "./CounterReducer";
import { combineReducers} from "redux";

const rootReducer=combineReducers({
	changeCount:changeCount,
})

export default rootReducer