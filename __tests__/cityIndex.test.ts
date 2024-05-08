import request from "supertest";

import app from "../src/app";

describe("City index", () => {
	describe("GET /city", () => {
		test("Should return all city indexes", async () => {
			const res = await request(app).get("/api/city");
			expect(res.status).toBe(200);
		});
    });
    
    describe("GET /city/Paris", () => {
		test("Should return city index for Paris", async () => {
			const res = await request(app).get("/api/city/Paris");
			expect(res.status).toBe(200);
		});
	});
});