const T3StackList = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] z-5 bg-black/60' />
				<img
					className='absolute z-[-500]'
					layout='fill'
					objectFit='cover'
					src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/t3stacklist.webp'
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
					<h2 className='py-2 text-yellow-400'>t3StackList</h2>
					<h3>Next.js / Prisma / PlanetScale / Tailwind / tRPC / TypeScript</h3>
				</div>
			</div>
			<div className='mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 bg-black'>
				<div className='col-span-4'>
					<p className='font-bold text-yellow-400 mb-4'>Description</p>
					<p className='mb-4'>
						My simple full-stack list built with Next.js, TypeScript, Tailwind,
						& tRPC (T3 Stack). Prisma & PlanetScale, w/ Framer Motion
					</p>
					<h2 className='text-blue-600 mb-4'>Overview</h2>
					<p className='mb-4'>
						In order to better understand Next.js, TypeScript, type safety, and
						non-REST APIs using tRPC, I developed this full-stack list
						application using T3 Stack, Prisma, and PlanetScale. Because this
						app is full-stack, all users are accessing and editing the same
						shared list.
					</p>
					<p>
						Building these types of projects is helping me understand the mental
						model of using tRPC mutations and Prisma to query my database as
						opposed to traditional REST routes. It also helps me push my
						competencies with Tailwind and React user interfaces as I move
						towards more Next.JS development.
					</p>
					<a href='https://t3stacklist.netlify.app/'>
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
								Next.js
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								Prisma
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								PlanetScale
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								Tailwind
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								tRPC
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								TypeScript
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								Framer Motion
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

export default T3StackList;
