import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './main.scss';
import BrandStore from './store/BrandStore.js';
import { Context } from './store/Context.js';
import DeviceStore from './store/DeviceStore.js';
import TypeStore from './store/TypeStore.js';
import UserStore from './store/UserStore.js';

console.log(import.meta.env.REACT_APP_API_URL);

const root = createRoot(document.getElementById('root'));

root.render(
	<Context.Provider
		value={{ user: new UserStore(), device: new DeviceStore(), type: new TypeStore(), brand: new BrandStore() }}
	>
		<App />
	</Context.Provider>,
);
