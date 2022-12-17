import { Menu } from '@headlessui/react';
import { Transition } from '@headlessui/react';

const Navmenu = () => {
	return (
		<nav>
			<ul className='hidden lg:flex lg:space-x-7 lg:ml-14'>
				<li>
					<Menu>
						<Menu.Button>
							Features{' '}
							<img
								className='inline-block ml-1'
								src='/icon-arrow-down.svg'
								alt='Icon Down Arrow'
							/>
						</Menu.Button>
						<Transition
							enter='transition duration-100 ease-out'
							enterFrom='transform scale-95 opacity-0'
							enterTo='transform scale-100 opacity-100'
							leave='transition duration-75 ease-out'
							leaveFrom='transform scale-100 opacity-100'
							leaveTo='transform scale-95 opacity-0'>
							<Menu.Items className='absolute right-0 mt-4 w-40 py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
								<Menu.Item>
									{({ active }) => (
										<a
											className={`${active && 'bg-blue-500'}`}
											href='/account-settings'>
											Account settings
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<a
											className={`${active && 'bg-blue-500'}`}
											href='/account-settings'>
											Documentation
										</a>
									)}
								</Menu.Item>
								<Menu.Item disabled>
									<span className='opacity-75'>
										Invite a friend (coming soon!)
									</span>
								</Menu.Item>
							</Menu.Items>
						</Transition>
					</Menu>
				</li>
			</ul>
		</nav>
	);
};

export default Navmenu;
