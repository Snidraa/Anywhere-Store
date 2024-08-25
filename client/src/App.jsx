import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter />
			<Footer />
		</BrowserRouter>
	);
};

export default App;
