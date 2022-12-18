import SmallButton from '../SmallButton';

const AstroSharedState = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] z-5 bg-black/60' />
				<img
					className='absolute z-[-500]'
					layout='fill'
					objectFit='cover'
					src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/astrosharedstate.webp'
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
					<h2 className='py-2 text-yellow-400'>astroSharedState</h2>
					<h3>Astro / React / SolidJS / Svelte / Vue / AlpineJS</h3>
				</div>
			</div>
			<div className='mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 bg-black'>
				<div className='col-span-4'>
					<p className='font-bold text-yellow-400 mb-4'>Description</p>
					<p className='mb-4'>
						Simple React, SolidJS, Svelte, & Vue counter components with state &
						shared state in Astro
					</p>
					<h2 className='text-blue-600 mb-4'>Overview</h2>
					<p className='mb-4'>
						Coming from a content-website background, Astro is my preferred
						framework for creating content sites. I developed this project to
						boost my understanding of state and framework interoperability
						within Astro. The React, SolidJS, Svelte, and Vue components have
						their own independent state, as well as a shared state between the
						different frameworks/components. I added an AlpineJS counter for
						fun.
					</p>
					<p>
						This can be used a template for anyone curious how to share state
						between frameworks in Astro, or anyone incrementally updating their
						Astro site from one framework to another.
					</p>
					<a href='https://astrosharedstate.netlify.app/'>
						<SmallButton text='Demo' />
					</a>
					<a href='https://github.com/MaDrCloudDev/astrosharedstate'>
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
								Astro
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								React
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								SolidJS
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								Svelte
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								Vue
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<bullet className='text-4xl mr-2 text-blue-600'>•</bullet>
								AlpineJS
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
export default AstroSharedState;
