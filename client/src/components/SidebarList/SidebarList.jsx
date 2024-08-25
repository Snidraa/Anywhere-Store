import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../store/Context';
import Dropdown from '../Dropdown/Dropdown';
import styles from './SidebarList.module.scss';

const SidebarList = observer(() => {
	const { device } = useContext(Context);

	return (
		<div className={styles.sidebarList}>
			<Dropdown title={'Category'} height={`${device.brands.length * 2.8}rem`}>
				<ul>
					{device.types.map(type => (
						<li
							key={type.id}
							className={type.id === device.selectedType.id ? styles.sidebarListOptionActive : styles.sidebarListOption}
							onClick={() => device.setSelectedType(type)}
						>
							{type.name}
							<span>{type.id}</span>
						</li>
					))}
				</ul>
			</Dropdown>
			<Dropdown title={'Brands'} height={`${device.brands.length * 2.8}rem`}>
				<ul>
					{device.brands.map(brand => (
						<li
							key={brand.id}
							className={
								brand.id === device.selectedBrand.id ? styles.sidebarListOptionActive : styles.sidebarListOption
							}
							onClick={() => device.setSelectedBrand(brand)}
						>
							{brand.name}
							<span>{brand.id}</span>
						</li>
					))}
				</ul>
			</Dropdown>
		</div>
	);
});

export default SidebarList;
