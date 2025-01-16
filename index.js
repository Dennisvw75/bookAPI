import express from "express";

import path from "path";

import routes from "./routes/routes.js";

const app = express();

app.use("/", routes);

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
