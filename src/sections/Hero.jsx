import Typed from 'react-typed';
import { HiExternalLink } from 'react-icons/hi';
import { CV } from '../assets';

const Hero = () => {
	return (
		<section
			id="home"
			className="placeholder:text-[#e9e9e9] bg-[url(assets/me.jpg)] bg-blend-overlay dark:bg-gray-900 bg-light-greyTwo bg-cover bg-no-repeat bg-center duration-100 bg-parallax"
		>
			<div className="max-w-[800px] mt-[-74px] w-full h-screen mx-auto text-center flex flex-col justify-center">
				<p className="uppercase md:text-3xl sm:text-2xl text-xl text-light-tertiary font-bold p-2 px-4">Welcome to the portfolio of</p>
				<h1 className="md:text-8xl sm:text-7xl text-6xl font-bold md:py-6 text-light-darkGreyTwo dark:text-dark-secondary">Dylan Koevort</h1>
				<div className="flex justify-center items-center mt-4">
					<p className="md:text-3xl sm:text-2xl text-xl text-light-darkGreyTwo dark:text-dark-secondary">A passionate</p>
					<Typed
						className="md:text-3xl sm:text-2xl text-xl font-bold pl-1 md:pl-2 text-light-tertiary"
						strings={['Web', 'Full-Stack', 'Mobile']}
						typeSpeed={60}
						backSpeed={60}
						backDelay={2000}
						loop
					/>
					<p className="md:text-3xl sm:text-2xl text-xl pl-1 text-light-darkGreyTwo dark:text-dark-secondary">Developer</p>
				</div>

				<a
					href={CV}
					target="_blank"
					rel="noopener noreferrer"
					className="w-[150px] mx-auto flex justify-center items-center gap-1 border-2 rounded-xl px-2 py-1 mt-8 hover:cursor-pointer hover:bg-[#232323] hover:text-white dark:hover:bg-white dark:hover:text-black ease-in-out duration-300 transition-all"
				>
					Resume
					<HiExternalLink />
				</a>

				<div className="mouse_scroll z-10">
					<div>
						<span className="m_scroll_arrows unu border-r-2 border-b-2 border-blue-700 dark:border-white"></span>
						<span className="m_scroll_arrows doi border-r-2 border-b-2 border-blue-700 dark:border-white"></span>
						<span className="m_scroll_arrows trei border-r-2 border-b-2 border-blue-700 dark:border-white"></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
