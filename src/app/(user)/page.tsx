import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { Service } from '@components/atoms/Service/Service';
import { HeroSection } from '@components/molecules/HeroSection/HeroSection';

import LogoExpo from '@root/public/assets/tools/expo-svgrepo-com.svg';
import LogoFigma from '@root/public/assets/tools/figma.svg';
import LogoJest from '@root/public/assets/tools/jest-snapshot-svgrepo-com.svg';
import LogoNext from '@root/public/assets/tools/nextjs.svg';
import LogoReact from '@root/public/assets/tools/react-svgrepo-com.svg';
import LogoRedux from '@root/public/assets/tools/redux-svgrepo-com.svg';

export const metadata = {
	title: 'Software Engineer and Consultant Mahmoud Irshaid',
	description:
		'A Front-End Software Engineer with a focus on JavaScript and React. I have more than 10 years experience working in software engineering and consulting.',
	keywords: [
		'Software Engineer',
		'Mahmoud Irshaid',
		'Software Consulting',
		'Front-End',
		'Full-Stack',
		'React',
		'React Native',
		'JavaScript',
		'TypeScript',
		'Redux',
		'Next.js',
		'RESTful APIs',
		'HTML',
		'CSS',
		'Expo',
		'Jest',
		'Node',
		'Express',
	],
};

const HomePage = async () => {
	const services = [
		{
			title: 'Website & App Development',
			subtitle:
				'Build web applications and websites that are well-designed, accessible, and performant.',
			body: "Experienced Software engineer with a passion for web and mobile development, working with clients from startups to large enterprise businesses.I like to focus on accessibility, performance, and clean code.As a web and mobile development consultant, I help my clients create the best possible digital products for their businesses.I don't just develop websites and apps, I make them beautiful, fast and accessible to people with disabilities. My goal is to work with you to help you reach your full potential.",
			image:
				'https://cdn.sanity.io/images/yq5nnpfd/production/4003b5d63e0fe7d71b95891a263c0fa203580dc1-900x600.svg',
		},
	];

	return (
		<AnimatePage>
			<HeroSection />
			<section id="tools" className="my-40">
				<Container>
					<h2 className="headline mt-24 text-center text-xl md:text-2xl lg:text-3xl">
						Some of my favourite tools
					</h2>

					<div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-x-16 gap-y-8">
						<LogoNext className="w-32" aria-label="Next.js" />
						<LogoReact className="w-20 h-20" aria-label="React" />
						<LogoExpo className="w-28 h-28" aria-label="Expo" />
						<LogoRedux className="w-20 h-20" aria-label="Redux" />
						<LogoJest className="w-20 h-20" aria-label="Jest" />
						<LogoFigma className="w-8" aria-label="Figma" />
					</div>
				</Container>
			</section>
			<section id="services">
				<Container>
					<h2 className="headline mt-20 text-2xl md:text-4xl lg:text-5xl">
						Services I provide
						<span className="mt-2 block text-xl font-bold text-off-black dark:text-off-white md:text-2xl">
							as a software architect with a passion for creating applications
							and websites that people love.
						</span>
					</h2>

					{services.map((service, i) => (
						<Service key={i} {...service} isReversed={i % 2 == 0} />
					))}
				</Container>
			</section>
		</AnimatePage>
	);
};

export default HomePage;
