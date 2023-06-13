import { models } from "../models"

const resolver = {
  
  user: async (args: any, context: any) => {
    return []
  },

  session: async(args: any, context: any) => {
    console.log(context.session.user)
    return context.session.user
  },

  tasks: async (args: any, context: any) => {
    console.log(args.tasks)

    try {
      let tasks = await models.tasks.findAll()
      
      return tasks
    } catch (err: any) {
      console.log((err as Error).message)
      return []
    }
  },

  students: async (args: any, context: any) => {
    try {
      let students = models.users.findAll({
        where: {
          type: 0
        }
      })
      return students
    } catch (err: any) {
      console.log((err as Error).message)
      return []
    }
  }
}

export {resolver}