import express from "express";
import morgan from "morgan";
import { router } from "./router";

const app = express();
const port = 5005;

app.use(morgan("combined"));
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
