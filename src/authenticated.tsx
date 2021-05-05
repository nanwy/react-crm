import { useAuth } from 'context/auth-context'
import Project from 'view/project-list'
import styled from '@emotion/styled'
import { Row } from 'components/lib'
import { Dropdown, Menu, Button } from 'antd'
import { ReactComponent as SoftwareLogo } from 'assets/software-logo.svg'
export const Authenticated = () => {
  const { logout, user } = useAuth()
  return (
    <Container>
      <Header>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={'18rem'} color={'rgb(38,132,255)'} />
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="logout">
                  <Button type={'link'} onClick={logout}>
                    登出
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            <Button type={'link'}>{user?.name}</Button>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <Project></Project>
      </Main>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`

const Header = styled(Row)`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
`
const HeaderLeft = styled(Row)``

const HeaderRight = styled.div``

const Main = styled.main`
  /* height:100%; */
  /* padding-top: 6rem; */
`
