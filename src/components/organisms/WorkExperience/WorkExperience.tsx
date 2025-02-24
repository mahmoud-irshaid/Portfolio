import { Job } from '@components/molecules/Job';

import type { Job as JobType } from '@types';
import classNames from 'classnames';

export interface WorkExperienceProps {
	jobs: JobType[];
}

const WorkExperience = ({ jobs }: WorkExperienceProps) => {
	const Spacer = () => <div className="md:w-1/8 w-12 shrink-0 grow-0" />;

	return (
		<div className="w-[calc(100% + 2rem)] relative -mx-4 flex snap-x snap-center gap-6 overflow-hidden overflow-x-auto pb-14 lg:mx-0 lg:w-full justify-center flex-wrap">
			{jobs.map(
				({ company, jobTitle, fromDate, toDate, skills, description }) => (
					<div
						className={classNames(
							'flex w-4/5 shrink-0 transform snap-center transition-all md:w-3/4 lg:w-5/12'
						)}
						key={`${company} ${jobTitle}`}
					>
						<Job
							company={company}
							jobTitle={jobTitle}
							fromDate={fromDate}
							toDate={toDate}
							skills={skills}
						>
							<ul>
								{description.map((item: string, i: number) => (
									<li key={i} style={{ marginBottom: 8 }}>
										{item}
									</li>
								))}
							</ul>
						</Job>
					</div>
				)
			)}
		</div>
	);
};

export { WorkExperience };
