import { useEffect, useState } from 'react';

import useGemini from '../../hooks/useGemini';

import './ProfilePictureGenerator.css';

export interface ProfilePictureGeneratorProps {
	characterRace: string;
	characterClass: string;
	characterBackground: string;
}

export function ProfilePictureGenerator({
	characterRace,
	characterClass,
	characterBackground,
}: ProfilePictureGeneratorProps) {
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
	const [isGenerating, setIsGenerating] = useState<boolean>(false);

	const generativeModel = useGemini();

	const handleGenerateProfilePicture = async () => {
		if (!generativeModel) {
			console.error('Generative model is not initialized.');
			return;
		}

		console.log('Profile picture generation coming soon.');
	};

	useEffect(() => {
		setIsButtonDisabled(
			!characterRace || !characterClass || !characterBackground || isGenerating || true
		);
	}, [characterRace, characterClass, characterBackground, isGenerating]);

	return (
		<div className="profile-picture-generator">
			<h4>Profile picture generation coming soon.</h4>
			<button
				className="generate-button"
				disabled={isButtonDisabled}
				onClick={handleGenerateProfilePicture}
			>
				{isGenerating ? 'Generating...' : 'Generate Profile Picture'}
			</button>
		</div>
	);
}
