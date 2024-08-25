import { useContext, useState } from 'react';
import { Context } from '../../../store/Context';
import { BlueButton, GreenButton, RedButton } from '../../Buttons';
import Modal from '../../Modal/Modal';
import styles from './BrandsBlock.module.scss';

const BrandsBlock = () => {
	const [showBrandsModal, setShowBrandsModal] = useState(false);
	const { device } = useContext(Context);

	return (
		<div className={styles.brandsBlock}>
			<h2>Brands</h2>
			<BlueButton onClick={() => setShowBrandsModal(true)}>Get brands</BlueButton>
			<form action=''>
				<input type='text' placeholder='Enter brand name' />
			</form>
			<GreenButton>Add brand</GreenButton>
			<Modal title={'Brands'} show={showBrandsModal} onHide={() => setShowBrandsModal(false)}>
				<table className={styles.modalTable}>
					<thead>
						<tr className={styles.modalTableHeader}>
							<td>id</td>
							<td>name</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						{device.brands.map(brand => (
							<tr key={brand.id} className={styles.modalTableRow}>
								<td>{brand.id}</td>
								<td>{brand.name}</td>
								<td>
									<RedButton>Delete</RedButton>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Modal>
		</div>
	);
};

export default BrandsBlock;
