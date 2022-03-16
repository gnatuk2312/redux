import { COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENS_LOAD } from "../types";
import { loaderOn, loaderOff, errorOn } from "./appActions";

export const createComment = (text, id) => {
	return {
		type: COMMENT_CREATE,
		payload: { text, id }
	}
};
export const updateComment = (text, id) => {
	return {
		type: COMMENT_UPDATE,
		payload: { text, id }
	}
};
export const deleteComment = (id) => {
	return {
		type: COMMENT_DELETE,
		payload: id
	}
};
export const loadComments = () => {
	return async dispatch => {
		try {
			dispatch(loaderOn());
			const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
			const jsonData = await response.json();
			dispatch({
				type: COMMENS_LOAD,
				payload: jsonData
			});
			dispatch(loaderOff());
		} catch (err) {
			dispatch(errorOn('Помилка ' + err));
			dispatch(loaderOff());
		}
	}
};

