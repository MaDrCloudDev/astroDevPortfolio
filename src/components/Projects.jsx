import ProjectItem from '../components/ProjectItem';

const Projects = () => {
	return (
		<div
			id='projects'
			className='w-full mt-20'>
			<div className='max-w-[1240px] mx-auto px-2 py-16'>
				<p className='text-xl tracking-widest uppercase text-blue-600'>
					Projects
				</p>
				<h2 className='py-4'>What I&apos;ve Developed</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem
						title='AccessibleReactTodo'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/accessiblereacttodo.webp'
						projectUrl='/accessiblereacttodo'
						frameWorks='React'
					/>
					<ProjectItem
						title='astroConversion'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/astroconversion.webp'
						projectUrl='/astroconversion'
						frameWorks='Astro'
					/>
					<ProjectItem
						title='astroSharedState'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/astrosharedstate.webp'
						projectUrl='/astrosharedstate'
						frameWorks='Astro / React / SolidJS / Svelte / Vue / AlpineJS'
					/>
					<ProjectItem
						title='callingCard'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/callingcard.webp'
						projectUrl='/callingcard'
						frameWorks='CSS / HTML / JavaScript / Vanta.js'
					/>
					<ProjectItem
						title='campMaDrs'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/campmadrs.webp'
						projectUrl='/campmadrs'
						frameWorks='Bootstrap / Cloudinary / EJS / Express/ Mapbox / MongoDB / Node.js / Passport'
					/>
					<ProjectItem
						title='goalsMaDr'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/goalsmadr.webp'
						projectUrl='/goalsmadr'
						frameWorks='Express / MongoDB / Node.js / React'
					/>
					<ProjectItem
						title='MaDr.io'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/madrio.webp'
						projectUrl='/madrio'
						frameWorks='Svelte / tsParticles'
					/>
					<ProjectItem
						title='MaDrPortfolio'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/madrportfolio.webp'
						projectUrl='/portfolio'
						frameWorks='Next.js / Tailwind'
					/>
					<ProjectItem
						title='notesApp'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/madrnotesapp.webp'
						projectUrl='/notesapp'
						frameWorks='CSS / HTML / JavaScript'
					/>
					<ProjectItem
						title='Notflix'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/notflix.webp'
						projectUrl='/notflix'
						frameWorks='Firebase / React / Tailwind'
					/>
					<ProjectItem
						title='simpleWeatherApp'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/simpleweatherapp.webp'
						projectUrl='/simpleweatherapp'
						frameWorks='CSS / React'
					/>
					<ProjectItem
						title='t3StackList'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/t3stacklist.webp'
						projectUrl='/t3stacklist'
						frameWorks='Next.js / Prisma / PlanetScale / Tailwind / tRPC / TypeScript'
					/>
					<ProjectItem
						title='todoApp'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/madrtodoapp.webp'
						projectUrl='/todoapp'
						frameWorks='CSS / HTML / JavaScript'
					/>
					<ProjectItem
						title='weHadLeftTheGround'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/wehadlefttheground.webp'
						projectUrl='/wehadlefttheground'
						frameWorks='CSS / HTML / JavaScript'
					/>
					<ProjectItem
						title='Wix HOA Site'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/wixhoasite.webp'
						projectUrl='/wixhoasite'
						frameWorks='Figma / Wix'
					/>
					<ProjectItem
						title='wordGuessGame'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/madrwordguessgame.webp'
						projectUrl='/wordguessgame'
						frameWorks='CSS / HTML / Javascript'
					/>
					<ProjectItem
						title='Vector Design'
						backgroundImg='https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/vectordesign.webp'
						projectUrl='/vectordesign'
						frameWorks='Adobe Illustrator / Figma'
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
