import { useState } from 'react';
import Sidebar from './Sidebar.jsx';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className='fixed w-full h-15 bg-black shadow-lg shadow-gray-700 z-[100]'>
			<div className='flex py-5 px-3'>
				<div className='flex items-center pt-3'>
					<img
						className='h-10'
						src='/MaDrLogo.svg'
						alt='MaDr Logo'
					/>
				</div>
				<div className='flex-grow flex items-center z-20'>
					<ul class='hidden lg:flex lg:space-x-7 lg:ml-14'>
						<a href='/'>
							<li className='cursor-pointer hover:text-almost-black'>Home</li>
						</a>
						<a href='/#about'>
							<li className='cursor-pointer hover:text-almost-black'>About</li>
						</a>
						<a href='/#skills'>
							<li className='cursor-pointer hover:text-almost-black'>Skills</li>
						</a>
						<a href='/#projects'>
							<li className='cursor-pointer hover:text-almost-black'>
								Projects
							</li>
						</a>
						<a href='/#contact'>
							<li className='cursor-pointer hover:text-almost-black'>
								Contact
							</li>
						</a>
					</ul>
				</div>
				<div className='flex items-center'>
					<button
						onClick={() => setOpen(true)}
						aria-expanded={open}
						aria-controls='sidebar'
						aria-label='Open Menu'>
						<img
							className='block lg:hidden'
							src='/icon-menu.svg'
							alt='Menu'
						/>
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

export default Header;
