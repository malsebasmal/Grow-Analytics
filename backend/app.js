import e from "express";
import cors from "cors"
import { usersR } from "./src/router/users.js"

export const app = e()
app.use(cors())
app.use(e.json())

app.use("/users", usersR)