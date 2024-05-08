import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { cityIndexRouter } from "./cityIndex/cityIndex.router";

const app = express();
/**
 *  App Configuration
 */

app.use(morgan('[:date[clf]] ":method :url" :status - :response-time ms'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/city", cityIndexRouter);

export default app;