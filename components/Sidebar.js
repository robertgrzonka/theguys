import ListItem from './ListItem'
import design from '../designsystem/designSystem'
import styled from '@emotion/styled'

const Logo = styled.h3`
  padding: 0 50px;
  color: ${design.color('dark')};
  font-family: ${design.get('type.fontFamily.serif')};
`

const List = styled.ul`
  list-style-type: none;
  display: inline-flex;
  @media (max-width: 950px) {
    display: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  min-width: 100%;
  height: 75px;
  background: rgba(255,255,255,0.9);
  align-items: center;
  box-shadow: 0px 2px 3px rgba(0,0,0,0.3);
  z-index: 100;
  &:hover {
    background: white;
  }
`

const Navigation = props => (
  <Wrapper>
    <Logo>theGuys › design</Logo>
    <List>
      <ListItem text='Headers' href='#headers' />
      <ListItem text='Buttons' href='#buttons' />
      <ListItem text='Cards' href='#cards' />
      <ListItem text='Lists' href='#lists'/>
      <ListItem text='Code' href='#code' />
      <ListItem text='Blockquotes' href='#blockquotes' />
      <ListItem text='Forms' href='#forms' />
    </List>
  </Wrapper>
)

export default Navigation
