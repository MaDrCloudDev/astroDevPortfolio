const ProjectItem = ({ title, backgroundImg, projectUrl, frameWorks }) => {
	return (
		<div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-700 rounded-xl p-4 group hover:bg-gradient-to-r from-blue-700 to-blue-400'>
			<img
				className='rounded-xl group-hover:opacity-10'
				src={backgroundImg}
				alt='/'
				width={645}
				height={770}
			/>
			<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
				<h3 className='text-2xl text-white tracking-wider text-center'>
					{title}
				</h3>
				<p className='pb-4 pt-2 text-white text-center'>{frameWorks}</p>
				<a href={projectUrl}>
					<p className='text-center border p-3 rounded-lg bg-black text-white font-bold text-lg cursor-pointer hover:text-yellow-400 hover:border-yellow-400 hover:scale-105 ease-in duration-200'>
						More Info
					</p>
				</a>
			</div>
		</div>
	);
};

export default ProjectItem;
