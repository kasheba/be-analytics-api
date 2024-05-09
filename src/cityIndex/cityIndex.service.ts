/**
 * Data Model Interfaces
 */

import type { CityIndex } from "./cityIndex.interface";

/**
 * In-Memory Store
 */

const cityIndexes: CityIndex[] = [
	{
		name: "Paris",
		price: 100,
	},
	{
		name: "New York",
		price: 110,
	},
];

/**
 * Service Methods
 */

export const findOne = async (name: string): Promise<CityIndex | undefined> => {
	return cityIndexes.find((index) => index.name === name);
};

export const findAll = async (): Promise<CityIndex[]> => {
	const response = [...cityIndexes];
	return response;
};
