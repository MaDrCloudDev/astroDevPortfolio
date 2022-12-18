const About = () => {
	return (
		<div
			id='about'
			className='w-full md:h-screen p-2 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='uppercase text-xl tracking-widest text-blue-600'>
						About
					</p>
					<h2 className='py-4'>Who Am I?</h2>
					<p className='py-2 text-gray-200'>
						A passionate progressive web app user and builder, I'm devoted to
						cloud and browser-based tools.
					</p>
					<p className='py-2 text-gray-200'>
						Junior full-stack web developer specializing in HTML, CSS,
						JavaScript & TypeScript. Linux, Node.js, & NoSQL. Jamstack & Vector
						Design. Developing proficiencies in React, Express, MongoDB, Svelte,
						Next.js, & Astro. MERN stack. A PWA and SPA enthusiast, virtually
						every tool I use runs in the browser & in the cloud. I am currently
						seeking a junior web developer role with a company that will help me
						build my competencies & push my capabilities.
					</p>
					<a
						href='/#projects'
						alt='/'>
						<p className='py-2 text-yellow-400 text-lg underline cursor-pointer'>
							Check out some of my projects
						</p>
					</a>
				</div>
				<div className='w-full h-auto m-auto shadow-lg shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200'>
					<img
						className='rounded-xl'
						src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/about.jpg'
						alt='/'
						width={370}
						height={570}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
