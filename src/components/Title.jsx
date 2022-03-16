import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText } from '../redux/actions/inputActions';

const Title = () => {
	const text = useSelector(state => {
		return state.inputReducer.text;
	})
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(inputText(e.target.value))
	}

	return (
		<div className="card-title">
			<div className="card-title-top">
				<input type='text' placeholder="Введіть заголовок" onChange={handleChange} />
			</div>
			<p>{text}</p>
		</div>
	);
};

export default Title;