import React from 'react';
import ThemeProvider from '../app/providers/theme_provider';

const First = () => {
	return (
		<ThemeProvider>
			<div>First</div>
		</ThemeProvider>
	);
};

export default First;
