const Button = ({ text }) => {
	return (
		<button className='w-full p-4 mt-4 hover:scale-105 ease-in duration-200 shadow-md shadow-gray-700 rounded-xl text-xl font-bold bg-gradient-to-r from-black to-gray-800 hover:text-yellow-400 hover:from-gray-800 hover:to-black'>
			{text}
		</button>
	);
};

export default Button;
