import styles from './ButtonsStyles.module.scss';

const BlackButton = props => {
	const { children, onClick } = { ...props };

	return (
		<button className={styles.blackButton} onClick={onClick}>
			{children}
		</button>
	);
};

export default BlackButton;
