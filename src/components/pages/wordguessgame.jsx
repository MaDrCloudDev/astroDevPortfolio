const WordGuessGame = () => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] z-5 bg-black/60' />
				<img
					className='absolute z-[-500]'
					layout='fill'
					objectFit='cover'
					src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/madrwordguessgame.webp'
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
					<h2 className='py-2 text-yellow-400'>wordGuessGame</h2>
					<h3>CSS / HTML / Javascript</h3>
				</div>
			</div>
			<div className='mx-auto p-10 grid md:grid-cols-5 gap-8 pt-8 bg-black'>
				<div className='col-span-4'>
					<p className='font-bold text-yellow-400 mb-4'>Description</p>
					<p className='mb-4'>
						My Hangman-style word guess game I built using HTML, CSS,
						JavaScript,Babel, & Webpack
					</p>
					<h2 className='text-blue-600 mb-4'>Overview</h2>
					<p className='mb-4'>
						I built this Hangman-style word guess game as part of my Udemy
						certification. It improved my JavaScript fundamentals, my Babel and
						webpack tooling, and bolstered my understanding of interactivity in
						programming. Specifically, it helped me wrap my mind around how to
						obscure unguessed letters from the user as they attempt to find the
						solution.
					</p>
					<p>The app requires a keyboard for input and is desktop only.</p>
					<a href='https://wordguessgame.madr.io/'>
						<SmallButton text='Demo' />
					</a>
					<a href='https://github.com/MaDrCloudDev/wordguessgame'>
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
								<img className='pr-1 text-blue-400' />
								Babel
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<img className='pr-1 text-blue-400' />
								CSS
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<img className='pr-1 text-blue-400' />
								HTML
							</p>
							<p className='text-gray-200 py-2 flex items-center'>
								<img className='pr-1 text-blue-400' />
								Webpack
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

export default WordGuessGame;
