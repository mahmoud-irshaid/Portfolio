type company = {
	logo: string,
	url: string,
	name: string
}

export interface Job {
	jobTitle: string;
	company: company;
	description: string[];
	fromDate: string;
	toDate: string | null;
	skills: string[];
}
