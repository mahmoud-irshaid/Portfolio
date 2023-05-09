export const websiteJsonLd = {
	'@context': 'http://schema.org',
	'@type': 'WebSite',
	name: 'mahmoudirshaid.com',
	alternateName: 'Mahmoud Irshaid',
	url: 'https://mahmoudirshaid.com/',
	description:
		'Front-End Software Engineer with a focus on React.js and TypeScript. I have more than 12 years experience working in software engineering.',
	image:
		'https://res.cloudinary.com/mahmoudirshaid/image/upload/v1681652673/website-2023.png',
};

export const personJsonLd = {
	'@context': 'http://schema.org',
	'@type': 'Person',
	image:
		'https://res.cloudinary.com/mahmoudirshaid/image/upload/v1587315576/mahmoud_irshaid.jpg',
	name: 'Mahmoud Irshaid',
	alternateName: 'MahmoudIrshaid',
	url: 'https://mahmoudirshaid.com/',
	jobTitle: [
		'Software Engineer',
		'Software Consultant',
		'Frontend Engineer',
		'Front-End Developer',
		'Web Developer',
	],
	hasOccupation: {
		'@type': 'Occupation',
		name: 'Senior Software Engineer',
		occupationLocation: { '@type': 'City', name: 'Amman' },
		estimatedSalary: [
			{
				'@type': 'MonetaryAmountDistribution',
				name: 'base',
				currency: 'JD',
				duration: 'P1H',
				percentile10: '74',
				percentile25: '80',
				median: '90',
				percentile75: '100',
				percentile90: '106',
			},
		],
		description:
			'Develops web applications and websites using TypeScript, React and HTML5.',
		skills:
			'HTML5, CSS, JavaScript, React, PHP, Sass, Less, Node.js, Express.js, Vue.js, Gatsby, Next.js, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, Joomla, Drupal, E-Commerce',
		alternateName: [
			'Frontend Developer',
			'Full Stack Developer',
			'Frontend Engineer',
		],
		responsibilities: [
			'App Development',
			'Web Design',
			'Website Development',
			'JavaScript Development',
			'WordPress Development',
			'CMS Development',
			'Frontend Development',
			'Full Stack Development',
			'Online Marketing',
			'SEO Services',
			'Web Developer',
			'Website Maintenance',
		],
	},
	sameAs: [
		'http://linkedin.com/in/mahmoud-irshaid-b5b096239/',
		'https://github.com/mahmoud-irshaid',
	],
	brand: [
		{
			'@type': 'Brand',
			name: 'Software Engineer',
			alternateName: 'Front-End Engineer',
		},
		{ '@type': 'Brand', name: 'MahmoudIrshaid', alternateName: 'Mahmoud Irshaid' },
	],
	memberOf: [
		{
			'@type': 'Organization',
			url: 'https://irshaid.io/',
			name: 'irshaid Ltd',
			alternateName: 'irshaid Consulting',
		},
		{
			'@type': 'Organization',
			url: 'https://www.hollandandbarrett.com/',
			name: 'Holland & Barrett',
			alternateName: 'Holland and Barrett International',
		},
	],
	homeLocation: { '@type': 'City', name: 'London' },
	owns: {
		'@type': 'Organization',
		url: 'https://irshaid.io/',
		name: 'irshaid Ltd',
		alternateName: 'irshaid Consulting',
	},
	alumniOf: {
		'@type': 'Organization',
		url: 'https://www.thespecialistworks.com/',
		name: 'The Specialist Works',
	},
	nationality: { '@type': 'Country', name: 'Germany' },
	birthDate: '1990-11-06',
	birthPlace: {
		'@type': 'Place',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Oelsnitz',
			postalCode: '08606',
			addressCountry: 'Germany',
		},
	},
	parent: [
		{ name: 'Norbert irshaid', jobTitle: 'Chef', birthDate: '1967-08-22' },
		{ name: 'Anne-Kristin irshaid', birthDate: '1968-02-26' },
	],
	spouse: {
		name: 'Cinthia Cid Paz',
		birthDate: '1990-09-19',
		nationality: { '@type': 'Country', name: 'Mexico' },
		birthPlace: {
			'@type': 'Place',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Toluca',
				addressCountry: 'Mexico',
			},
		},
	},
};
