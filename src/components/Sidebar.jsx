import { Transition } from '@headlessui/react';

const Sidebar = ({ open = false, setOpen }) => {
	return (
		<>
			<Transition show={open}>
				{/* Sliding sidebar */}
				<Transition.Child
					className='fixed right-0 top-0 w-[250px] z-30 h-screen'
					enter='transition ease-in-out duration-300 transform'
					enterFrom='translate-x-full'
					enterTo='translate-x-0'
					leave='transition ease-in-out duration-300 transform'
					leaveFrom='translate-x-0'
					leaveTo='translate-x-full'>
					<div
						id='sidebar'
						className={`fixed right-0 top-0 w-[250px] h-screen bg-black pt-20 p-8 z-50`}>
						<button
							onClick={() => setOpen(false)}
							aria-expanded={open}
							aria-controls='sidebar'>
							<svg
								className='absolute top-5 right-5 h-8 w-8 text-white hover:fill-current hover:text-red-500'
								width='26'
								height='26'
								fill='white'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z' />
								<path d='M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z' />
							</svg>
							<img
								className='absolute top-5 left-5 h-10'
								src='/MaDrLogo.svg'
								alt='MaDr Logo'
							/>
						</button>
						<ul className='flex flex-col space-y-3'>
							<a
								className='hover:text-yellow-400'
								href='/#home'
								onClick={() => setOpen(false)}>
								<li>Home</li>
							</a>
							<a
								className='hover:text-yellow-400'
								href='/#about'
								onClick={() => setOpen(false)}>
								<li>About</li>
							</a>
							<a
								className='hover:text-yellow-400'
								href='/#skills'
								onClick={() => setOpen(false)}>
								<li>Skills</li>
							</a>
							<a
								className='hover:text-yellow-400'
								href='/#projects'
								onClick={() => setOpen(false)}>
								<li>Projects</li>
							</a>
							<a
								className='hover:text-yellow-400'
								href='/#contact'
								onClick={() => setOpen(false)}>
								<li>Contact</li>
							</a>
						</ul>
					</div>
					{/* ... */}
				</Transition.Child>
				<Transition.Child
					enter='transition-opacity ease-linear duration-100'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition-opacity ease-linear duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					{/* ... */}
					<div
						onClick={() => setOpen(false)}
						className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}></div>
				</Transition.Child>
			</Transition>
		</>
	);
};

export default Sidebar;
