import { Container } from '@components/atoms/Container';
import { IconGithub, IconGmail, IconLinkedin } from '@components/atoms/Icons';
import { SocialIcons } from '@components/molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="mt-8 py-8 md:mt-20">
			<Container className="flex justify-between">
				<span>&copy; {new Date().getFullYear()} Mahmoud Irshaid</span>
				<SocialIcons
					profiles={[
						{
							name: 'Github',
							url: 'https://github.com/mahmoud-irshaid',
							icon: <IconGithub />,
						},
						{
							name: 'LinkedIn',
							url: 'https://www.linkedin.com/in/mahmoud-irshaid-b5b096239',
							icon: <IconLinkedin />,
						},
						{
							name: 'Gmail',
							url: 'mahmoudirshaid10@gmail.com',
							icon: <IconGmail />,
							mail: true,
						},
					]}
				/>
			</Container>
		</footer>
	);
};

export { Footer };
