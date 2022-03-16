import { combineReducers } from "redux";

import { likesReducer } from "./reducers/likesReducer";
import { inputReducer } from "./reducers/inputReducer";
import { commentReducer } from "./reducers/commentReducer";
import { appReducer } from "./reducers/appReducer";

export const rootReducer = combineReducers({
	likesReducer,
	inputReducer,
	commentReducer,
	appReducer
});