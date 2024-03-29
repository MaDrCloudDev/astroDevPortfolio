import Carousel from "./Carousel";

const VectorDesign = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] z-5 bg-black/60' />
				<img
					className='absolute z-[-500]'
					layout='fill'
					// objectFit='cover'
					src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/vectordesign.webp'
					alt='/'
				/>
				<div className='absolute text-3xl font-bold  top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
					<h2 className='py-2 text-yellow-400'>vectorDesign</h2>
					<h3>Adobe Illustrator / Figma</h3>
				</div>
			</div>
			<div className='mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 bg-black'>
				<div className='col-span-4'>
					<p className='text-xl font-bold text-yellow-400 mb-4'>Description</p>
					<p className='mb-4'>vectorDesign project</p>
					<h2 className='text-lg text-blue-600 mb-4'>Overview</h2>
					<p>vectorDesign description.</p>
					{/* <div className=''>
						<img src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/vectordesign2.webp' />
						<img src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/vectordesign3.webp' />
						<img src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/vectordesign.webp' />
					</div> */}
					<Carousel />
				</div>
				<div className='col-span-4 md:col-span-1 shadow-lg shadow-gray-700 rounded-xl p-4'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2 text-yellow-400'>Tech</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>&bull;</bullet>
								Adobe Illustrator
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>&bull;</bullet>
								Figma
							</p>
						</div>
					</div>
				</div>
				<div class='flex w-[225%] justify-between'>
					<a href='/#projects'>
						<p class='text-xl font-bold underline cursor-pointer text-yellow-400 hover:text-blue-600'>
							&larr; Back to all projects
						</p>
					</a>
					<a href='/wehadlefttheground'>
						<p class='text-xl font-bold underline cursor-pointer text-yellow-400 hover:text-blue-600'>
							Next project &rarr;
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};
export default VectorDesign;
