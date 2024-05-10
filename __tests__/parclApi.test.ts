import sdk from "@api/labs-v2";
import * as ParclSvc from "../src/parclApi/parclApi.service";

jest.mock("@api/labs-v2");

describe("Search markets", () => {
	describe("Find price feed by city name", () => {
		test("Should return price feed for New York City", async () => {
			sdk.search_markets_v1_search_markets_get = jest
				.fn()
				.mockReturnValue(Promise.resolve({ status: 200, data: { items: [{}] } }));
			sdk.housing_event_prices_v1_market_metrics__parcl_id__housing_event_prices_get = jest
				.fn()
				.mockReturnValue(Promise.resolve({ status: 200, data: { items: [{}] } }));
			const res = await ParclSvc.findHousingEventPriceByCityName("New York City");
			expect(res).toBeDefined();
			expect(sdk.search_markets_v1_search_markets_get).toHaveBeenCalled();
			expect(sdk.housing_event_prices_v1_market_metrics__parcl_id__housing_event_prices_get).toHaveBeenCalled();
		}, 10000);
	});

	describe("Find price feed by city code", () => {
		test("Should return price feed for NY", async () => {
			sdk.search_markets_v1_search_markets_get = jest
				.fn()
				.mockReturnValue(Promise.resolve({ status: 200, data: { items: [{}] } }));
			sdk.housing_event_prices_v1_market_metrics__parcl_id__housing_event_prices_get = jest
				.fn()
				.mockReturnValue(Promise.resolve({ status: 200, data: { items: [{}] } }));
			const res = await ParclSvc.findHousingEventPriceByCityName("NY");
			expect(res).toBeDefined();
			expect(sdk.search_markets_v1_search_markets_get).toHaveBeenCalled();
			expect(sdk.housing_event_prices_v1_market_metrics__parcl_id__housing_event_prices_get).toHaveBeenCalled();
		}, 10000);
	});
});
