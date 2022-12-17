const NavMenu = () => {
	return (
		<nav>
			<ul class='hidden lg:flex lg:space-x-7 lg:ml-14'>
				<li></li>
				<li className='cursor-pointer hover:text-almost-black'>Home</li>
				<li className='cursor-pointer hover:text-almost-black'>About</li>
				<li className='cursor-pointer hover:text-almost-black'>Skills</li>
				<li className='cursor-pointer hover:text-almost-black'>Projects</li>
				<li className='cursor-pointer hover:text-almost-black'>Contact</li>
			</ul>
		</nav>
	);
};

export default NavMenu;
