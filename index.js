import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  `Request_Endpoint: ${req.method} ${req.url} ${new Date()}`;
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
