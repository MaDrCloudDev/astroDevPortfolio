const Button = ({ text }) => {
	return (
		<button className='px-8 py-2 mt-4 mr-8 p-4 hover:scale-105 ease-in duration-200 shadow-lg shadow-gray-700 rounded-xl uppercase bg-gradient-to-r from-blue-700 to-blue-400'>
			{text}
		</button>
	);
};

export default Button;
