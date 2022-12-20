import SmallButton from '../SmallButton';

const Portfolio = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] z-5 bg-black/60' />
				<img
					className='absolute z-[-500]'
					layout='fill'
					// objectFit='cover'
					src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/madrportfolio.webp'
					alt='/'
				/>
				<div className='absolute text-3xl font-bold  top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
					<h2 className='py-2 text-yellow-400'>MaDrPortfolio</h2>
					<h3>Astro / React / Tailwind </h3>
				</div>
			</div>
			<div className='mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 bg-black'>
				<div className='col-span-4'>
					<p className='text-xl font-bold text-yellow-400 mb-4'>Description</p>
					<p className='mb-4'>
						My modern visual portfolio built with Astro, React components, &
						Tailwind
					</p>
					<h2 className='text-lg text-blue-600 mb-4'>Overview</h2>
					<p className='mb-4'>
						I originally built this portfolio in Next.js to get a better handle
						on Next 13 as I move towards developing more apps in Vercel's
						ecosystem. You can view that version here:{' '}
						<a href='https://nextjsportfolio.madr.io/'>
							<span className='text-yellow-400'>Next.js version</span>.
						</a>{' '}
						While experiencing no problems in production or hosting the app on
						Vercel, I ran into too many incompatibilities with Next Image
						components and hosting Next 13 on Cloudflare.
					</p>
					<p className='mb-4'>
						Since the site is static anyways, I decided to spend a day rewriting
						the app in Astro. I cleaned up the the UI a bit, added Tailwind's
						HeadlessUI, and pieced together a much cleaner, much faster version
						of my new portfolio. It's still a work in progress.
					</p>
					<p>
						In time, I plan to migrate the JSX pages to Astro pages, leaving
						only the actual components as JSX. Some unique challenges I
						encountered included: How to implement icons with on-hover effects
						in without access to React/Icons, and how to conditionally change
						CSS based on route without access to useEffect on Next/Router. I
						ended up using inline SVGs with on-hover fill changes for the icons,
						and I simply created a second Navbar component for my pages instead
						of changing CSS based on route.
					</p>
					<a href='https://madr.blog/'>
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
								Astro
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
					<p className='text-xl font-bold underline cursor-pointer text-yellow-400'>
						← Back
					</p>
				</a>
			</div>
		</div>
	);
};
export default Portfolio;
