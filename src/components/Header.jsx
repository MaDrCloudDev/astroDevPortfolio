import NavMenu from './NavMenu.jsx';
import { useState } from 'react';
import Sidebar from './Sidebar.jsx';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className='container'>
			<div className='flex py-5 px-3'>
				<div className='flex items-center pt-3'>
					<img
						className='h-10'
						src='/MaDrLogo.svg'
						alt='MaDr Logo'
					/>
				</div>
				<div className='flex-grow flex items-center z-20'>
					<NavMenu />
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
