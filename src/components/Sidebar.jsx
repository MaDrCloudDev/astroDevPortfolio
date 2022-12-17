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
							<img
								className='absolute top-5 right-5'
								src='/icon-close-menu.svg'
								alt='Close Menu'
							/>
							<img
								className='absolute top-5 left-5 h-10'
								src='/MaDrLogo.svg'
								alt='Close Menu'
							/>
						</button>
						<ul className='flex flex-col space-y-3'>
							<li>Home</li>
							<li>About</li>
							<li>Skills</li>
							<li>Projects</li>
							<li>Contact</li>
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
