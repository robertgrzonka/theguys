import ListItem from './ListItem'
import design from '../designsystem/designSystem'
<<<<<<< HEAD
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
  background rgba(255,255,255,0.7);
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
      <ListItem text='Code' href='#code' />
      <ListItem text='Blockquotes' href='#blockquotes' />
      <ListItem text='Forms' href='#forms' />
    </List>
  </Wrapper>
=======

const Sidebar = props => (
  <div className='sidebar'>
    <h3>theGuys › design</h3>
    <ul>
      <ListItem text='Headers' />
      <ListItem text='Buttons' />
      <ListItem text='Cards' />
      <ListItem text='Code' />
      <ListItem text='Blockquotes' />
      <ListItem text='Forms' />
    </ul>
    <style jsx>
      {`
        h3 {
          padding: 0 50px;
          display: flex;
          color: ${design.color('dark', 'light')};
          font-family: ${design.get('type.fontFamily.serif')};
        }
        h3:hover {
          color: ${design.color('dark')};
        }

        ul {
          list-style-type: none;
          display: flex;
        }

        .sidebar {
          display: flex;
          position: fixed;
          top: 0;
          width: 100%;
          min-height: 100px;
          background-color: rgba(245,245,245,0.95);
          align-items: center;
          box-shadow: 0px 1px 5px rgba(0,0,0,0.2);
          z-index: 100;
        }

        @media (max-width: 950px) {
          .sidebar {
            display: none;
          }
          ul {
            display: none;
          }
        }
      `}
    </style>
  </div>
>>>>>>> b6a6812463966130f1ec241e8c43cd3ae9a35291
)

export default Navigation
