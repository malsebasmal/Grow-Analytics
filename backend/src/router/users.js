import { Router } from "express"
import { UsersC } from "../controllers/users"

export const usersR = Router()
const UsersC = UsersC()

usersR.get("/", UsersC.)
usersR.get("/:id")
usersR.post("/")
usersR.delete("/:id")
usersR.put("/:id")
