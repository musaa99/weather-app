import React from 'react';

const GreetUser = ({ username}) => {
	let date = new Date();
	let hours = date.getHours();
	// let name = username;
	let timeofday;

	if (hours < 12) {
		timeofday = `Good Morning`;
	} else if (hours > 12 || hours <= 16) {
		timeofday = `Good Afternoon`;
	} else if (hours <= 24) {
		timeofday = `Good Evening`;
	} else {
		timeofday = `Hello ${username}`;
	}

	return (
		<h2 className='text-[green]' >
			{timeofday}, 
			
		</h2>
	);
};

export default GreetUser;
