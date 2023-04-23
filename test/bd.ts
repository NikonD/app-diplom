import { models } from "../src/models"
import { users } from "../src/models/users"

let a = async () => {
  let user = await models.users.findAll()
  console.log(user) 
}

a()