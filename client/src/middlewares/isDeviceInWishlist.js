export const isDeviceInWishlist = (wishlist, deviceId) => {
	return wishlist.some(item => item.id === deviceId);
};
