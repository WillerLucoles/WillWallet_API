import express , {json} from "express";
import authRouter from "./routes/authRoutes.js";

const app = express();
app.use(json());
app.use(authRouter);

app.listen(5000, ()=> console.log("Server listening in port 5000"));