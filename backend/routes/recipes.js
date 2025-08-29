import express from "express";
import { searchRecipes } from "../controllers/recipeController.js";

const router = express.Router();

router.post("/search", searchRecipes);

module.exports = router;
