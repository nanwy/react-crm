import { useAuth } from 'context/auth-context'
import { Form, Input, Button } from 'antd'
import { useAsync } from 'utils/useAsync'

const LoginScreen = ({ onError }: { onError: (err: Error) => void }) => {
  const { login, user } = useAuth()
  const { run, isLoading } = useAsync()
  const handleSubmit = async (values: { username: string; password: string }) => {
    try {
      await run(login(values)) //run内部消化catch了
    } catch (e) {
      onError(e)
    }
  }
  return (
    <Form onFinish={handleSubmit}>
      {user ? <div> 登陆成功，用户名：{user?.name}</div> : null}
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="用户名" type="text" id={'username'} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input placeholder="密码" type="password" id={'password'} />
      </Form.Item>
      <Form.Item>
        <Button loading={isLoading} style={{ width: '100%' }} htmlType="submit" type="primary">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginScreen
