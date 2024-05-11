import * as dotenv from "dotenv";
import sdk from "./labs-v2";
import type { SearchMarketsV1SearchMarketsGetMetadataParam } from "./labs-v2/types";
import type { HousingEventPrice, Market } from "./parclApi.interface";

dotenv.config();

const MARKETS: Market[] = [];
export const initialized = false;

dotenv.config();
if (process.env.PARCL_API_KEY) {
	sdk.auth(process.env.PARCL_API_KEY);
} else {
	throw new Error("Parcl API key not initialized.");
}

const findMarket = async (metadata?: SearchMarketsV1SearchMarketsGetMetadataParam): Promise<Market> => {
	const response = await sdk.search_markets_v1_search_markets_get({ ...metadata, limit: 1, location_type: "CITY" });
	if (response.status === 200) {
		const items: Market[] = response.data.items as Market[];
		MARKETS.push(items[0]);
		return items[0];
	}

	throw new Error(`No markets found for ${JSON.stringify(metadata)}.`);
};

const findMarketByCityName = async (name: string): Promise<Market> => {
	if (MARKETS.length > 0) {
		for (const market of MARKETS) {
			if (market.name === name) {
				return market;
			}
		}
	}

	return await findMarket({ name: name });
};

// biome-ignore lint/suspicious/noExplicitAny: The values in the downstream lib is hardcoded
const findMarketByCityCode = async (code: any): Promise<Market> => {
	if (MARKETS.length > 0) {
		for (const market of MARKETS) {
			if (market.state_abbreviation === code) {
				return market;
			}
		}
	}

	return await findMarket({ state_abbreviation: code });
};

export const findHousingEventPriceByCityName = async (name: string): Promise<HousingEventPrice[]> => {
	const market: Market = await findMarketByCityName(name);
	const response = await sdk.housing_event_prices_v1_market_metrics__parcl_id__housing_event_prices_get({
		parcl_id: market.parcl_id,
	});
	if (response.status === 200) {
		const { items } = response.data;
		return items as HousingEventPrice[];
	}

	throw new Error(`Price feed not found for ${name}`);
};

export const findHousingEventPriceByCityCode = async (code: string): Promise<HousingEventPrice[]> => {
	const market: Market = await findMarketByCityCode(code);
	const response = await sdk.housing_event_prices_v1_market_metrics__parcl_id__housing_event_prices_get({
		parcl_id: market.parcl_id,
	});
	if (response.status === 200) {
		const { items } = response.data;
		return items as HousingEventPrice[];
	}

	throw new Error(`Price feed not found for ${code}`);
};
