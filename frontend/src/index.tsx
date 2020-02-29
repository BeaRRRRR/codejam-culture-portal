import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import commonEn from './translations/en/common.json';
import commonRu from './translations/ru/common.json';
import commonBe from './translations/be/common.json';

import store from './store/store';
import './index.scss';

import App from './components/App';

const getLang = () => {
	const savedLang = sessionStorage.getItem('lang');
	return savedLang ? savedLang : 'en';
};

i18next.init({
	interpolation: { escapeValue: false },
	lng: getLang(),
	resources: {
		en: {
			common: commonEn
		},
		ru: {
			common: commonRu
		},
		be: {
			common: commonBe
		}
	}
});

ReactDOM.render(
	<I18nextProvider i18n={i18next}>
		<Provider store={store}>
			<App />
		</Provider>
	</I18nextProvider>,
	document.getElementById('app')
);
