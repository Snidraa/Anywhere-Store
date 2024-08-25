import styles from './ButtonsStyles.module.scss';

const BlueButton = props => {
	const { children, onClick } = { ...props };

	return (
		<button className={styles.blueButton} onClick={onClick}>
			{children}
		</button>
	);
};

export default BlueButton;
