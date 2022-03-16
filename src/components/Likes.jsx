import React from 'react';
import { connect } from 'react-redux';
import { decrementLikes, incrementLikes } from '../redux/actions/likeActions';

const Likes = (props) => {
	return (
		<div className="button-controls">
			<button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
			<button onClick={props.onDecrementLikes}>Dislike</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		likes: state.likesReducer.likes
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementLikes: () => {
			return dispatch(incrementLikes());
		},
		onDecrementLikes: () => {
			return dispatch(decrementLikes());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);