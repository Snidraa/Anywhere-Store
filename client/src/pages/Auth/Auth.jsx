import { NavLink, useLocation } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { BlueButton } from '../../components/Buttons';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import styles from './Auth.module.scss';

const Auth = () => {
	const location = useLocation();
	const isLogin = location.pathname === LOGIN_ROUTE;

	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<Breadcrumbs pathname={isLogin ? 'Login' : 'Registration'} />
				<h1>{isLogin ? 'Customer Login' : ' Customer Registration'}</h1>
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<h2>{isLogin ? 'Registered Customer' : 'New Customer'}</h2>
						<p>
							{isLogin
								? 'If you have an account, sign in with your email address.'
								: "If you don't have an account, register with your email address."}
						</p>
						<form action='' placeholder='Your email...'>
							<p>
								Email <span>*</span>
							</p>
							<input type='text' placeholder='Your email...' />
							<p>
								Password <span>*</span>
							</p>
							<input type='text' placeholder='Your password...' />
						</form>
						<div className={styles.form_footer}>
							<BlueButton>{isLogin ? 'Login' : 'Register'}</BlueButton>
							{isLogin ? (
								<a href=''>Forgot Your Password?</a>
							) : (
								<p>
									Have an account? <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
								</p>
							)}
						</div>
						{isLogin && (
							<p>
								Don&apos;t have an account? <NavLink to={REGISTRATION_ROUTE}>Create An Account</NavLink>
							</p>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Auth;
