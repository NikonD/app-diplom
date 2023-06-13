import { gql } from "@apollo/client"

const STUDENTS = {
  all: gql`
    query students($students: StudentsInput) {
      students(students: $students) {
        id
        fullname
      }
    }
  `
}

export {STUDENTS}