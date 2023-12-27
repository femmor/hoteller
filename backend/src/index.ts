import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.send("API Working!");
});

const PORT = process.env.PORT || 7007;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
