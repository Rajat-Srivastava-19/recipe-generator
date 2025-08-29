import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import recipeRoutes from "./routes/recipes.js";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
