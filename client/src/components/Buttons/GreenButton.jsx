import styles from './ButtonsStyles.module.scss';

const GreenButton = props => {
	const { children, onClick } = { ...props };

	return (
		<button className={styles.greenButton} onClick={onClick}>
			{children}
		</button>
	);
};

export default GreenButton;
