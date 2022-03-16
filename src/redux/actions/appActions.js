import { LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON } from "../types";

export const loaderOn = () => {
	return {
		type: LOADER_DISPLAY_ON
	}
};
export const loaderOff = () => {
	return {
		type: LOADER_DISPLAY_OFF
	}
};
export const errorOn = (text) => {
	return dispatch => {
		dispatch({
			type: ERROR_DISPLAY_ON,
			payload: text
		});
		setTimeout(() => {
			dispatch(errorOff())
		}, 4000);
	}
};
export const errorOff = () => {
	return {
		type: ERROR_DISPLAY_OFF
	}
};
