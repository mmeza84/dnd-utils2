import { Schema } from '@google/generative-ai';
import { useEffect, useState } from 'react';

import useGemini from '../../hooks/useGemini';
import { PromptGenerators, ResponseSchemas } from '../../models/geminiModels';

import './BackstoryGenerator.css';

export interface BackstoryGeneratorProps {
	characterRace: string;
	characterClass: string;
	characterBackground: string;
}

export default function BackstoryGenerator({
	characterRace,
	characterClass,
	characterBackground,
}: BackstoryGeneratorProps) {
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
	const [isGenerating, setIsGenerating] = useState<boolean>(false);

	const [generatedBackstory, setGeneratedBackstory] = useState<string>();
	const generativeModel = useGemini();

	const handleGenerateNames = async () => {
		if (!generativeModel) {
			console.error('Generative model is not initialized.');
			return;
		}

		setIsGenerating(true);

		generativeModel.generationConfig.responseSchema =
			ResponseSchemas.BackstorySuggestion as Schema;

		const query = PromptGenerators.Backstory(
			characterRace,
			characterClass,
			characterBackground
		);
		const response = await generativeModel.generateContent(query);
		const value = response.response.text();
		setGeneratedBackstory(value);

		setIsGenerating(false);
	};

	useEffect(() => {
		setIsButtonDisabled(
			!characterRace || !characterClass || !characterBackground || isGenerating
		);
	}, [characterRace, characterClass, characterBackground, isGenerating]);

	return (
		<div className="backstory-generator">
			{generatedBackstory && <div className="suggested-backstory">{generatedBackstory}</div>}
			<button
				disabled={isButtonDisabled}
				className="generate-button"
				onClick={handleGenerateNames}
			>
				{isGenerating ? 'Generating...' : 'Generate Backstory'}
			</button>
		</div>
	);
}
