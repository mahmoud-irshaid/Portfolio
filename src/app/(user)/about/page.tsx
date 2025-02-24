import { AnimatePage } from '@components/atoms/AnimatePage';
import { Button } from '@components/atoms/Button';
import { Container } from '@components/atoms/Container';
import { IconDownload } from '@components/atoms/Icons';
import { Education } from '@components/organisms/Education';
import { WorkExperience } from '@components/organisms/WorkExperience';

import { Job } from '@root/src/types';

export const metadata = {
	title: 'About Mahmoud Irshaid, Software Engineer in Jordan',
	description:
		'As a passionate front-end software developer, I create amazing websites and web apps to make the internet a better place.',
};

const AboutPage = async () => {
	const jobs: Job[] = [
		{
			company: { name: 'Elevatus' },
			jobTitle: 'Front End Developer',
			fromDate: 'Jun/2022',
			toDate: 'May/2023',
			skills: [
				'TypeScript',
				'React',
				'Redux',
				'Rest APIs',
				'Jest',
				'Firebase',
				'SASS',
			],
			description: [
				'● Designed REST calls using React to streamline user interface performance.',
				'● Maintained high-level expertise in React state management strategies.',
				'● Collaborated with cross-functional teams to develop seamless integration of APIs, improving data flow within applications.',
				'● Developed reusable components to facilitate faster development timelines and improve overall code quality.',
				'● Boosted application efficiency by incorporating Redux for state management and streamlining component rerendering.',
				'● Reduced application load times by optimizing React components and utilizing code-splitting techniques.',
				'● Write and maintain unit tests, integration tests, and end-to-end tests to ensure code reliability.',
			],
		},
		{
			company: { name: 'Coderz For Software And Training' },
			jobTitle: 'Front End Developer',
			fromDate: 'Aug/2023',
			toDate: 'Sept/2024',
			skills: [
				'TypeScript',
				'React',
				'Next.js',
				'Redux',
				'Rest APIs',
				'GraphQL',
				'Leaflet',
			],
			description: [
				'● Reviewed code and debugged problems to validate structures, assess security and verify browser, device and operating system compatibility.',
				'● Advocated for well-tested and documented, high quality code.',
				'● Designed GraphQL APIs calls using React to streamline user interface performance.',
				'● Updated old code bases to modern development standards, improving functionality.',
				'● Designed and developed interactive, real-time mapping applications for live tracking purposes.',
				'● Optimized application performance for smooth rendering and data synchronization in live tracking scenarios.',
			],
		},
		{
			company: { name: 'Agents on cloud' },
			jobTitle: 'Front End Developer',
			fromDate: 'Jun/2022',
			toDate: 'Aug/2023',
			skills: [
				'React',
				'React Native',
				'Expo',
				'Redux',
				'Rest APIs',
				'Nx',
				'Git',
			],
			description: [
				'● Developed front-end user interface using React Native and JavaScript for iOS and Android mobile applications.',
				'● Collaborated with other developers to implement new features in a way that was consistent with existing codebase conventions.',
				'● Used Expo as a framework for React Native.',
				'● Resolved app defects by reviewing bug reports and tracking repeatable malfunctions within software titles.',
				'● Participated in design discussions regarding application architecture, feature implementation, or any other relevant topic as required.',
				'● Worked with Nx as a mono repo in managing and developing Expo applications within a workspace.',
				'● Collaborated with designers on UI/UX design decisions and created mockups as needed.',
			],
		},
		{
			company: { name: 'Freelance' },
			jobTitle: 'Full Stack Developer',
			fromDate: 'March/2022',
			toDate: 'June/2022',
			skills: ['HTML', 'ReCssact', 'JavaScript', 'AJAX', 'Rest APIs'],
			description: [
				'● Planned website development, converting mockups into usable  web presence with HTML, Css, JavaScript, AJAX, and JSON coding.',
				'● Skilled at working independently and collaboratively in a team environment.',
				'● Built APIs and data clients to consume APIs.',
				'● Designed and implemented RESTful APIs for mobile apps with JSON data exchange.',
				'● Designed and updated layouts to meet usability and performance requirements.',
			],
		},
	];

	const education = [
		{
			course: 'Computer Science',
			date: 'Sep 2022',
			institution: 'The Hashemite University',
			courseContents: ['Bachelor: Computer Science'],
		},
		{
			course: 'Android 101 & 102',
			date: 'Jul 2020',
			institution: 'Be programmer',
			courseContents: ['Android'],
		},
	];

	return (
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl">
					Hey, I&apos;m Mahmoud Irshaid
				</h1>
				<h2 className="mt-2 text-xl font-bold md:text-2xl">
					Software Engineer from Jordan
				</h2>
				<p className="mt-8">
					As a passionate front-end developer, I create amazing websites and web
					apps to make the internet a better place. I am an advocate for web
					performance and accessibility.
				</p>
				<p className="my-4">
					I am 23 years old and have been a web developer for as long as I can
					think. The technologies I work with are JavaScript, HTML and CSS with
					a focus on the frameworks React.js, Next.js, React Native, Expo, Node
					Express. I use code not only to do my day-to-day job, but also to
					solve everyday problems I come across.
				</p>
				<p>
					When I am not writing code I love to spend time in Gaming and
					discovering latest technologies in various fields.
				</p>

				<h2 className="headline mb-4 mt-12 text-4xl">Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="headline mb-4 mt-12 text-4xl">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here are some of the most relevant
					certifications I have achieved:
				</p>

				<Education education={education} />

				<div className="mt-8 flex justify-center">
					<Button
						href="/Mahmoud_Irshaid_Resume.pdf"
						download={true}
						className="group flex gap-2 whitespace-nowrap"
					>
						<IconDownload />
						Download my CV
					</Button>
				</div>
			</Container>
		</AnimatePage>
	);
};

export default AboutPage;
