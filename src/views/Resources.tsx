import './Resources.scss';

interface Resource {
	title: string;
	description: string;
	link: string;
}

export default function Resources() {
	const resources: Resource[] = [
		{
			title: 'D&D Beyond',
			link: 'https://www.dndbeyond.com/',
			description: 'Official D&D resources and tools.',
		},
		{
			title: 'Kobold Press',
			link: 'https://koboldpress.com/',
			description:
				'Since 2006, Kobold Press has produced quality tabletop roleplaying game material. The company has won 9 ENnie Awards and 1 Origins Award for more than 300 game books and magazines, including the bestselling Tome of Beasts and Deep Magic series.',
		},
		{
			title: 'Roll20',
			link: 'https://roll20.net/',
			description:
				'Roll20 is a website consisting of a set of tools for playing tabletop role-playing games, also referred to as a virtual tabletop.',
		},
		{
			title: 'Fantasy Grounds',
			link: 'https://fantasygrounds.com/',
			description:
				"FANTASY GROUNDS VTT partners with all the top TTRPG publishers in the world to provide a unique experience for each game we support, with Fantasy Ground's powerful automation, your games are easier to prep, more immersive for your players, and more convenient than ever to run.",
		},
		{
			title: 'D&D 5e API',
			link: 'https://www.dnd5eapi.co/',
			description:
				'Just a simple api for things within the Official 5th Edition SRD and easily accessible through a modern RESTful API. Enjoy the D&D 5th Edition API!',
		},
	];
	return (
		<div className="resources-view">
			<h2>Resources</h2>
			<p>Here you can find various resources to enhance your D&D experience.</p>
			{resources.map((resource, index) => (
				<div className="resource-wrapper" key={index}>
					<div className="header">
						<div className="name">{resource.title}</div>
						<div className="link">
							&#128279; <a href={resource.link}>{resource.link}</a>
						</div>
					</div>
					<div className="description">
						<p>{resource.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}
