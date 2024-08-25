import styles from './ButtonsStyles.module.scss';

const RedButton = props => {
	const { children, onClick } = { ...props };

	return (
		<button className={styles.redButton} onClick={onClick}>
			{children}
		</button>
	);
};

export default RedButton;
