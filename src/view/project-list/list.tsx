import { User } from 'auth-provider'
import React from 'react'
import { Table } from 'antd'
import dayjs from 'dayjs'
interface Project {
  id: number
  name: string
  personId: number
  pin: boolean
  organization: string
  created: number
}

interface ListProps {
  list: Project[]
  users: User[]
}
const List = ({ list, users }: ListProps) => {
  const column = [
    {
      title: '名称',
      dataIndex: 'name',
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      title: '部门',
      dataIndex: 'organization',
    },
    {
      title: '负责人',
      render(value: any, project: Project) {
        return <span>{users.find((user: User) => user.id === project.personId)?.name || '未知'}</span>
      },
    },
    {
      title: '创建时间',
      render(value: any, project: Project) {
        return <span>{project.created ? dayjs(project.created).format('YYYY-MM-DD') : '-'}</span>
      },
    },
  ]
  return (
    <div>
      <Table dataSource={list} columns={column} rowKey={(e: any) => e.id}></Table>
    </div>
  )
}
export default List
