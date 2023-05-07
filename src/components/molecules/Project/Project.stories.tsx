/* eslint-disable import/no-anonymous-default-export */
import { ProjectProps } from './Project';
import { Project } from './Project';

import { mockProject } from '@mockdata';

export default {
	title: 'molecules/Project',
	component: Project,
};

export const ProjectStory = (args: ProjectProps) => <Project {...args} />;

ProjectStory.storyName = 'Project';
ProjectStory.args = {
	...mockProject,
	index: 0,
};
