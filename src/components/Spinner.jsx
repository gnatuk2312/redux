import React from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const Spinner = () => {

	const loading = useSelector(state => {
		return state.appReducer.loading;
	})

	return (
		<div className="loader-styles">
			<Loader
				type='Circles'
				color='grey'
				height={100}
				width={100}
				visible={loading}
			/>
		</div>
	);
};

export default Spinner;