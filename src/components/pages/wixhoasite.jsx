const WixHoaSite = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] z-5 bg-black/60' />
				<img
					className='absolute z-[-500]'
					layout='fill'
					objectFit='cover'
					src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/wixhoasite.webp'
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
					<h2 className='py-2 text-yellow-400'>Wix HOA Site</h2>
					<h3>Figma / Wix</h3>
				</div>
			</div>
			<div className='mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 bg-black'>
				<div className='col-span-4'>
					<p className='font-bold text-yellow-400 mb-4'>Description</p>
					<p className='mb-4'>
						A Wix website I created for a local homeowner association
					</p>
					<h2 className='text-blue-600 mb-4'>Overview</h2>
					<p>
						Before transitioning into web development, I was focused on small
						business development, which often involved designing and building
						Wix and WordPress websites. This is a Wix website I built for a
						local homeowner association.
					</p>
					<a href='https://matthewdrish.wixsite.com/mdwebdevhoacopy'>
						<button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-200'>
							Demo
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
								Figma
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<img className='pr-1 text-blue-600' />
								Wix
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

export default WixHoaSite;
