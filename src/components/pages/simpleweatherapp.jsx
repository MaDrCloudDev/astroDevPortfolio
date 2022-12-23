import SmallButton from '../SmallButton';

const SimpleWeatherApp = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] z-5 bg-black/60' />
				<img
					className='absolute z-[-500]'
					layout='fill'
					// objectFit='cover'
					src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/simpleweatherapp.webp'
					alt='/'
				/>
				<div className='absolute text-3xl font-bold  top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
					<h2 className='py-2 text-yellow-400'>simpleWeatherApp</h2>
					<h3>CSS / React</h3>
				</div>
			</div>
			<div className='mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 bg-black'>
				<div className='col-span-4'>
					<p className='text-xl font-bold text-yellow-400 mb-4'>Description</p>
					<p className='mb-4'>
						An extremely simple, single-component weather app I built with
						React, plain CSS, & OpenWeatherMap API
					</p>
					<h2 className='text-lg text-blue-600 mb-4'>Overview</h2>
					<p className='mb-4'>
						In order to keep my skills sharp, I program every day. I made this
						mobile-friendly, single-component weather app for some React
						practice. I likely won't enhance the functionality of the app, since
						it was only intended as a quick practice project.
					</p>
					<p>
						• App does not use geolocation. A city name must be provided before
						data is displayed.
					</p>
					<p>
						• Because I opted to use direct city names to pull from the API,
						cities that share names and more obscure cities might not work
						(e.g., "Portland" will always reference Portland, OR, not Portland,
						ME. And cities like Dinosaur, CO don't provide data).
					</p>
					<a href='https://simpleweatherapp.madr.io/' target="_blank">
						<SmallButton text='Demo' />
					</a>
					<a href='https://github.com/MaDrCloudDev/simpleWeatherApp' target="_blank">
						<SmallButton text='Code' />
					</a>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-lg shadow-gray-700 rounded-xl p-4'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2 text-yellow-400'>
							Technologies
						</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								CSS
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								React
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								OpenWeatherMap API
							</p>
						</div>
					</div>
				</div>
				<a href='/#projects'>
					<p className='text-xl font-bold underline cursor-pointer text-yellow-400'>
						← Back
					</p>
				</a>
			</div>
		</div>
	);
};
export default SimpleWeatherApp;
