import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

const Sites = () => {
	return (
		<div className='profile container-fluid flex '>
            <div className='sidebar'>
                <Sidebar />
			</div>
			<div className='content min-h-screen'>
				<div className='content_wrap'>
					<h1>Сайти </h1>
				</div>
			</div>
		</div>
	);
};

export default Sites;
