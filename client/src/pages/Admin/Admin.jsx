import { useState } from 'react';
import BrandsBlock from '../../components/AdminPanel/BrandsBlock/BrandsBlock';
import DevicesBlock from '../../components/AdminPanel/DevicesBlock/DevicesBlock';
import TypesBlock from '../../components/AdminPanel/TypesBlock/TypesBlock';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './Admin.module.scss';

const Admin = () => {
	const [showTypesBlock, setShowTypesBlock] = useState(false);
	const [showBrandsBlock, setShowBrandsBlock] = useState(false);
	const [showDevicesBlock, setShowDevicesBlock] = useState(true);

	const toggleTypesBlock = () => {
		if (showBrandsBlock) toggleBrandsBlock();
		if (showDevicesBlock) toggleDevicesBlock();
		setShowTypesBlock(!showTypesBlock);
	};

	const toggleBrandsBlock = () => {
		if (showTypesBlock) toggleTypesBlock();
		if (showDevicesBlock) toggleDevicesBlock();
		setShowBrandsBlock(!showBrandsBlock);
	};

	const toggleDevicesBlock = () => {
		if (showTypesBlock) toggleTypesBlock();
		if (showBrandsBlock) toggleBrandsBlock();
		setShowDevicesBlock(!showDevicesBlock);
	};

	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<Breadcrumbs pathname={'Admin Panel'} />
				<div className={styles.controls}>
					<button onClick={toggleTypesBlock}>Types</button>
					<button onClick={toggleBrandsBlock}>Brands</button>
					<button onClick={toggleDevicesBlock}>Devices</button>
				</div>
				<div className={styles.content}>
					{showTypesBlock && <TypesBlock />}
					{showBrandsBlock && <BrandsBlock />}
					{showDevicesBlock && <DevicesBlock />}
				</div>
			</div>
		</main>
	);
};

export default Admin;
