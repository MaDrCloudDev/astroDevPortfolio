const Button = ({ text }) => {
	return (
		<button className='px-8 py-2 mt-4 mr-8 p-4 hover:scale-105 ease-in duration-200 shadow-lg shadow-gray-700 rounded-xl text-xl font-bold uppercase bg-gradient-to-r from-blue-700 to-blue-400 hover:text-yellow-400 hover:from-blue-400 hover:to-blue-700'>
			{text}
		</button>
	);
};

export default Button;
