import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import commonEn from './translations/en/common.json';
import commonRu from './translations/ru/common.json';
import commonBe from './translations/be/common.json';

import store from './store/store';
import './index.scss';

import App from './components/App';

i18next.init({
		interpolation: {escapeValue: false},
		lng: 'en',
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
		document.getElementById('example')
);
