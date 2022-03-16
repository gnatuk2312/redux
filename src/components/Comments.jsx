import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment, loadComments } from "../redux/actions/commentActions";

import SingleComment from "./SingleComment";
import uniqid from 'uniqid';

const Comments = () => {

	const dispatch = useDispatch();
	const comments = useSelector(state => {
		return state.commentReducer.comments;
	})

	const [textComment, setTextComment] = useState('');

	const handleInput = (e) => {
		setTextComment(e.target.value)
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createComment(textComment, uniqid()));
		setTextComment('')
	};

	useEffect(() => {
		dispatch(loadComments())
	}, [dispatch])

	return (
		<div className="card-comments">
			<form onSubmit={handleSubmit} className="comments-item-create">
				<input
					type='text'
					placeholder="Введіть коментар"
					value={textComment}
					onChange={handleInput}
				/>
				<input type='submit' hidden />
			</form>
			{!!comments.length && comments.map(comment => (
				<SingleComment key={comment.id} text={comment.text} id={comment.id} />
			))}
		</div>
	);
};

export default Comments;