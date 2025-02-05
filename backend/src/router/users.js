import { Router } from "express"
import { UsersC } from "../controllers/users"
import { UserM } from "../models/mysql/users"

export const usersR = Router()
const usersC = UsersC(UserM)

usersR.get("/", usersC.getAll)
usersR.get("/:id", usersC.getById)
usersR.post("/", usersC.create)
usersR.delete("/:id", usersC.delete)
usersR.put("/:id", usersC.update)
