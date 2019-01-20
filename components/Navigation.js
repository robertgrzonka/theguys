import Link from 'next/link'
import styled from '@emotion/styled'
import design from '../designsystem/designSystem'

const A = styled.a`
  margin: 0 1rem 0 1rem;  
  cursor: pointer;
  text-decoration: none;
  font-size: ${design.fontSize('m')};
  font-weight: ${design.get('type.fontWeight.normal')};
  color: ${design.color('link', 'base')};
  transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  &:hover, &:visited {
    color: ${design.color('link', 'over')};
}`

const NavigationBar = styled.div`
  position: fixed;
  top: 0;
  padding: 25px;
  background: rgba(250,250,250,0.8);
  width: 100%;
`

const Ul = styled.div`
  list-style-type: none;
  display: inline-flex;
  text-align: left;
  margin: 0 auto;
  padding: 0 10px;
`

const Brand = styled.span`
  text-align: right;
  margin-left: 100px;
  font-weight: ${design.get('type.fontWeight.normal')};
  font-size: ${design.fontSize('m')};
  color: ${design.color('dark')};
`

const Hyperlink = props => (
  <li>
    <Link href={`/${props.title}`}>
      <A>{props.title}</A>
    </Link>
  </li>
)

export default () => (
  <NavigationBar>
    <Ul>
      <Hyperlink title='Hello!' />
      <Hyperlink title='Sandbox' />
      <Hyperlink title='Design' />
    </Ul>
    <Brand>
      GitHub
    </Brand>
  </NavigationBar>
)
