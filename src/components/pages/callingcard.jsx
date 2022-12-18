import SmallButton from '../SmallButton';

const CallingCard = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] z-5 bg-black/60' />
				<img
					className='absolute z-[-500]'
					layout='fill'
					objectFit='cover'
					src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/callingcard.webp'
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
					<h2 className='py-2 text-yellow-400'>callingCard</h2>
					<h3>CSS / HTML / JavaScript / Vanta.js</h3>
				</div>
			</div>
			<div className='mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 bg-black'>
				<div className='col-span-4'>
					<p className='font-bold text-yellow-400 mb-4'>Description</p>
					<p className='mb-4'>
						My simple CSS calling-card-portfolio for developers who don&apos;t
						blog, or who don&apos;t want to put up a full website, built with
						HTML, CSS, & Vanta.js
					</p>
					<h2 className='text-blue-600 mb-4'>Overview</h2>
					<p className='mb-4'>
						The majority of open-source developer portfolios are overly complex
						and focus on blogging. I created this open-source calling card
						template for developers who don&apos;t blog, or who don&apos;t need
						a complex contact website.
					</p>
					<p>
						This project helped me better understand how to pull in 3D
						frameworks like Vanta.js, and has helped me hone my personal design
						philosophy of &quot;simplicity over complexity&quot;.
					</p>
					<a href='https://matthewdrish.com/'>
						<SmallButton text='Demo' />
					</a>
					<a href='https://github.com/MaDrCloudDev/callingcard'>
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
								HTML
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								JavaScript
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								Vanta.js
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
export default CallingCard;