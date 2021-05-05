import { Form, Input } from 'antd'
interface SearchProps {
  param: {
    name: string
    personId: string
  }
  setParam: (param: SearchProps['param']) => void
}

const Search = ({ param, setParam }: SearchProps) => {
  return (
    <Form style={{ marginBottom: '2rem' }} layout={'inline'}>
      <Form.Item>
        <Input
          placeholder="项目名"
          value={param.name}
          onChange={(e) => setParam({ ...param, name: e.target.value })}
        ></Input>
      </Form.Item>
      {/* <Form.Item>
        <Select value={param}>
          <Option></Option>
        </Select>
      </Form.Item> */}
    </Form>
  )
}

export default Search
