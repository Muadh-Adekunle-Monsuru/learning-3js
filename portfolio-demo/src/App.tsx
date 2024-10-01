import About from './sections/About';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';

export default function App() {
	return (
		<main className='max-w-7xl mx-auto'>
			<Navbar />
			<Hero />
			<Experience />
			<About />
			<Projects />
		</main>
	);
}
