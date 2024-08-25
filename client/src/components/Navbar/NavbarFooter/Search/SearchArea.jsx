import { CgSearch } from 'react-icons/cg';
import styles from './SearchArea.module.scss';

const SearchArea = () => {
	return (
		<div className={styles.area}>
			<input type='text' placeholder='Search here ...' />
			<CgSearch className={styles.icon} />
		</div>
	);
};

export default SearchArea;
