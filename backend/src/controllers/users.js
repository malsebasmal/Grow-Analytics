export class UsersC {
  constructor({ model }) {
    this.model = model
  }

  getAll = async (req, res) => {
    const { filtro } = req.query
    const users = await this.model.getAll({ filtro })
    res.json(users)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const user = await this.model.getById({ id })
    if (user) return res.json(user)
    res.status(404).json({ message: "User not found" })
  }

  create = async (req, res) => {
    
  }

  delete = async (req, res) => {
    const { id } = req.params
    const user = await this.model.delete({ id })

    if (user === false) {
      return res.status(404).json({ message: "User not found" })
    }

    return res.json({ message: "User deleted" })
  }

  update = async (req, res) => {

  }

}