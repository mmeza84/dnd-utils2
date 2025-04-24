import { SchemaType } from '@google/generative-ai';

/**
 * Prompts to feed into the Gemini model.
 * Currently using the 2.0-flash model.
 * @see https://developers.generativeai.google/learn/models/gemini-2-flash
 */
export const PromptGenerators = {
	CharacterName: (_race: string, _class: string, _background: string) => {
		return `Can you generate 3 or 4 possible character name for a ${_race} ${_class} with a ${_background} background?`;
	},
	Backstory: (_race: string, _class: string, _background: string) => {
		return `Can you generate a 5 or 6 sentence backstory for a 5th edition d&d character that is a ${_race} ${_class} with a ${_background} background?`;
	},
	AbilityBlock: (_race: string, _class: string, _background: string) => {
		return (
			`Can you give me ability values for a ${_race} ${_class} with a ${_background} background ` +
			`for a 5th edition d&d character, as well as a brief tooltip about why that value was suggested ` +
			`and only using each of these values once [15, 14, 13 , 12, 10, 8]?`
		);
	},
};

/**
 * Response formats required from the results of the Gemini request.
 * Currently using the 2.0-flash model.
 * @see https://developers.generativeai.google/learn/models/gemini-2-flash
 */
export const ResponseSchemas = {
	BackstorySuggestion: {
		description: 'A suggested backstory for a D&D 5th edition character',
		type: SchemaType.STRING,
	},
	CharacterNameSuggestions: {
		description: 'A suggested set of character names for a D&D 5th edition character.',
		type: SchemaType.ARRAY,
		items: {
			type: SchemaType.STRING,
			description: 'A suggested character name.',
		},
	},
	AbilityBlockSuggestions: {
		description: 'A suggested set of ability values for a D&D 5th edition character.',
		type: SchemaType.ARRAY,
		items: {
			type: SchemaType.OBJECT,
			properties: {
				abilityName: {
					type: SchemaType.STRING,
					description: 'The name of the ability.',
				},
				abilityValue: {
					type: SchemaType.NUMBER,
					description: 'The value of the ability.',
				},
				tooltip: {
					type: SchemaType.STRING,
					description: 'A description about why this value was suggested.',
				},
			},
		},
	},
};
