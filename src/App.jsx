import { Navbar, Footer } from 'components';
import { Hero, About, Projects, Contact } from 'sections';

const App = () => {
	return (
		<div>
			{/* <p className="absolute top w-full text-sm text-center text-white pt-2 bg-red-700">Website in development</p> */}
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
