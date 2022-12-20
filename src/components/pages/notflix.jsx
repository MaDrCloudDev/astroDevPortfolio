import SmallButton from '../SmallButton';

const Notflix = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] z-5 bg-black/60' />
				<img
					className='absolute z-[-500]'
					layout='fill'
					// objectFit='cover'
					src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/notflix.webp'
					alt='/'
				/>
				<div className='absolute text-3xl font-bold  top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
					<h2 className='py-2 text-yellow-400'>Notflix</h2>
					<h3>Firebase / React / Tailwind</h3>
				</div>
			</div>
			<div className='mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 bg-black'>
				<div className='col-span-4'>
					<p className='text-xl font-bold text-yellow-400 mb-4'>Description</p>
					<p className='mb-4'>
						A simple full-stack Netflix clone I built using React, Talwind,
						Axios, Firebase, & The Movie Database API
					</p>
					<h2 className='text-lg text-blue-600 mb-4'>Overview</h2>
					<p className='mb-4'>
						A relatively simple Netflix clone I built to practice rapidly
						recreating modern styling and layouts with Tailwind, improve my
						competency in React, and to practice my backend capabilities by
						setting up and connecting a database and auth with Firebase.
					</p>
					<p>
						Primarily a front-end project, the apps only real functionality is
						the ability to sign in, favorite movies, and view your favorited
						movies on the Accounts page. Not intended to be a perfect recreation
						of modern Netflix, but a testament to how powerful Tailwind is for
						rapid prototyping.
					</p>
					<a href='https://notflix.madr.io/'>
						<SmallButton text='Demo' />
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
								Firebase
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								React
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								Tailwind
							</p>
						</div>
					</div>
				</div>
				<a href='/#projects'>
					<p className='text-xl font-bold underline cursor-pointer font-bold text-md text-yellow-400'>
						← Back
					</p>
				</a>
			</div>
		</div>
	);
};
export default Notflix;
