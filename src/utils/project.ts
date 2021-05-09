import { useEffect } from "react"
import { Project } from "view/project-list/list"
import { useHttp } from "./http"
import { useAsync } from "./useAsync"

export const useProject = (param?: Partial<Project>) => {
  const { run, ...result } = useAsync<Project[]>()
  // const [list, setList] = useState([])
  const client = useHttp()
  useEffect(() => {
    run(client('projects', { data: param }))
    // console.log(list)
    // .then(setList)
  }, [param])
  return result
}