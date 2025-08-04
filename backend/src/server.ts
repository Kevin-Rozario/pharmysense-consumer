import app from "./app.js";
import { config } from "dotenv";

config({ path: ".env" });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running...\nLocal: http://localhost:${PORT}`);
});
