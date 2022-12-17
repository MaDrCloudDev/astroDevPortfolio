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
											<img />
										</div>
									</a>
									<a href='https://www.linkedin.com/in/matthew-drish-920440241'>
										<div className='rounded-full border border-gray-800 shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-200 hover:border-yellow-400 hover:text-yellow-400'>
											<img />
										</div>
									</a>
									<a href='https://www.linkedin.com/in/matthew-drish-920440241'>
										<div className='rounded-full border border-gray-800 shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-200 hover:border-yellow-400 hover:text-yellow-400'>
											<img />
										</div>
									</a>
									<a href='https://1drv.ms/b/s!AlMWEDAJ82TdgR6YC7RaqHAVPXMN?e=hXG5UJ'>
										<div className='rounded-full border border-gray-800 shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-200 hover:border-yellow-400 hover:text-yellow-400'>
											<img />
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
								<button className='w-full p-4 text-gray-100 mt-4 hover:scale-105 ease-in duration-200'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<a href='/'>
						<div className='rounded-full shadow-lg shadow-gray-700 p-4 border border-gray-800 cursor-pointer hover:scale-110 ease-in duration-200 hover:border-yellow-400'>
							<img />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Contact;
