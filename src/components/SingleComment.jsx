import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateComment, deleteComment } from "../redux/actions/commentActions";



const SingleComment = ({ text, id }) => {
	const [commentText, setCommentText] = useState(text);
	const dispatch = useDispatch();

	const handleInput = (e) => {
		setCommentText(e.target.value)
	};
	const handleUpdate = (e) => {
		e.preventDefault();
		dispatch(updateComment(commentText, id));
	};
	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteComment(id));
	}

	return (
		<form onSubmit={handleUpdate} className="comments-item">
			<div onClick={handleDelete} className="comments-item-delete">&times;</div>
			<input type='text' value={commentText} onChange={handleInput} />
			<input type='submit' hidden />
		</form>
	);
};

export default SingleComment;