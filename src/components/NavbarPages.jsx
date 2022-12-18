import { useState, useEffect } from 'react';
import Sidebar from './Sidebar.jsx';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className='fixed w-full h-20 z-[100]'>
			<div className='flex py-5 px-3'>
				<div className='flex items-center pt-3'>
					<a href='/'>
						<img
							className='h-10'
							src='/MaDrLogo.svg'
							alt='MaDr Logo'
						/>
					</a>
				</div>
				<div className='flex-grow flex items-center z-20'>
					<ul class='hidden lg:flex lg:space-x-7 lg:ml-14'>
						<a href='/#home'>
							<li className='hover:text-yellow-400'>Home</li>
						</a>
						<a href='/#about'>
							<li className='hover:text-yellow-400'>About</li>
						</a>
						<a href='/#skills'>
							<li className='hover:text-yellow-400'>Skills</li>
						</a>
						<a href='/#projects'>
							<li className='hover:text-yellow-400'>Projects</li>
						</a>
						<a href='/#contact'>
							<li className='hover:text-yellow-400'>Contact</li>
						</a>
					</ul>
				</div>
				<div className='flex items-center'>
					<button
						onClick={() => setOpen(true)}
						aria-expanded={open}
						aria-controls='sidebar'
						aria-label='Open Menu'>
						<svg
							class='h-8 w-8 text-white hover:fill-current hover:text-yellow-400 lg:hidden'
							width='32'
							height='18'
							fill='white'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z' />
						</svg>
					</button>
					<Sidebar
						open={open}
						setOpen={setOpen}
					/>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
