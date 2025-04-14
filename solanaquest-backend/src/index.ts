import express from "express";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.PORT);

const app = express();
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "hello from express server with typescripttt",
  });
});

const port: Number = parseInt(process.env.PORT || "4000", 10);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
