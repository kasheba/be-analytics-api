import express, { type Request, type Response } from "express";
import type { CityIndex } from "./cityIndex.interface";
import * as CityIndexSvc from "./cityIndex.service";

export const cityIndexRouter = express.Router();

cityIndexRouter.get("/name/:name", async (req: Request, res: Response) => {
	try {
		const name = req.params.name;
		const cityIndex: CityIndex = await CityIndexSvc.findCityIndexByName(name);
		res.status(200).json(cityIndex);
	} catch (e) {
		res.status(500).send(e);
	}
});

cityIndexRouter.get("/code/:code", async (req: Request, res: Response) => {
	try {
		const code: string = req.params.code;
		const cityIndex: CityIndex | undefined = await CityIndexSvc.findCityIndexByCode(code);
		if (cityIndex) {
			res.status(200).json(cityIndex);
		} else {
			res.status(404).send(new Error("Not found"));
		}
	} catch (e) {
		res.status(500).send(e);
	}
});
