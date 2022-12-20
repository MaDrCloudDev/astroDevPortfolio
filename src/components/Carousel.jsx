import { useState } from 'react';

const Carousel = () => {
	const slides = [
		{
			url: 'https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/vectordesign2.webp',
		},
		{
			url: 'https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/vectordesign3.webp',
		},
		{
			url: 'https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/vectordesign.webp',
		},
	];
	const [currentIndex, setCurrentIndex] = useState(0);
	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className='lg:h-screen md:h-[700px] h-[350px] w-full m-auto py-16 px-4 relative'>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-full h-full bg-center bg-contain bg-no-repeat'></div>
			{/* left arrow */}
			<div
				className='absolute top-[50%] left-5 text-6xl p-2 cursor-pointer text-yellow-400 bg-black/70'
				onClick={prevSlide}>
				←
			</div>
			{/* right arrow */}
			<div
				className='absolute top-[50%] right-5 text-6xl p-2 cursor-pointer text-yellow-400 bg-black/70'
				onClick={nextSlide}>
				→
			</div>
		</div>
	);
};

export default Carousel;
