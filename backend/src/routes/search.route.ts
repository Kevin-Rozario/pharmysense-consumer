import { Router } from "express";
import { searchMedicines } from "../controllers/search.controller.js";

const router = Router();

router.route("/search").get(searchMedicines);

export default router;
