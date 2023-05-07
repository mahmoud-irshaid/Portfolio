import { Project } from '../Project';

import { mockProject } from '@mockdata';
import { render } from '@testing-library/react';

describe('Project', () => {
	it('renders correctly', () => {
		const { container } = render(<Project {...mockProject} index={0} />);
		expect(container).toMatchSnapshot();
	});
});
