import Admin from '../pages/Admin/Admin';
import Auth from '../pages/Auth/Auth';
import Cart from '../pages/Cart/Cart';
import DevicePage from '../pages/DevicePage/DevicePage';
import Shop from '../pages/Shop/Shop';
import TermsAndConditions from '../pages/TermsAndConditions/TermsAndConditions';
import Wishlist from '../pages/Wishlist/Wishlist';

import {
	ADMIN_ROUTE,
	CART_ROUTE,
	DEVICE_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	SHOP_ROUTE,
	TERMS_AND_CONDITIONS_ROUTE,
	WISHLIST_ROUTE,
} from '../utils/consts';

export const privateRoutes = [
	{ path: ADMIN_ROUTE, element: <Admin /> },
	{ path: CART_ROUTE, element: <Cart /> },
	{ path: WISHLIST_ROUTE, element: <Wishlist /> },
];

export const publicRoutes = [
	{ path: SHOP_ROUTE, element: <Shop /> },
	{ path: LOGIN_ROUTE, element: <Auth /> },
	{ path: REGISTRATION_ROUTE, element: <Auth /> },
	{ path: DEVICE_ROUTE + '/:id', element: <DevicePage /> },
	{ path: TERMS_AND_CONDITIONS_ROUTE, element: <TermsAndConditions /> },
];
