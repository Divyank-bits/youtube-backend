import express, { Application, Response, Request } from "express";
const app = express();

const port: Number = 3000;

app.get('/', (req: Request,res: Response)=> {
  res.send("Hi after ")
})

app.listen(port, ()=> {
  console.log("running on port 3000")
})