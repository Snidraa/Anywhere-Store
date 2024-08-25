export const isDeviceInCart = (cart, deviceId) => {
	return cart.some(item => item.device.id === deviceId);
};
