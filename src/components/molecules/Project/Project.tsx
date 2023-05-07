import { Box } from '@components/atoms/Box';
import { FloatingImages } from '@components/atoms/FloatingImages';

import type { Project as ProjectType } from '@types';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export interface ProjectProps extends ProjectType {
	slug: string;
	title: string;
	skills: string[];
	mainImage: string;
	secondaryImages: string[];
	index: number;
	description: string;
}

const Project = ({
	slug,
	title,
	skills,
	mainImage,
	secondaryImages,
	index,
	description,
}: ProjectProps) => {
	const isEven = index % 2 === 0;

	return (
		<article className="mt-24 transition first-of-type:mt-0 md:hover:scale-[1.01] lg:w-4/5">
			<Link href={slug ? slug : '#'} target="_blank" className="group">
				<Box>
					<div
						className={classNames('flex flex-col gap-4', {
							'md:flex-row': isEven,
							'md:flex-row-reverse': !isEven,
						})}
					>
						<div className="flex h-full flex-col md:w-1/2">
							<h1 className="mb-2 text-xl font-bold md:text-3xl">{title}</h1>
							<p className="max-w-xs text-sm">
								<strong>Tech used: </strong>
								{skills.join(', ')}
							</p>
							<p className="max-w-xs text-sm mt-4">{description}</p>
						</div>
						<div
							className={classNames(
								'-mx-10 -mb-12 md:mx-0 md:-mb-12 md:-mt-8',
								{
									'md:-mr-20': isEven,
									'md:-ml-20': !isEven,
								}
							)}
						>
							<FloatingImages
								topFloatingImage={secondaryImages[0]}
								bottomFloatingImage={secondaryImages[1]}
								mainImage={mainImage}
								altText={title}
							/>
						</div>
					</div>
				</Box>
			</Link>
		</article>
	);
};

export { Project };
