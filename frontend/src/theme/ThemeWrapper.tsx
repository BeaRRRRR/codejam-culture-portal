import ThemeProvider from './ThemeProvider';
import React from 'react';
import {Provider} from 'react-redux';
import store from '../store/store';
import ThemeChange from '../components/Theme-change/ThemeChange';

export interface ThemeWrapperProps {
		children: any;
}

const ThemeWrapper = (props: ThemeWrapperProps) => {
		return (
				<Provider store={store}>
						<ThemeProvider children={props.children} />
						<ThemeChange display={'bottom'} />
				</Provider>
		);
};

export default ThemeWrapper;
