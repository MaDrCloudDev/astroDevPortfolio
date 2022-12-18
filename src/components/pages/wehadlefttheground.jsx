const WeHadLeftTheGround = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] z-5 bg-black/60' />
				<img
					className='absolute z-[-500]'
					layout='fill'
					objectFit='cover'
					src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/wehadlefttheground.webp'
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
					<h2 className='py-2 text-yellow-400'>weHadLeftTheGround</h2>
					<h3>CSS / HTML / JavaScript</h3>
				</div>
			</div>
			<div className='mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 bg-black'>
				<div className='col-span-4'>
					<p className='font-bold text-yellow-400 mb-4'>Description</p>
					<p className='mb-4'>My open-source, interactive CSS + JS poem</p>
					<h2 className='text-blue-600 mb-4'>Overview</h2>
					<p>
						This panelled image slider I designed can be used for advertising,
						highlighting services, or as an image gallery. I constructed it in
						order to improve my understanding of complex CSS, such as the cubic
						bezier curve used to animate the opening and closing of the panels.
						I adapted it into a poem for fun. The poem embodies my feelings
						towards my career transition into full-stack web development.
					</p>
					<a href='https://wehadlefttheground.madr.io/'>
						<button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-200'>
							Demo
						</button>
					</a>
					<a href='https://github.com/MaDrCloudDev/weHadLeftTheGround'>
						<button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-200'>
							Code
						</button>
					</a>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-lg shadow-gray-700 rounded-xl p-4'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2 text-yellow-400'>
							Technologies
						</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-200 py-2 flex items-center'>
								<img className='pr-1 text-blue-600' />
								CSS
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<img className='pr-1 text-blue-600' />
								HTML
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<img className='pr-1 text-blue-600' />
								JavaScript
							</p>
						</div>
					</div>
				</div>
				<a href='/#projects'>
					<p className='underline cursor-pointer font-bold text-md text-yellow-400'>
						Back
					</p>
				</a>
			</div>
		</div>
	);
};

export default WeHadLeftTheGround;
