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
    res.json(user)
  }

  create = async (req, res) => {

  }

  delete = async (req, res) => {

  }

  update = async (req, res) => {

  }

}