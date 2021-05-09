import { User } from './../auth-provider';

import { useEffect } from "react"
import { Project } from "view/project-list/list"
import { useHttp } from "./http"
import { useAsync } from "./useAsync"

export const useUsers = (param?: Partial<User>) => {
  const { run, ...result } = useAsync<User[]>()
  // const [list, setList] = useState([])
  const client = useHttp()
  useEffect(() => {
    run(client('users'))
    // console.log(list)
    // .then(setList)
  }, [param])
  return result
}