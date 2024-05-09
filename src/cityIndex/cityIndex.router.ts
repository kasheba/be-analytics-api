import express, { type Request, type Response } from "express";
import type { CityIndex } from "./cityIndex.interface";
import * as CityIndexSvc from "./cityIndex.service";

export const cityIndexRouter = express.Router();

cityIndexRouter.get("/", async (req: Request, res: Response) => {
	try {
		const cityIndexes: CityIndex[] = await CityIndexSvc.findAll();
		res.status(200).json(cityIndexes);
	} catch (e) {
		res.status(500).send(e);
	}
});

cityIndexRouter.get("/:city", async (req: Request, res: Response) => {
	const cityName: string = req.params.city;

	try {
		const cityIndex: CityIndex | undefined = await CityIndexSvc.findOne(cityName);
		if (cityIndex) {
			res.status(200).json(cityIndex);
		} else {
			res.status(404).send(new Error("Not found"));
		}
	} catch (e) {
		res.status(500).send(e);
	}
});
