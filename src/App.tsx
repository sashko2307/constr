import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';

import Profile from './pages/Profile.jsx';
import Sites from './pages/Sites';
import Sidebar from './components/Sidebar/Sidebar';



import('preline')

const App = () => {
	return (
	  <Router>
		<div className='sidebar'>
                <Sidebar />
			</div>
  
		<Routes>
		  <Route path="/" element={<Profile />} />
		  <Route path="/sites" element={<Sites /> } />
		  <Route path="/profile" element={<Profile />} />
		</Routes>
	  </Router>
	);
};
  
export default App
  
