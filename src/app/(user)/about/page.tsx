import { AnimatePage } from '@components/atoms/AnimatePage';
import { Button } from '@components/atoms/Button';
import { Container } from '@components/atoms/Container';
import { IconDownload } from '@components/atoms/Icons';
import { Education } from '@components/organisms/Education';
import { WorkExperience } from '@components/organisms/WorkExperience';

export const metadata = {
	title:
		'About Mahmoud Irshaid, a Senior Software Engineer and Consultant in the UK',
	description:
		'As a passionate front-end software developer, I create amazing websites and web apps to make the internet a better place.',
};

const AboutPage = async () => {
	const jobs = [
		{
			company: 'Agents on cloud',
			jobTitle: 'Mobile Developer',
			fromDate: 'Jun/2022',
			toDate: 'May/2023',
			skills: ['TypeScript', 'React', 'Next.js', 'Redux', 'Rest APIs', 'Jest'],
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
