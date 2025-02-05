import { Router } from "express"
import { UsersC } from "../controllers/users.js"
import { UserM } from "../models/mysql/users.js"

export const usersR = Router()
const usersC = new UsersC(UserM)

usersR.get("/", usersC.getAll)
usersR.get("/:id", usersC.getById)
usersR.post("/", usersC.create)
usersR.delete("/:id", usersC.delete)
usersR.put("/:id", usersC.update)
