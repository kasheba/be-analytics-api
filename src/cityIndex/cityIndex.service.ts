import type { HousingEventPrice } from "../parclApi/parclApi.interface";
import * as ParclSvc from "../parclApi/parclApi.service";
import type { CityIndex } from "./cityIndex.interface";

export const findCityIndexByName = async (name: string): Promise<CityIndex> => {
	const priceFeed: HousingEventPrice[] = await ParclSvc.findHousingEventPriceByCityName(name);
	if (priceFeed && priceFeed.length >= 1) {
		return {
			name: name,
			date: priceFeed[0].date,
			median: priceFeed[0].price_per_square_foot.median.sales,
			percentile20th: priceFeed[0].price_per_square_foot.percentile_20th.sales,
			percentile80th: priceFeed[0].price_per_square_foot.percentile_80th.sales,
			standardDeviation: priceFeed[0].price_per_square_foot.standard_deviation.sales,
		};
	}

	throw new Error(`No price feed found for ${name}`);
};

export const findCityIndexByCode = async (code: string): Promise<CityIndex> => {
	const priceFeed: HousingEventPrice[] = await ParclSvc.findHousingEventPriceByCityCode(code);
	if (priceFeed && priceFeed.length >= 1) {
		return {
			name: code,
			date: priceFeed[0].date,
			median: priceFeed[0].price_per_square_foot.median.sales,
			percentile20th: priceFeed[0].price_per_square_foot.percentile_20th.sales,
			percentile80th: priceFeed[0].price_per_square_foot.percentile_80th.sales,
			standardDeviation: priceFeed[0].price_per_square_foot.standard_deviation.sales,
		};
	}

	throw new Error(`No price feed found for ${code}`);
};
