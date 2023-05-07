export interface Job {
	jobTitle: string;
	company: string;
	description: string[];
	fromDate: string;
	toDate: string | null;
	skills: string[];
}
