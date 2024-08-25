import { useContext, useState } from 'react';
import { Context } from '../../../store/Context';
import { BlueButton, GreenButton, RedButton } from '../../Buttons';
import Modal from '../../Modal/Modal';
import styles from './TypesBlock.module.scss';

const TypesBlock = () => {
	const [showTypesModal, setShowTypesModal] = useState(false);
	const { device } = useContext(Context);

	return (
		<div className={styles.typesBlock}>
			<h2>Types</h2>
			<BlueButton onClick={() => setShowTypesModal(true)}>Get Types</BlueButton>
			<form action=''>
				<input type='text' placeholder='Enter Type name' />
			</form>
			<GreenButton>Add Type</GreenButton>

			<Modal title={'Types'} show={showTypesModal} onHide={() => setShowTypesModal(false)}>
				<table className={styles.modalTable}>
					<thead>
						<tr className={styles.modalTableHeader}>
							<td>id</td>
							<td>name</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						{device.types.map(type => (
							<tr key={type.id} className={styles.modalTableRow}>
								<td>{type.id}</td>
								<td>{type.name}</td>
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

export default TypesBlock;
