import { Schema } from '@google/generative-ai';
import { useEffect, useState } from 'react';

import useGemini from '../../hooks/useGemini';
import { PromptGenerators, ResponseSchemas } from '../../models/geminiModels';

import './AbilityScores.css';

export interface AbilityScoresProps {
	characterRace: string;
	characterClass: string;
	characterBackground: string;
}

type AbilityScoreItem = {
	abilityName: string;
	abilityValue: number;
	tooltip: string;
};

export default function AbilityScores({
	characterRace,
	characterClass,
	characterBackground,
}: AbilityScoresProps) {
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
	const [isGenerating, setIsGenerating] = useState<boolean>(false);

	const [abilityScores, setAbilityScores] = useState<AbilityScoreItem[]>();
	const generativeModel = useGemini();

	const handleGenerateAbilityScores = async () => {
		if (!generativeModel) {
			console.error('Generative model is not initialized.');
			return;
		}

		setIsGenerating(true);

		generativeModel.generationConfig.responseSchema =
			ResponseSchemas.AbilityBlockSuggestions as Schema;

		const query = PromptGenerators.AbilityBlock(
			characterRace,
			characterClass,
			characterBackground
		);
		const response = await generativeModel.generateContent(query);
		const value = response.response.text();
		setAbilityScores(JSON.parse(value) as AbilityScoreItem[]);

		setIsGenerating(false);
	};

	useEffect(() => {
		setIsButtonDisabled(
			!characterRace || !characterClass || !characterBackground || isGenerating
		);
	}, [characterRace, characterClass, characterBackground, isGenerating]);

	return (
		<div className="ability-scores">
			{abilityScores && (
				<div className="ability-scores-array">
					{abilityScores.map((score) => (
						<div key="score.abilityName" className="ability-score-item">
							<div className="ability-name">{score.abilityName}</div>
							<div className="ability-value">{score.abilityValue}</div>
							<div className="ability-tooltip">{score.tooltip}</div>
						</div>
					))}
				</div>
			)}
			<button
				disabled={isButtonDisabled}
				className="generate-button"
				onClick={handleGenerateAbilityScores}
			>
				{isGenerating ? 'Generating...' : 'Generate Ability Scores'}
			</button>
		</div>
	);
}
