import { useRef, useState } from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { useOutsideClick } from '../../Hooks/useOutsideClick';
import { paymentAmericanExpress, paymentDiscover, paymentMaestro, paymentPaypal, paymentVisa } from '../../assets';
import styles from './Footer.module.scss';
const Footer = () => {
	// const { isBigScreen } = useMediaQueries();
	const [showList, setShowList] = useState(false);
	const showListRef = useRef(null);

	const toggleList = () => {
		setShowList(!showList);
	};

	useOutsideClick(showListRef, toggleList, showList);

	return (
		<footer className={styles.wrapper}>
			<div className={styles.container}>
				{/* <div className={styles.footerTop}>
					<div className={styles.menu}>
						<FooterMenuItem
							title={'Information'}
							items={[
								['About Us', ''],
								['About Zip', ''],
								['Privacy Policy', ''],
								['Search', ''],
								['Terms', ''],
								['Orders and Returns', ''],
								['Contact Us', ''],
								['Advanced Search', ''],
								['Newsletter Subscription', ''],
							]}
						/>
						<FooterMenuItem
							title={'PC Parts'}
							items={[
								['CPUS', ''],
								['Add On Cards', ''],
								['Hard Drives (Internal)', ''],
								['Graphic Cards', ''],
								['Keyboards / Mice', ''],
								['Cases / Power Supplies / Cooling', ''],
								['RAM (Memory)', ''],
								['Software', ''],
								['Speakers / Headsets', ''],
								['Motherboards', ''],
							]}
						/>
						<FooterMenuItem
							title={'Desktop PCs'}
							items={[
								['Custom PCs', ''],
								['Servers', ''],
								['MSI All-In-One PCs', ''],
								['HP/Compaq PCs', ''],
								['ASUS PCs', ''],
								['Tecs PCs', ''],
							]}
						/>
						<FooterMenuItem
							title={'Laptops'}
							items={[
								['Everyday Use Notebooks', ''],
								['MSI Workstation Series', ''],
								['MSI Prestige Series', ''],
								['Tablets and Pads', ''],
								['Netbooks', ''],
								['Infinity Gaming Notebooks', ''],
							]}
						/>
						{/* <div className={styles.menuItem}>
							<h3>PC Parts {!isBigScreen && <img src={arrowDownWhite} alt='arrow down' />}</h3>
							<ul>
								<li>
									<a href=''>CPUS</a>
								</li>
								<li>
									<a href=''>Add On Cards</a>
								</li>
								<li>
									<a href=''>Hard Drives (Internal)</a>
								</li>
								<li>
									<a href=''>Graphic Cards</a>
								</li>
								<li>
									<a href=''>Keyboards / Mice</a>
								</li>
								<li>
									<a href=''>Cases / Power Supplies / Cooling</a>
								</li>
								<li>
									<a href=''>RAM (Memory)</a>
								</li>
								<li>
									<a href=''>Software</a>
								</li>
								<li>
									<a href=''>Speakers / Headsets</a>
								</li>
								<li>
									<a href=''>Motherboards</a>
								</li>
							</ul>
						</div>
						<div className={styles.menuItem}>
							<h3>Desktop PCs {!isBigScreen && <img src={arrowDownWhite} alt='arrow down' />}</h3>
							<ul>
								<li>
									<a href=''>Custom PCs</a>
								</li>
								<li>
									<a href=''>Servers</a>
								</li>
								<li>
									<a href=''>MSI All-In-One PCs</a>
								</li>
								<li>
									<a href=''>HP/Compaq PCs</a>
								</li>
								<li>
									<a href=''>ASUS PCs</a>
								</li>
								<li>
									<a href=''>Tecs PCs</a>
								</li>
							</ul>
						</div>
						<div className={styles.menuItem}>
							<h3>Laptops {!isBigScreen && <img src={arrowDownWhite} alt='arrow down' />}</h3>
							<ul>
								<li>
									<a href=''>Everyday Use Notebooks</a>
								</li>
								<li>
									<a href=''>MSI Workstation Series</a>
								</li>
								<li>
									<a href=''>MSI Prestige Series</a>
								</li>
								<li>
									<a href=''>Tablets and Pads</a>
								</li>
								<li>
									<a href=''>Netbooks</a>
								</li>
								<li>
									<a href=''>Infinity Gaming Notebooks</a>
								</li>
							</ul>
						</div> }
						<div className={styles.menuItem}>
							{isBigScreen ? (
								<>
									<h3 className={styles.title}>Address </h3>
									<ul className={styles.list}>
										<li>Address: 1234 Street Adress City Address, 1234</li>
										<li>
											Phones:{' '}
											<a href='tel: (00) 1234 5678' className={styles.tel}>
												(00) 1234 5678
											</a>
										</li>
										<li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
										<li>Friday: 9:00 AM - 6:00 PM</li>
										<li>Saturday: 11:00 AM - 5:00 PM</li>
										<li>
											E-mail:{' '}
											<a href='mailto:shop@email.com' className={styles.mail}>
												shop@email.com
											</a>
										</li>
									</ul>
								</>
							) : (
								<>
									<h3 className={styles.title} ref={showListRef} onClick={toggleList}>
										Address{' '}
										<img
											src={arrowDownWhite}
											alt='arrow down'
											className={showList ? styles.arrow : styles.arrowDownWhite}
										/>
									</h3>
									<CSSTransition
										in={showList}
										timeout={250}
										classNames={{ enterActive: styles.listShow, exitActive: styles.listHide }}
										mountOnEnter
										unmountOnExit
									>
										<ul className={styles.list}>
											<li>Address: 1234 Street Adress City Address, 1234</li>
											<li>
												Phones:{' '}
												<a href='tel: (00) 1234 5678' className={styles.tel}>
													(00) 1234 5678
												</a>
											</li>
											<li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
											<li>Friday: 9:00 AM - 6:00 PM</li>
											<li>Saturday: 11:00 AM - 5:00 PM</li>
											<li>
												E-mail:{' '}
												<a href='mailto:shop@email.com' className={styles.mail}>
													shop@email.com
												</a>
											</li>
										</ul>
									</CSSTransition>
								</>
							)}
						</div>
					</div>
				</div> */}

				<div className={styles.footerBottom}>
					<div className={styles.footerBottom_socials}>
						<FaSquareFacebook className={styles.footerBottom_socialsFacebook} />
						<RiInstagramFill className={styles.footerBottom_socialsInstagram} />
					</div>
					<div className={styles.footerBottom_payments}>
						<img src={paymentPaypal} alt='paypal' />
						<img src={paymentVisa} alt='visa' />
						<img src={paymentMaestro} alt='maestro' />
						<img src={paymentDiscover} alt='discover' />
						<img src={paymentAmericanExpress} alt='american express' />
					</div>
					<p className={styles.footerBottom_copyright}>Copyright © 2023 Anywhere Shop Ltd.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
