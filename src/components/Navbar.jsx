import Navmenu from './Navmenu';

const Navbar = () => {
	return (
		<header>
			<div className='flex py-5 px-3'>
				<div className='flex items-center pt-3'>
					<img
						className='h-20'
						src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/navlogo.png'
						alt='MaDr Logo'
					/>
				</div>
				<div className='flex flex-grow items-center z-20'>
					<Navmenu />
				</div>
				<div className='flex items-center'>
					<a href='#'>
						<img
							className='block lg:hidden'
							src='/icon-menu.svg'
							alt='Navigation Menu'
						/>
					</a>
					<div className='hidden lg:flex lg:space-x-10 lg:items-center'>
						<div className='hover:text-almost-black cursor-pointer'>Login</div>
						<div className='border-2 rounded-xl px-4 py-2 cursor-pointer hover:border-almost-black hover:text-almost-black'>
							Register
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
