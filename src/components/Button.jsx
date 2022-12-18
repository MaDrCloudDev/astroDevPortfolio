const Button = ({ text }) => {
	return (
		<button className='w-full p-4 mt-4 hover:scale-105 ease-in duration-200 shadow-lg shadow-gray-700 rounded-xl uppercase bg-gradient-to-r from-blue-700 to-blue-400'>
			{text}
		</button>
	);
};

export default Button;