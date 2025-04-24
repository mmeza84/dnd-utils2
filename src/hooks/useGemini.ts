import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { useEffect, useState } from 'react';

const useGemini = () => {
	const [genModel, setGenModel] = useState<GenerativeModel>();

	useEffect(() => {
		console.log('Initializing Gemini model...');
		const geminiKey = import.meta.env.VITE_APP_GEMINI_KEY;
		const geminiModel = import.meta.env.VITE_APP_GEMINI_MODEL;
		if (!geminiKey) {
			console.error('Gemini API key is not set in environment variables.');
			return;
		}
		if (!geminiModel) {
			console.error('Gemini model is not set in environment variables.');
			return;
		}

		const genAi = new GoogleGenerativeAI(geminiKey);
		const model = genAi.getGenerativeModel({
			model: geminiModel,
			generationConfig: {
				responseMimeType: 'application/json',
			},
		});

		setGenModel(model);
	}, []);

	return genModel;
};

export default useGemini;
