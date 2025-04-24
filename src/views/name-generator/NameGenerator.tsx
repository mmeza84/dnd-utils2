import { Schema } from '@google/generative-ai';
import { useEffect, useState } from 'react';

import useGemini from '../../hooks/useGemini';
import { PromptGenerators, ResponseSchemas } from '../../models/geminiModels';

import './NameGenerator.css';

export interface CharacterNameGeneratorProps {
	characterRace: string;
	characterClass: string;
	characterBackground: string;
}

export default function CharacterNameGenerator({
	characterRace,
	characterClass,
	characterBackground,
}: CharacterNameGeneratorProps) {
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
	const [isGenerating, setIsGenerating] = useState<boolean>(false);

	const [suggestedNames, setSuggestedNames] = useState<string[]>([]);
	const generativeModel = useGemini();

	const handleGenerateNames = async () => {
		if (!generativeModel) {
			console.error('Generative model is not initialized.');
			return;
		}

		setIsGenerating(true);

		generativeModel.generationConfig.responseSchema =
			ResponseSchemas.CharacterNameSuggestions as Schema;

		const query = PromptGenerators.CharacterName(
			characterRace,
			characterClass,
			characterBackground
		);
		const response = await generativeModel.generateContent(query);
		const values = response.response.text();
		setSuggestedNames(JSON.parse(values) as string[]);

		setIsGenerating(false);
	};

	useEffect(() => {
		setIsButtonDisabled(
			!characterRace || !characterClass || !characterBackground || isGenerating
		);
	}, [characterRace, characterClass, characterBackground, isGenerating]);

	return (
		<div className="character-name-generator">
			{suggestedNames.length > 0 && (
				<div className="suggested-names">
					{suggestedNames.map((name, index) => (
						<div key={index} className="suggested-name">
							- {name}
						</div>
					))}
				</div>
			)}
			<button
				disabled={isButtonDisabled}
				className="generate-button"
				onClick={handleGenerateNames}
			>
				{isGenerating ? 'Generating...' : 'Generate Names'}
			</button>
		</div>
	);
}
