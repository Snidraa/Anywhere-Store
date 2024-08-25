import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../store/Context';
import DeviceItem from '../DeviceItem/DeviceItem';
import styles from './DeviceList.module.scss';

const DeviceList = observer(() => {
	const { device } = useContext(Context);

	return (
		<div className={styles.deviceList}>
			{device._devices.map(device => (
				<DeviceItem key={device.id} device={device} />
			))}
		</div>
	);
});

export default DeviceList;
