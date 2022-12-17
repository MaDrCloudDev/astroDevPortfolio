const Main = () => {
	return (
		<div
			id='home'
			className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase tracking-widest text-yellow-400'>
						Let&apos;s build the web together
					</p>
					<h1 className='py-4 text-gray-400'>
						Hi, I&apos;m <span className='text-blue-600'>Matt</span>
					</h1>
					<h1 className='py-2 text-gray-400'>
						A <span className='text-yellow-400'>Full-stack </span>Web Developer
					</h1>
					<p className='py-4 text-gray-200 max-w-[70%] m-auto'>
						Junior full-stack web developer specializing in HTML, CSS,
						JavaScript & TypeScript. Linux, Node.js, & NoSQL. Jamstack & Vector
						Design. PWA enthusiast.
					</p>
					<div className='flex items-center justify-between max-w-[420px] m-auto py-4'>
						<a href='https://www.linkedin.com/in/matthew-drish-920440241'>
							<div className='rounded-full shadow-lg border border-gray-800 shadow-gray-700 p-6 m-3 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-yellow-400 hover:border-yellow-400'>
								<img />
							</div>
						</a>
						<a href='https://github.com/MaDrCloudDev'>
							<div className='rounded-full shadow-lg border border-gray-800 shadow-gray-700 p-6 m-3 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-yellow-400 hover:border-yellow-400'>
								<img />
							</div>
						</a>
						<a href='mailto:MaDrCloudDev@outlook.com'>
							<div className='rounded-full shadow-lg border border-gray-800 shadow-gray-700 p-6 m-3 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-yellow-400 hover:border-yellow-400'>
								<img />
							</div>
						</a>
						<a href='https://1drv.ms/b/s!AlMWEDAJ82TdgR6YC7RaqHAVPXMN?e=hXG5UJ'>
							<div className='rounded-full shadow-lg border border-gray-800 shadow-gray-700 p-6 m-3 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-yellow-400 hover:border-yellow-400'>
								<img />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
