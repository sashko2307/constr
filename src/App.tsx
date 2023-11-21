import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Profile from './pages/Profile.jsx';
import Sites from './pages/Sites';



import('preline')

const App = () => {
	return (
	  <Router>
		<nav className='nav'>
		  <ul>
			<li>
			  <Link to="/">Сайти</Link>
			  <Link to="/">Profile</Link>
			</li>
		  </ul>
		</nav>
  
		<Routes>
		  <Route path="/" element={<Profile />} />
		  <Route path="/sites" element={<Sites /> } />
		  <Route path="/profile" element={<Profile />} />
		</Routes>
	  </Router>
	);
};
  
export default App
  
