const Main = () => {
	return (
		<div
			id='home'
			className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-xl tracking-widest text-yellow-400'>
						Let&apos;s build the web together
					</p>
					<h1 className='py-4 text-6xl text-gray-400'>
						Hi, I&apos;m <span className='text-blue-600'>Matt</span>
					</h1>
					<h1 className='py-2 text-4xl text-gray-400'>
						A <span className='text-yellow-400'>Full-stack </span>Web Developer
					</h1>
					<p className='py-4 text-gray-200 max-w-[70%] m-auto'>
						Junior full-stack web developer specializing in HTML, CSS,
						JavaScript & TypeScript. Linux, Node.js, & NoSQL. Jamstack & Vector
						Design. PWA enthusiast.
					</p>
					<div className='flex items-center justify-between max-w-[420px] m-auto py-4'>
						<a href='https://www.linkedin.com/in/matthew-drish-920440241'>
							<div className='rounded-full shadow-lg shadow-gray-700 p-6 m-3 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-yellow-400'>
								<svg
									class='h-8 w-8'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 20 20'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										d='M9.71314 7.48994C10.5453 6.63968 11.6287 6.08343 12.8891 6.08343C14.2128 6.08343 15.4822 6.60925 16.4182 7.54522C17.3542 8.48118 17.88 9.75063 17.88 11.0743V17.88H16.0651V11.0743C16.0651 10.232 15.7305 9.42413 15.1349 8.82851C14.5393 8.2329 13.7315 7.89829 12.8891 7.89829C12.0468 7.89829 11.239 8.2329 10.6434 8.82851C10.0478 9.42413 9.71314 10.232 9.71314 11.0743V17.88H7.89829V6.53714H9.71314V7.48994ZM3.36114 4.72229C3.00015 4.72229 2.65393 4.57888 2.39867 4.32362C2.14341 4.06835 2 3.72214 2 3.36114C2 3.00015 2.14341 2.65393 2.39867 2.39867C2.65393 2.14341 3.00015 2 3.36114 2C3.72214 2 4.06835 2.14341 4.32362 2.39867C4.57888 2.65393 4.72229 3.00015 4.72229 3.36114C4.72229 3.72214 4.57888 4.06835 4.32362 4.32362C4.06835 4.57888 3.72214 4.72229 3.36114 4.72229ZM2.45371 6.53714H4.26857V17.88H2.45371V6.53714Z'
										fill=''
									/>
								</svg>
							</div>
						</a>
						<a href='https://github.com/MaDrCloudDev'>
							<div className='rounded-full shadow-lg shadow-gray-700 p-6 m-3 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-yellow-400 hover:border-yellow-400'>
								<svg
									class='h-8 w-8'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 20 20'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										d='M12.9948 17.5778C12.7838 17.5778 12.5815 17.4939 12.4323 17.3448C12.2831 17.1956 12.1993 16.9932 12.1993 16.7822V14.7139C12.224 14.476 12.1986 14.2355 12.1246 14.008C12.0506 13.7806 11.9297 13.5711 11.7697 13.3933C11.6707 13.2859 11.6031 13.1533 11.5745 13.01C11.5459 12.8667 11.5572 12.7183 11.6074 12.5811C11.6575 12.4439 11.7444 12.3231 11.8587 12.232C11.9729 12.1409 12.11 12.0831 12.255 12.0648C14.1961 11.8341 15.986 11.2136 15.986 7.84852C15.9866 7.22012 15.8011 6.60561 15.453 6.08247C15.1317 5.60088 15.0144 5.01159 15.1268 4.44369C15.1985 4.07323 15.1985 3.69246 15.1268 3.322C14.5311 3.52341 13.9703 3.81592 13.4642 4.18912C13.3685 4.25707 13.259 4.30301 13.1434 4.32364C13.0279 4.34427 12.9092 4.33908 12.796 4.30845C11.3603 3.90278 9.84033 3.90278 8.40467 4.30845C8.29138 4.33908 8.17272 4.34427 8.05719 4.32364C7.94166 4.30301 7.83212 4.25707 7.73643 4.18912C7.22725 3.8116 6.66044 3.51879 6.05788 3.322C5.98223 3.69207 5.98223 4.07362 6.05788 4.44369C6.16217 5.01873 6.03956 5.61182 5.71581 6.09838C5.36917 6.62519 5.18392 7.24176 5.18281 7.87239C5.18281 10.967 6.67839 11.7943 8.92176 12.0807C9.06856 12.0989 9.20737 12.1577 9.3226 12.2504C9.43783 12.3432 9.52492 12.4662 9.57409 12.6057C9.62034 12.7411 9.62924 12.8865 9.59984 13.0265C9.57044 13.1665 9.50383 13.2959 9.40703 13.4013C9.2523 13.5667 9.13354 13.7623 9.05823 13.9759C8.98292 14.1895 8.95271 14.4164 8.96949 14.6423V16.7822C8.96949 16.9932 8.88568 17.1956 8.73649 17.3448C8.5873 17.4939 8.38496 17.5778 8.17397 17.5778C7.96299 17.5778 7.76064 17.4939 7.61145 17.3448C7.46226 17.1956 7.37845 16.9932 7.37845 16.7822V16.3288C6.59674 16.4187 5.80493 16.3139 5.07349 16.0239C4.34205 15.7338 3.69367 15.2674 3.18605 14.6661C2.92512 14.3769 2.61207 14.1394 2.26325 13.9661C2.16191 13.94 2.06671 13.8941 1.98308 13.8312C1.89946 13.7683 1.82904 13.6896 1.77585 13.5994C1.72267 13.5093 1.68775 13.4096 1.6731 13.306C1.65845 13.2024 1.66435 13.0969 1.69047 12.9955C1.71659 12.8942 1.76241 12.799 1.82532 12.7154C1.88823 12.6318 1.96699 12.5613 2.05711 12.5082C2.14723 12.455 2.24695 12.4201 2.35057 12.4054C2.45418 12.3908 2.55967 12.3967 2.66101 12.4228C3.27296 12.6457 3.81976 13.0175 4.25205 13.5047C5.04757 14.3002 5.84309 15.0003 7.35458 14.7139C7.32801 14.2868 7.39031 13.8588 7.53755 13.457C5.89878 13.0433 3.55995 11.8659 3.55995 7.8883C3.55785 6.94611 3.83465 6.02437 4.35547 5.23921C4.45221 5.09427 4.48925 4.91758 4.45889 4.74599C4.29813 3.88728 4.38931 3.0004 4.72141 2.19236C4.76653 2.08462 4.83483 1.98814 4.92145 1.90977C5.00807 1.8314 5.11088 1.77307 5.22259 1.73892C5.49306 1.65936 6.4636 1.50026 8.30126 2.69354C9.78886 2.33556 11.3402 2.33556 12.8278 2.69354C14.6654 1.50026 15.636 1.65141 15.8985 1.73892C16.0102 1.77307 16.113 1.8314 16.1996 1.90977C16.2862 1.98814 16.3545 2.08462 16.3997 2.19236C16.7324 3.00303 16.8236 3.89264 16.6622 4.75394C16.6459 4.83155 16.6453 4.91162 16.6603 4.98948C16.6753 5.06733 16.7057 5.14142 16.7497 5.20739C17.272 5.99481 17.5489 6.91953 17.5452 7.86443C17.5452 11.8977 15.2223 13.0671 13.5676 13.4331C13.7134 13.86 13.7729 14.3115 13.7426 14.7616V16.7822C13.743 16.9852 13.6658 17.1806 13.5267 17.3285C13.3877 17.4764 13.1974 17.5656 12.9948 17.5778Z'
										fill=''
									/>
								</svg>
							</div>
						</a>
						<a href='mailto:MaDrCloudDev@outlook.com'>
							<div className='rounded-full shadow-lg shadow-gray-700 p-6 m-3 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-yellow-400 hover:border-yellow-400'>
								<svg
									class='h-8 w-8'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 20 20'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										d='M9.60667 17.5467C8.52153 17.5467 7.49595 17.3381 6.52992 16.921C5.56388 16.5044 4.72039 15.9354 3.99944 15.2139C3.27796 14.4929 2.70892 13.6494 2.29234 12.6834C1.87522 11.7174 1.66667 10.6918 1.66667 9.60666C1.66667 8.5083 1.87522 7.47954 2.29234 6.52039C2.70892 5.5607 3.27796 4.72039 3.99944 3.99944C4.72039 3.27796 5.56388 2.70866 6.52992 2.29154C7.49595 1.87496 8.52153 1.66666 9.60667 1.66666C10.705 1.66666 11.7338 1.87496 12.6929 2.29154C13.6526 2.70866 14.4929 3.27796 15.2139 3.99944C15.9354 4.72039 16.5044 5.5607 16.921 6.52039C17.3381 7.47954 17.5467 8.5083 17.5467 9.60666V10.758C17.5467 11.5387 17.2788 12.2036 16.7431 12.7525C16.2069 13.3019 15.5484 13.5767 14.7677 13.5767C14.2913 13.5767 13.848 13.4708 13.4377 13.2591C13.0275 13.0473 12.69 12.7694 12.4254 12.4254C12.0681 12.7827 11.648 13.064 11.1653 13.2694C10.682 13.4742 10.1625 13.5767 9.60667 13.5767C8.5083 13.5767 7.57217 13.1895 6.79829 12.415C6.02387 11.6412 5.63667 10.705 5.63667 9.60666C5.63667 8.5083 6.02387 7.57191 6.79829 6.79749C7.57217 6.02361 8.5083 5.63666 9.60667 5.63666C10.705 5.63666 11.6414 6.02361 12.4158 6.79749C13.1897 7.57191 13.5767 8.5083 13.5767 9.60666V10.758C13.5767 11.1417 13.6958 11.4427 13.934 11.6607C14.1722 11.8794 14.4501 11.9887 14.7677 11.9887C15.0853 11.9887 15.3632 11.8794 15.6014 11.6607C15.8396 11.4427 15.9587 11.1417 15.9587 10.758V9.60666C15.9587 7.8731 15.3333 6.38091 14.0824 5.13009C12.8322 3.87981 11.3402 3.25466 9.60667 3.25466C7.8731 3.25466 6.38091 3.87981 5.13009 5.13009C3.87981 6.38091 3.25467 7.8731 3.25467 9.60666C3.25467 11.3402 3.87981 12.8322 5.13009 14.0824C6.38091 15.3333 7.8731 15.9587 9.60667 15.9587H13.5767V17.5467H9.60667ZM9.60667 11.9887C10.2683 11.9887 10.8307 11.7571 11.2939 11.2939C11.7571 10.8307 11.9887 10.2683 11.9887 9.60666C11.9887 8.945 11.7571 8.38258 11.2939 7.91941C10.8307 7.45625 10.2683 7.22466 9.60667 7.22466C8.945 7.22466 8.38258 7.45625 7.91942 7.91941C7.45625 8.38258 7.22467 8.945 7.22467 9.60666C7.22467 10.2683 7.45625 10.8307 7.91942 11.2939C8.38258 11.7571 8.945 11.9887 9.60667 11.9887Z'
										fill=''
									/>
								</svg>
							</div>
						</a>
						<a href='https://1drv.ms/b/s!AlMWEDAJ82TdgR6YC7RaqHAVPXMN?e=hXG5UJ'>
							<div className='rounded-full shadow-lg shadow-gray-700 p-6 m-3 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-yellow-400 hover:border-yellow-400'>
								<svg
									class='h-8 w-8'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 21 21'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M13.3622 6.87931C13.3622 7.68826 13.0409 8.46408 12.4689 9.03609C11.8968 9.6081 11.121 9.92946 10.3121 9.92946C9.50313 9.92946 8.72732 9.6081 8.1553 9.03609C7.58329 8.46408 7.26194 7.68826 7.26194 6.87931C7.26194 6.07036 7.58329 5.29455 8.1553 4.72254C8.72732 4.15052 9.50313 3.82917 10.3121 3.82917C11.121 3.82917 11.8968 4.15052 12.4689 4.72254C13.0409 5.29455 13.3622 6.07036 13.3622 6.87931V6.87931ZM13.4366 10.6285C14.2069 9.98636 14.7606 9.12248 15.0224 8.15444C15.2843 7.1864 15.2415 6.16119 14.9 5.21831C14.5585 4.27542 13.9348 3.46063 13.1138 2.88478C12.2928 2.30894 11.3143 2 10.3115 2C9.30864 2 8.33016 2.30894 7.50914 2.88478C6.68813 3.46063 6.06444 4.27542 5.72294 5.21831C5.38143 6.16119 5.33869 7.1864 5.60052 8.15444C5.86236 9.12248 6.41606 9.98636 7.18629 10.6285C5.98525 11.1964 4.96124 12.0801 4.22388 13.1852C3.48651 14.2903 3.06355 15.5751 3.00028 16.9021C2.99439 17.1412 3.08236 17.3731 3.24535 17.5482C3.40835 17.7232 3.6334 17.8275 3.87233 17.8387C4.11126 17.8498 4.34506 17.767 4.52366 17.6079C4.70227 17.4488 4.81149 17.2261 4.82792 16.9875C4.89443 15.5777 5.50127 14.2478 6.52246 13.2736C7.54366 12.2995 8.90077 11.756 10.3121 11.756C11.7234 11.756 13.0805 12.2995 14.1017 13.2736C15.1229 14.2478 15.7297 15.5777 15.7962 16.9875C15.7992 17.1093 15.8265 17.2293 15.8766 17.3404C15.9266 17.4516 15.9983 17.5516 16.0874 17.6346C16.1766 17.7177 16.2815 17.7821 16.3959 17.824C16.5103 17.866 16.632 17.8847 16.7537 17.879C16.8754 17.8733 16.9948 17.8434 17.1048 17.7909C17.2148 17.7385 17.3132 17.6646 17.3943 17.5736C17.4753 17.4826 17.5374 17.3763 17.5768 17.261C17.6163 17.1457 17.6323 17.0237 17.6239 16.9021C17.5604 15.575 17.1372 14.2902 16.3996 13.1851C15.662 12.08 14.6378 11.1963 13.4366 10.6285V10.6285Z'
										fill=''
									/>
								</svg>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
