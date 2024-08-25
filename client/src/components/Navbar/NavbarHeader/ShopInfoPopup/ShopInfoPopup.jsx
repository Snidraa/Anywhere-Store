import { checkpoint, clock } from '../../../../assets';
import styles from './ShopInfoPopup.module.scss';

const ShopInfoPopup = () => {
	return (
		<div className={styles.shopInfoPopup}>
			<div className={styles.shopInfoPopup_schedule}>
				<img src={clock} alt='' />
				<div>
					We are open:
					<p>
						<span>Mon-Thu:</span> 9:00 AM - 5:30 PM
					</p>
					<p>
						<span>Fr:</span> 9:00 AM - 6:00 PM
					</p>
					<p>
						<span>Sat:</span> 11:00 AM - 5:00 PM
					</p>
				</div>
			</div>
			<div className={styles.shopInfoPopup_adress}>
				<img src={checkpoint} alt='' />
				Address: Union Street 42, Night City
			</div>
			<div className={styles.shopInfoPopup_contacts}>
				<p>
					Phones: <a href='tel: (00) 1234 5678'>(00) 1234 5678</a>
				</p>
				<p>
					E-mail: <a href='mailto:shop@email.com'>shop@email.com</a>
				</p>
			</div>
		</div>
	);
};

export default ShopInfoPopup;
