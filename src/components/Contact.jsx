import Button from './Button';

const Contact = () => {
	return (
		<div
			id='contact'
			className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
				<p className='text-xl tracking-widest uppercase text-blue-600'>
					Contact
				</p>
				<h2 className='py-4'>Let&apos;s Chat!</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-700 rounded-xl p-4'>
						<div className='lg:p-4 h-full '>
							<div>
								<img
									className='rounded-xl shadow-lg shadow-gray-700  hover:scale-105 ease-in duration-200'
									src='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/contact.jpg'
									alt='/'
									width={981}
									height={654}
								/>
							</div>
							<div>
								<h2 className='py-2 text-blue-600'>MaDrCloudDev</h2>
								<p className='text-yellow-400'>Full-stack Web Developer</p>
								<p className='py-4'>
									I am available for freelance or full-time positions. Contact
									me and let&apos;s talk.
								</p>
							</div>
							<div>
								<p className='uppercase pt-8'>Connect With Me</p>
								<div className='flex items-center justify-between py-4'>
									<a href='mailto:MaDrCloudDev@outlook.com'>
										<div className='rounded-full border border-gray-800 shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-200 hover:border-yellow-400 hover:text-yellow-400'>
											<svg
												class='h-4 w-4 hover:fill-yellow-400 hover:text-yellow-400'
												xmlns='http://www.w3.org/2000/svg'
												fill='currentColor'
												viewBox='0 0 21 21'
												stroke='currentColor'
												aria-hidden='true'>
												<path
													d='M14.608 12.172C14.608 13.012 14.847 13.347 15.472 13.347C16.865 13.347 17.752 11.572 17.752 8.62C17.752 4.108 14.464 1.948 10.359 1.948C6.136 1.948 2.295 4.78 2.295 10.132C2.295 15.244 5.655 18.028 10.815 18.028C12.567 18.028 13.743 17.836 15.542 17.236L15.928 18.843C14.152 19.42 12.254 19.587 10.791 19.587C4.023 19.587 0.398003 15.867 0.398003 10.131C0.398003 4.347 4.599 0.410999 10.383 0.410999C16.407 0.410999 19.598 4.011 19.598 8.427C19.598 12.171 18.423 15.027 14.727 15.027C13.046 15.027 11.943 14.355 11.799 12.866C11.367 14.522 10.215 15.027 8.654 15.027C6.566 15.027 4.814 13.418 4.814 10.179C4.814 6.915 6.351 4.899 9.111 4.899C10.575 4.899 11.487 5.475 11.893 6.387L12.59 5.115H14.606V12.172H14.608V12.172ZM11.657 9.004C11.657 7.685 10.672 7.132 9.856 7.132C8.968 7.132 7.985 7.851 7.985 9.964C7.985 11.644 8.729 12.58 9.856 12.58C10.648 12.58 11.657 12.076 11.657 10.684V9.004Z'
													fill=''
												/>
											</svg>
										</div>
									</a>
									<a href='https://www.linkedin.com/in/matthew-drish-920440241'>
										<div className='rounded-full border border-gray-800 shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-200 hover:border-yellow-400 hover:text-yellow-400'>
											<svg
												class='h-4 w-4 hover:fill-yellow-400 hover:text-yellow-400'
												xmlns='http://www.w3.org/2000/svg'
												fill='currentColor'
												viewBox='0 0 18 21'
												stroke='currentColor'
												aria-hidden='true'>
												<path
													d='M0 1.4325C0 0.64125 0.6575 0 1.46875 0H18.5312C19.3425 0 20 0.64125 20 1.4325V18.5675C20 19.3588 19.3425 20 18.5312 20H1.46875C0.6575 20 0 19.3588 0 18.5675V1.4325ZM6.17875 16.7425V7.71125H3.1775V16.7425H6.17875ZM4.67875 6.4775C5.725 6.4775 6.37625 5.785 6.37625 4.9175C6.3575 4.03125 5.72625 3.3575 4.69875 3.3575C3.67125 3.3575 3 4.0325 3 4.9175C3 5.785 3.65125 6.4775 4.65875 6.4775H4.67875V6.4775ZM10.8138 16.7425V11.6988C10.8138 11.4288 10.8337 11.1587 10.9137 10.9662C11.13 10.4275 11.6238 9.86875 12.4538 9.86875C13.54 9.86875 13.9737 10.6963 13.9737 11.9113V16.7425H16.975V11.5625C16.975 8.7875 15.495 7.4975 13.52 7.4975C11.9275 7.4975 11.2138 8.3725 10.8138 8.98875V9.02H10.7938C10.8004 9.00957 10.8071 8.99915 10.8138 8.98875V7.71125H7.81375C7.85125 8.55875 7.81375 16.7425 7.81375 16.7425H10.8138Z'
													fill=''
												/>
											</svg>
										</div>
									</a>
									<a href='https://www.github.com/MaDrCloudDev/'>
										<div className='rounded-full border border-gray-800 shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-200 hover:border-yellow-400 hover:text-yellow-400'>
											<svg
												class='h-4 w-4 hover:fill-yellow-400 hover:text-yellow-400'
												xmlns='http://www.w3.org/2000/svg'
												fill='currentColor'
												viewBox='0 0 21 21'
												stroke='currentColor'
												aria-hidden='true'>
												<path
													d='M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1728 18.8175 16.8979 17.5417 18.12 15.8397C19.3421 14.1377 19.9997 12.0953 20 10C20 4.475 15.525 0 10 0Z'
													fill=''
												/>
											</svg>
										</div>
									</a>
									<a href='https://1drv.ms/b/s!AlMWEDAJ82TdgR6YC7RaqHAVPXMN?e=hXG5UJ'>
										<div className='rounded-full border border-gray-800 shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-200 hover:border-yellow-400 hover:text-yellow-400'>
											<svg
												class='h-4 w-4 hover:fill-yellow-400 hover:text-yellow-400'
												xmlns='http://www.w3.org/2000/svg'
												fill='currentColor'
												viewBox='0 0 21 21'
												stroke='currentColor'
												aria-hidden='true'>
												<path
													d='M13.75 7.5C13.75 8.49456 13.3549 9.44839 12.6517 10.1517C11.9484 10.8549 10.9946 11.25 10 11.25C9.00544 11.25 8.05161 10.8549 7.34835 10.1517C6.64509 9.44839 6.25 8.49456 6.25 7.5C6.25 6.50544 6.64509 5.55161 7.34835 4.84835C8.05161 4.14509 9.00544 3.75 10 3.75C10.9946 3.75 11.9484 4.14509 12.6517 4.84835C13.3549 5.55161 13.75 6.50544 13.75 7.5V7.5Z'
													fill=''
												/>
												<path
													d='M2.5 0C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5L0 17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H17.5C18.163 20 18.7989 19.7366 19.2678 19.2678C19.7366 18.7989 20 18.163 20 17.5V2.5C20 1.83696 19.7366 1.20107 19.2678 0.732233C18.7989 0.263392 18.163 0 17.5 0L2.5 0ZM17.5 1.25C17.8315 1.25 18.1495 1.3817 18.3839 1.61612C18.6183 1.85054 18.75 2.16848 18.75 2.5V17.5C18.75 17.8315 18.6183 18.1495 18.3839 18.3839C18.1495 18.6183 17.8315 18.75 17.5 18.75V17.5C17.5 16.25 16.25 12.5 10 12.5C3.75 12.5 2.5 16.25 2.5 17.5V18.75C2.16848 18.75 1.85054 18.6183 1.61612 18.3839C1.3817 18.1495 1.25 17.8315 1.25 17.5V2.5C1.25 2.16848 1.3817 1.85054 1.61612 1.61612C1.85054 1.3817 2.16848 1.25 2.5 1.25H17.5Z'
													fill=''
												/>
											</svg>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className='col-span-3 w-full h-auto shadow-lg shadow-gray-700 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form
								action='https://getform.io/f/3f002cfb-f7eb-41f4-9999-aa827599f60a'
								method='POST'
								encType='multipart/form-data'>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Name</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300 bg-black'
											type='text'
											name='name'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Phone Number
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300 bg-black'
											type='text'
											name='phone'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Email</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300 bg-black'
										type='email'
										name='email'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Subject</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300 bg-black'
										type='text'
										name='subject'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Message</label>
									<textarea
										className='border-2 rounded-lg p-3 border-gray-300 bg-black'
										rows='10'
										name='message'></textarea>
								</div>
								<Button text='Message' />
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<a href='https://1drv.ms/b/s!AlMWEDAJ82TdgR6YC7RaqHAVPXMN?e=hXG5UJ'>
						<div className='rounded-full border border-gray-800 shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-200 hover:border-yellow-400 hover:text-yellow-400'>
							<svg
								class='h-8 w-8 hover:fill-yellow-400 hover:text-yellow-400'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 18 21'
								stroke='currentColor'
								aria-hidden='true'>
								<path
									d='M2.10291 20.1667L0 18.0638L8.94855 9.11522L17.8971 18.0638L15.7942 20.1667L8.94855 13.3359L2.10291 20.1667ZM2.10291 11.2181L0 9.11522L8.94855 0.166672L17.8971 9.11522L15.7942 11.2181L8.94855 4.3874L2.10291 11.2181Z'
									fill=''
								/>
							</svg>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Contact;
