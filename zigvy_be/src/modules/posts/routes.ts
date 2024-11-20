import express from "express";

import { ROUTE_CONF } from "../../config/routeConfig";
import { getPosts } from "./controller";

// import { getCatalouges } from "../controller";

const router = express();

router.route(ROUTE_CONF.POSTS).get(getPosts);

export default router;
