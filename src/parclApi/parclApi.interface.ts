export interface Market {
	parcl_id: number;
	country: string;
	name: string;
	state_abbreviation: string;
}

export interface HousingEventPrice {
	date: string;
	price_per_square_foot: {
		median: {
			sales: number;
		};
		percentile_20th: {
			sales: number;
		};
		percentile_80th: {
			sales: number;
		};
		standard_deviation: {
			sales: number;
		};
	};
}
