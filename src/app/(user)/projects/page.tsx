import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { Project } from '@components/molecules/Project';

export const metadata = {
	title: 'Software Engineering projects – Mahmoud Irshaid',
	description:
		'Here you can find projects I have worked on over the last few years. Learn how I have overcome challenges.',
};

const ProjectsPage = async () => {
	const projects = [
		{
			slug: 'https://mahmoud-irshaid.github.io/Weathery/',
			title: 'Weathery',
			skills: [
				'React',
				'PWA',
				"Rest Api's",
				'Responsive design',
				'Context Api',
			],
			mainImage: '/assets/projects/weathery-main-mock.png',
			secondaryImages: [],
			description:
				'A weather forecasting application hourly for 5 days by location or country name, and conversion between Cº and Fº.',
		},
		{
			slug: 'https://mahmoud-irshaid.github.io/WPM-test/',
			title: 'WPM-test',
			skills: ['React', 'PWA', 'Responsive design', 'Context Api'],
			mainImage: '/assets/projects/wpmtest-main-mock.png',
			secondaryImages: [],
			description:
				'A website to test your typing speed in one minute with an interactive style and save the highest 3 scores.',
		},
		{
			slug: 'https://tracky1.netlify.app/welcome',
			title: 'Tracky',
			skills: [
				'React',
				'Node',
				'Express',
				'JWT',
				'Socket.io',
				'MongoDb',
				"Rest Api's",
			],
			mainImage: '/assets/projects/tracky-main-mock.png',
			secondaryImages: [],
			description:
				"A project to track your friend's location. the project allows users to create an account with the ability to add friends, and track online friends locations with a chat ability within tracking.",
		},
		{
			slug: 'https://bookent.netlify.app/',
			title: 'Bookent',
			skills: [
				'React',
				'PWA',
				'Node',
				'Express',
				'JWT',
				'Socket.io',
				'MongoDb',
				"Rest Api's",
				'cloudinary',
			],
			mainImage: '/assets/projects/bookent-main-mock.png',
			secondaryImages: [
				'/assets/projects/bookent-second1.png',
				'/assets/projects/bookent-second2.png',
			],
			description:
				'A project for exchanging books, the project allows users to create an account and upload their books information, and connect with other users by phone number or by chatting.',
		},
		{
			slug: '',
			title: 'Messenger',
			skills: ['React Native', 'Sendbird SDK', 'Redux'],
			mainImage: '/assets/projects/Messenger-main-mock.png',
			secondaryImages: [
				'/assets/projects/Messenger-second1.png',
				'/assets/projects/Messenger-second2.png',
			],
			description:
				'Chatting app allows you to communicate with your customers in web chat rooms. It enables you to send and receive messages and make video calls.',
		},
		{
			slug: '',
			title: 'Laser Avenue Consumer',
			skills: [
				'React Native',
				'Expo',
				'Redux',
				'Nx',
				'micro frontend',
				'Native base',
			],
			mainImage: '/assets/projects/laseravenue-main-mocky.png',
			secondaryImages: [],
			description:
				'A clinic app for patients is a mobile application that provides patients with convenient access to their medical information and healthcare providers. This app allows patients to manage their health information, schedule appointments. and it includes features such as a calendar for scheduling appointments, reminders for upcoming appointments, and the ability to view and reschedule appointments as needed.',
		},
	];

	return (
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 pb-8 text-3xl md:text-5xl lg:text-6xl">
					Projects
				</h1>
				{projects.map((project, i) => (
					<Project key={project.slug} {...project} index={i} />
				))}
			</Container>
		</AnimatePage>
	);
};

export default ProjectsPage;
