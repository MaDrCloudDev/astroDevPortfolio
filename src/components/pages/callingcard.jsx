import SmallButton from "../SmallButton";

const CallingCard = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] z-5 bg-black/60' />
				<img
					className='absolute z-[-500]'
					layout='fill'
					// objectFit='cover'
					src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/callingcard.webp'
					alt='/'
				/>
				<div className='absolute text-3xl font-bold  top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
					<h2 className='py-2 text-yellow-400'>callingCard</h2>
					<h3>Astro</h3>
				</div>
			</div>
			<div className='mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 bg-black'>
				<div className='col-span-4'>
					<p className='text-xl font-bold text-yellow-400 mb-4'>Description</p>
					<p className='mb-4'>
						My modern calling-card contact site using the cool 3D parallax
						effect from the header of{" "}
						<a
							target='_blank'
							className='text-yellow-400'
							href='https://astro.build'>
							Astro's official site
						</a>
					</p>
					<h2 className='text-lg text-blue-600 mb-4'>Overview</h2>
					<p className='mb-4'>
						I was previously using my{" "}
						<a
							target='_blank'
							className='text-yellow-400'
							href='https://simplecontactsite.madr.io'>
							simpleContactSite
						</a>{" "}
						as my "calling card". I wanted something more modern so I refactored{" "}
						<a
							target='_blank'
							className='text-yellow-400'
							href='https://github.com/paabloLC/astro-neumorphism'>
							Astro Neumorphism
						</a>{" "}
						by{" "}
						<a
							target='_blank'
							className='text-yellow-400'
							href='https://github.com/paabloLC'>
							paabloLC
						</a>
						. It uses the same 3D parallax effect you can see in{" "}
						<a
							target='_blank'
							className='text-yellow-400'
							href='https://astro.build'>
							Astro's official website header
						</a>
						. I really like the end result, which looks much like a traditional
						business card. I'm continuing to improve the mobile-friendliness and
						style of the final product.
					</p>
					<a
						href='https://matthewdrish.com'
						target='_blank'>
						<SmallButton text='Demo' />
					</a>
					<a
						href='https://github.com/paabloLC/astro-neumorphism'
						target='_blank'>
						<SmallButton text='Code' />
					</a>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-lg shadow-gray-700 rounded-xl p-4'>
					<div className='p-2'>
						<p className='text-center justify-center font-bold pb-2  text-yellow-400 '>
							Technologies
						</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								Astro
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
export default CallingCard;
