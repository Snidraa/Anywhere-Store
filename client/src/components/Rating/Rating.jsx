import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import styles from './Rating.module.scss';

const Rating = observer(props => {
	const { rating, setRating, type } = { ...props };
	const [hover, setHover] = useState(null);

	return (
		<div className={styles.container}>
			{type === 'indicator' ? (
				<>
					<div>
						{[...Array(5)].map((star, index) => {
							return (
								<div key={index}>
									<FaStar className={styles.star} color='#e4e5e9' />
								</div>
							);
						})}
					</div>
					<div className={styles.rating} style={{ width: `${rating * 20}%` }}>
						{[...Array(5)].map((star, index) => {
							return (
								<div key={index}>
									<FaStar className={styles.star} color='#ffc107' />
								</div>
							);
						})}
					</div>
				</>
			) : (
				<>
					<div>
						{[...Array(5)].map((star, index) => {
							return (
								<div key={index}>
									<FaStar className={styles.star} />
								</div>
							);
						})}
					</div>
					<div>
						{[...Array(5)].map((star, index) => {
							const ratingValue = index + 1;

							return (
								<label key={index}>
									<input type='radio' name='rating' value={ratingValue} onClick={() => setRating(ratingValue)} />
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
					</div>
				</>
			)}
		</div>
	);
});

export default Rating;
