import { useContext, useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import { Context } from '../../../store/Context';
import { BlueButton, GreenButton, RedButton } from '../../Buttons';
import Modal from '../../Modal/Modal';
import styles from './DevicesBlock.module.scss';

const DevicesBlock = () => {
	const { device } = useContext(Context);
	const [info, setInfo] = useState([]);
	const [showDevicesModal, setShowDevicesModal] = useState(false);
	const dropContainerRef = useRef(null);
	const fileInputRef = useRef(null);
	const typeSelectorRef = useRef(null);
	const brandSelectorRef = useRef(null);

	useEffect(() => {
		const dropContainer = dropContainerRef.current;
		const fileInput = fileInputRef.current;

		dropContainer.addEventListener('dragover', e => e.preventDefault(), false);

		dropContainer.addEventListener('dragenter', () => {
			dropContainer.classList.add(styles.dragActive);
		});

		dropContainer.addEventListener('dragleave', () => {
			dropContainer.classList.remove(styles.dragActive);
		});

		dropContainer.addEventListener('drop', e => {
			e.preventDefault();
			dropContainer.classList.remove(styles.dragActive);
			fileInput.files = e.dataTransfer.files;
		});
	}, []);

	const addInfo = () => {
		setInfo([...info, { id: Date.now(), title: '', description: '' }]);
	};

	const removeInfo = id => {
		setInfo(info.filter(i => i.id !== id));
	};

	const handleChange = (value, name) => {
		if (name.name === 'Types') {
			typeSelectorRef.current.value = value;
			console.log('Type:', typeSelectorRef.current.value?.value);
		}
		if (name.name === 'Brands') {
			brandSelectorRef.current.value = value;
			console.log('Brand: ', brandSelectorRef.current.value?.value);
		}
	};

	const selectorStyles = {
		control: styles => ({ ...styles, backgroundColor: 'white', width: '100%', cursor: 'pointer' }),
		option: (styles, { isDisabled, isFocused, isSelected }) => {
			return {
				...styles,
				background: isDisabled ? undefined : isSelected ? '#0156ff' : isFocused ? 'rgba(#0156ff, 0.2)' : '#fff',
				color: isDisabled ? '#ccc' : isSelected ? '#fff' : isFocused ? '#000' : '#000',
				cursor: 'pointer',

				':active': {
					...styles[':active'],
					background: !isDisabled ? (isSelected ? undefined : '#0156ff') : '#0156ff',
					color: !isDisabled ? (isSelected ? undefined : '#fff') : '#fff',
				},
			};
		},
		input: styles => ({ ...styles }),
		placeholder: styles => ({ ...styles }),
		singleValue: styles => ({ ...styles }),
	};

	return (
		<div className={styles.devicesBlock}>
			<h2>Devices</h2>
			<BlueButton onClick={() => setShowDevicesModal(true)}>Get Devices</BlueButton>
			<form action='submit' className={styles.addDeviceFrom}>
				<div className={styles.selectors}>
					<Select
						ref={typeSelectorRef}
						name={'Types'}
						className={styles.select}
						placeholder={'Select Type...'}
						options={device.types.map(type => ({
							value: type.name,
							label: type.name,
						}))}
						styles={selectorStyles}
						isSearchable
						isClearable={() => typeSelectorRef.current.clearValue()}
						onChange={handleChange}
					/>
					<Select
						ref={brandSelectorRef}
						name={'Brands'}
						className={styles.select}
						placeholder={'Select Brand...'}
						options={device.brands.map(brand => ({
							value: brand.name,
							label: brand.name,
						}))}
						styles={selectorStyles}
						isSearchable
						isClearable={() => brandSelectorRef.current.clearValue()}
						onChange={handleChange}
					/>
				</div>
				<input type='text' placeholder='Enter Device name' />
				<input type='number' placeholder='Enter Device price' className={styles.devicesBlock_Price} />
				<label ref={dropContainerRef} htmlFor='images' className={styles.dropContainer} id='dropcontainer'>
					<span className={styles.dropTitle}>Drop files here</span>
					or
					<input ref={fileInputRef} type='file' id='images' accept='image/*' required />
				</label>
				{info.map(i => (
					<div key={i.id} className={styles.infoItem}>
						<input type='text' placeholder='Enter property title' />
						<input type='text' placeholder='Enter property description' />
						<RedButton onClick={() => removeInfo(i.id)}>Delete</RedButton>
					</div>
				))}
				<BlueButton onClick={addInfo}>Add new property</BlueButton>
			</form>

			<GreenButton className={styles.addButton}>Add Device</GreenButton>
			<Modal title={'Devices'} show={showDevicesModal} onHide={() => setShowDevicesModal(false)}>
				<table className={styles.modalTable}>
					<thead>
						<tr className={styles.modalTableHeader}>
							<td>id</td>
							<td>name</td>
							<td>price</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						{device.devices.map(device => (
							<tr key={device.id} className={styles.modalTableRow}>
								<td>{device.id}</td>
								<td>{device.name}</td>
								<td>{device.price}</td>
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

export default DevicesBlock;
