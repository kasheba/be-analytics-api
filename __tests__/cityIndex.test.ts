import request from "supertest";
import app from "../src/app";
import type { HousingEventPrice } from "../src/parclApi/parclApi.interface";
import * as ParclSvc from "../src/parclApi/parclApi.service";

jest.mock("../src/parclApi/parclApi.service");

const eventPrice: HousingEventPrice = {
	date: "date",
	price_per_square_foot: {
		median: {
			sales: 120,
		},
		percentile_20th: {
			sales: 100,
		},
		percentile_80th: {
			sales: 200,
		},
		standard_deviation: {
			sales: 50,
		},
	},
};

describe("Find city indexe", () => {
	describe("by city code", () => {
		const mParclSvc = jest.mocked(ParclSvc);

		test("Should return city index for NY", async () => {
			mParclSvc.findHousingEventPriceByCityCode.mockReturnValue(Promise.resolve([eventPrice]));
			const res = await request(app).get("/api/city/code/NY");
			expect(res.status).toBe(200);
			expect(mParclSvc.findHousingEventPriceByCityCode.mock.calls).toHaveLength(1);
		});
	});

	describe("by city name", () => {
		const mParclSvc = jest.mocked(ParclSvc);

		test("Should return city index for New York City", async () => {
			mParclSvc.findHousingEventPriceByCityName.mockReturnValue(Promise.resolve([eventPrice]));
			const res = await request(app).get("/api/city/name/New York City");
			console.log(JSON.stringify(res));
			expect(mParclSvc.findHousingEventPriceByCityName.mock.calls).toHaveLength(1);
		});
	});
});
