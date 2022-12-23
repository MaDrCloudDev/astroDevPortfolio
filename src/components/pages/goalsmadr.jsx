import SmallButton from '../SmallButton';

const GoalsMaDr = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] z-5 bg-black/60' />
				<img
					className='absolute z-[-500]'
					layout='fill'
					// objectFit='cover'
					src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/goalsmadr.webp'
					alt='/'
				/>
				<div className='absolute text-3xl font-bold  top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
					<h2 className='py-2 text-yellow-400'>goalsMaDr</h2>
					<h3>Express / MongoDB / Node.js / React</h3>
				</div>
			</div>
			<div className='mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 bg-black'>
				<div className='col-span-4'>
					<p className='text-xl font-bold text-yellow-400 mb-4'>Description</p>
					<p className='mb-4'>
						A full-stack app I built to help users save & track their goals,
						developed with MongoDB, Express, React, & Node.js. Mongoose & Axios.
						CRUD, REST API, & Redux for state management
					</p>
					<p className='mb-4'>
						• NOTE: The Node app takes some time to wake up. Give it a minute
					</p>
					<h2 className='text-lg text-blue-600 mb-4'>Overview</h2>
					<p>
						Another opportunity to scaffold a REST API with a modern React UI.
						Building this app helped me get my feet wet with Redux and improve
						my understanding of state management. Live site goalsMaDr
					</p>
					<a href='https://goalsmadr.onrender.com/' target="_blank">
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
								Axios
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								Express
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								MongoDB
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								Mongoose
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								Node.js
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								React
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
export default GoalsMaDr;
