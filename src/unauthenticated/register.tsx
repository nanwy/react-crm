import { useAuth } from 'context/auth-context'
import { Form, Input, Button } from 'antd'

const RegisterScreen = ({ onError }: { onError: (err: Error) => void }) => {
  const { register } = useAuth()
  const handleSubmit = async ({ cpassword, ...values }: { cpassword: string; username: string; password: string }) => {
    if (cpassword !== values.password) {
      onError(new Error('两次密码不同'))
      return
    }
    try {
      await register(values)
    } catch (e) {
      onError(e)
    }
  }
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="用户名" type="text" id={'username'} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input placeholder="密码" type="password" id={'password'} />
      </Form.Item>
      <Form.Item name="cpassword" rules={[{ required: true, message: '请再次输入密码' }]}>
        <Input placeholder="请保证两次密码相同" type="password" id={'cpassword'} />
      </Form.Item>
      <Form.Item>
        <Button style={{ width: '100%' }} htmlType="submit" type="primary">
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterScreen
