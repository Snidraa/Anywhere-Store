import styles from './StarRating.module.scss';
// import from '/StarRating.scss'

const StarRating = () => {
	// const { target } = { ...props };
	// const [rating, setRating] = useState(0);
	// const [hover, setHover] = useState(null);

	const addRating = value => {
		// if (rating === value) {
		// 	target.ratesCount -= 1;
		// 	target.rating = Math.round(((prevRating * prevRatesCount - value) / (prevRatesCount - 1)) * 100) / 100;
		// 	setRating(target.rating);
		// 	setRatingAdded(false);
		// 	return;
		// }
		// setRating(value);
		// target.ratesCount += 1;
		// target.rating = Math.round(((prevRating * prevRatesCount + rating) / (prevRatesCount + 1)) * 100) / 100;
		setRating(value);
	};

	const removeRating = () => {
		// // const prevRatesCount = target.ratesCount;
		// // const prevRating = target.rating;

		// target.ratesCount += 1;
		// target.rating = Math.round(((prevRating * prevRatesCount - rating) / (prevRatesCount - 1)) * 100) / 100;
		setRating(0);
	};

	return (
		<div className={styles.container}>
			{/* <Rate character={<FaStar />} /> */}
			{/* <div>
				{[...Array(5)].map((star, index) => {
					const ratingValue = index + 1;

					return (
						<label key={index}>
							<input type='radio' name='rating' value={ratingValue} onClick={() => addRating(ratingValue)} />
							<FaStar
								className={styles.star}
								color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
								onMouseEnter={() => setHover(ratingValue)}
								onMouseLeave={() => setHover(null)}
								onDoubleClick={() => {
									setRating(null);
									setHover(null);
								}}
							/>
						</label>
					);
				})}
			</div> */}
		</div>
	);
};

export default StarRating;
