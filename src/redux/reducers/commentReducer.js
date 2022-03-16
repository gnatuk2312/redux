import { COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENS_LOAD } from "../types";

const initialState = {
	comments: []
}

export const commentReducer = (state = initialState, action) => {
	switch (action.type) {

		case COMMENT_CREATE:
			return {
				...state,
				comments: [...state.comments, { text: action.payload.text, id: action.payload.id }]
			}
		case COMMENT_UPDATE:
			return {
				...state,
				comments: state.comments.map(com => {
					if (com.id === action.payload.id) {
						return action.payload;
					} else return com;
				})
			}
		case COMMENT_DELETE:
			return {
				...state,
				comments: state.comments.filter(el => el.id !== action.payload)
			}
		case COMMENS_LOAD:
			const newArrayOfComments = action.payload.map(el => {
				return {
					text: el.name,
					id: el.id
				}
			})
			return {
				...state,
				comments: newArrayOfComments
			}

		default:
			return state;
	}

}