import ListItem from './ListItem'
import design from '../designsystem/designSystem'

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
)

export default Sidebar
