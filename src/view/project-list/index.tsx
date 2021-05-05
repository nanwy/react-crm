import React, { useState, useEffect } from 'react'
import { useDebounce, useMount } from 'utils'
import { useHttp } from 'utils/http'
import List from './list'
import Search from './search'
import styled from '@emotion/styled'
const Project = () => {
  const [param, setParam] = useState({ name: '', personId: '' })
  const [users, setUsers] = useState([])
  const debouncedParam = useDebounce(param, 200)
  const [list, setList] = useState([])
  const client = useHttp()
  useEffect(() => {
    client('projects', { data: debouncedParam }).then(setList)
  }, [debouncedParam])
  useMount(() => {
    client('users').then(setUsers)
  })

  return (
    <Container>
      <h1>项目列表</h1>
      <Search param={param} setParam={setParam}></Search>
      <List list={list} users={users}></List>
    </Container>
  )
}
const Container = styled.div`
  padding: 3.2rem;
`

export default Project
