import {buildSchema} from 'graphql'

const schema = buildSchema(`
  scalar JSON
  scalar Bigint
  scalar timestamptz

  type User {
    id: ID
    name: String
    role: Bigint
    verify: Boolean
  }

  type Tasks {
    id: ID
    title: String
    description: String
    status: Bigint
    date_created: timestamptz
    date_ended: timestamptz
    creteria: [String]
  }

  type Students {
    id: ID
    fullname: String
  }

  input TasksInput {
    q: String
  }

  input StudentsInput {
    q: String
  }

  type Query {
    user(user: JSON): User
    session: User

    students(students: StudentsInput): [Students]
    tasks(tasks: TasksInput): [Tasks]
  }

`)

export {schema}