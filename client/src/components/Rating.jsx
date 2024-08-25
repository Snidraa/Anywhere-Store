import { starWhite, starYellow } from '../assets';

const Rating = rating => {
	const stars 
	function setStars(rating = 4) {
		for (let index = 0; index <= rating; index++) {
			return <img src={starYellow} alt='' />;
		}
		for (let index = 0; index <= 5 - rating; index++) {
			return <img src={starWhite} alt='' />;
		}
	}

	return <div>{setStars()}</div>;
};

export default Rating;
