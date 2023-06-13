import { useQuery } from "@apollo/client"
import axios from "axios"
import { useState } from "react"
import { USER } from "../components/gqls/users"

export const useUser = () => {


  const {data, error, loading} = useQuery(USER.session)
  console.log(error)
  console.log("USER", data?.session)

  return data? data?.session: {}
}
