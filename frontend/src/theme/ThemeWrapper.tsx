import ThemeProvider from './ThemeProvider';
import React from 'react';
import {Provider} from 'react-redux';
import store from '../store/store';

export interface ThemeWrapperProps {
		children: any;
}

const ThemeWrapper = (props: ThemeWrapperProps) => {
		return (
				<Provider store={store}>
						<ThemeProvider children={props.children} />
				</Provider>
		);
};

export default ThemeWrapper;
