import { gql } from "@apollo/client"

const TASKS = {
  all: gql`
    query tasks($tasks: TasksInput) {
      tasks(tasks: $tasks) {
        id
        title
        description
        date_created
      }
    }
  `
}

export {TASKS}