import './Resources.css';

export default function Resources() {
	return (
		<div className="resources-view">
			<h1>Resources</h1>
			<p>Here you can find various resources to enhance your D&D experience.</p>

			<div className="resource-wrapper">
				<div className="resource-header">
					<div className="resource-name">D&D Beyond</div>
					<div className="resource-link">
						&#128279;{' '}
						<a href="https://www.dndbeyond.com/">https://www.dndbeyond.com/</a>
					</div>
				</div>
				<div className="resource-description">
					<p>Official D&D resources and tools.</p>
				</div>
			</div>

			<div className="resource-wrapper">
				<div className="resource-header">
					<div className="resource-name">Kobold Press</div>
					<div className="resource-link">
						&#128279; <a href="https://koboldpress.com/">https://koboldpress.com/</a>
					</div>
				</div>
				<div className="resource-description">
					<p>
						Since 2006, Kobold Press has produced quality tabletop roleplaying game
						material. The company has won 9 ENnie Awards and 1 Origins Award for more
						than 300 game books and magazines, including the bestselling Tome of Beasts
						and Deep Magic series.
					</p>
				</div>
			</div>

			<div className="resource-wrapper">
				<div className="resource-header">
					<div className="resource-name">Roll20</div>
					<div className="resource-link">
						&#128279; <a href="https://roll20.net/">https://roll20.net/</a>
					</div>
				</div>
				<div className="resource-description">
					<p>
						Roll20 is a website consisting of a set of tools for playing tabletop
						role-playing games, also referred to as a virtual tabletop.
					</p>
				</div>
			</div>

			<div className="resource-wrapper">
				<div className="resource-header">
					<div className="resource-name">Fantasy Grounds</div>
					<div className="resource-link">
						&#128279;{' '}
						<a href="https://fantasygrounds.com/">https://fantasygrounds.com/</a>
					</div>
				</div>
				<div className="resource-description">
					<p>
						FANTASY GROUNDS VTT partners with all the top TTRPG publishers in the world
						to provide a unique experience for each game we support, with Fantasy
						Ground's powerful automation, your games are easier to prep, more immersive
						for your players, and more convenient than ever to run.
					</p>
				</div>
			</div>

			<div className="resource-wrapper">
				<div className="resource-header">
					<div className="resource-name">D&D 5e API</div>
					<div className="resource-link">
						&#128279; <a href="https://www.dnd5eapi.co/">https://www.dnd5eapi.co/</a>
					</div>
				</div>
				<div className="resource-description">
					<p>
						Just a simple api for things within the Official 5th Edition SRD and easily
						accessible through a modern RESTful API. Enjoy the D&D 5th Edition API!
					</p>
				</div>
			</div>
		</div>
	);
}
