import React from 'react';
import { useSelector } from 'react-redux';
import Likes from './components/Likes';
import Title from './components/Title';
import Comments from './components/Comments';
import Spinner from './components/Spinner';

import './App.css';

const App = () => {

	const error = useSelector(state => {
		return state.appReducer.error
	});
	return (
		<div className="App">
			<div className="wrap">
				<Spinner />
				<div className="card">
					{error && (
						<div className='error-message'>{error}</div>
					)}
					<div className="card-image">
						<img src="./sea.jpg" alt="surfing" />
						<Title />
						<Likes />
					</div>
					<Comments />
				</div>
			</div>
		</div>
	);
};

export default App;
