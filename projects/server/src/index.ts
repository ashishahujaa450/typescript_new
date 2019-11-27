import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(`
    <div>
        <h1 style="text-align: center;font-family: arial; margin-top: 2rem;">App works!</h1>
    </div>
  `);
});

app.listen("3000", () => {
  console.log("app is listening now");
});
