import { Suspense, lazy, useState } from 'react';

import { CustomSelector } from '../components/custom-selector/CustomSelector';
import { BACKGROUNDS, CLASSES, RACES } from '../utils/constants';

import './PlayerView.css';

const NameGenerator = lazy(() => import('../views/name-generator/NameGenerator'));
const BackstoryGenerator = lazy(() => import('./backstory-generator/BackstoryGenerator'));
const AbilityScores = lazy(() => import('./ability-scores/AbilityScores'));

export default function PlayerView() {
	const [characterRace, setCharacterRace] = useState<string>('');
	const [characterClass, setCharacterClass] = useState<string>('');
	const [characterBackground, setCharacterBackground] = useState<string>('');
	const [characterAction, setCharacterAction] = useState<string>('');

	return (
		<div className="player-tools">
			<div className="player-tools-prompt">My character is a:</div>
			<CustomSelector
				sourceList={RACES}
				displayLabel="Select a Race"
				value={characterRace}
				handleChange={setCharacterRace}
			/>
			<CustomSelector
				sourceList={CLASSES}
				displayLabel="Select a Class"
				value={characterClass}
				handleChange={setCharacterClass}
			/>
			<CustomSelector
				sourceList={BACKGROUNDS}
				displayLabel="Select a Background"
				value={characterBackground}
				handleChange={setCharacterBackground}
			/>
			<div className="player-tools-prompt">And I want to...</div>
			<CustomSelector
				sourceList={[
					'Generate my name',
					'Generate my backstory',
					'Generate my ability scores',
					'Generate my profile picture',
				]}
				displayLabel="What do you want to do?"
				value={characterAction}
				handleChange={(value) => setCharacterAction(value)}
			/>
			<Suspense fallback={<div>Loading...</div>}>
				{characterAction === 'Generate my name' && (
					<NameGenerator
						characterRace={characterRace}
						characterClass={characterClass}
						characterBackground={characterBackground}
					/>
				)}
				{characterAction === 'Generate my backstory' && (
					<BackstoryGenerator
						characterRace={characterRace}
						characterClass={characterClass}
						characterBackground={characterBackground}
					/>
				)}
				{characterAction === 'Generate my ability scores' && (
					<AbilityScores
						characterRace={characterRace}
						characterClass={characterClass}
						characterBackground={characterBackground}
					/>
				)}
				{characterAction === 'Generate my profile picture' && (
					<div>
						<h4>Profile picture generation coming soon...</h4>
					</div>
				)}
			</Suspense>
		</div>
	);
}
