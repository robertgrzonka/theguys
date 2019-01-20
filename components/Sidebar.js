import ListItem from './ListItem'

const Sidebar = props => (
  <div>
    <div className='sidebar'>
      <h2>{props.title}</h2>
      <ul>
        <ListItem text='Headers' />
        <ListItem text='Buttons' />
        <ListItem text='Cards' />
        <ListItem text='Code' />
        <ListItem text='Blockquotes' />
        <ListItem text='Forms' />
      </ul>
    </div>
    <style jsx>
      {`
        h2 {
          padding-left: 20px;
          font-weight: 500;
          display: inline-block;
        }

        ul {
          list-style-type: none;
          font-size: 1rem;
          font-weight: 300;
          display: flex;
        }

        .sidebar {
          position: fixed;
          top: 0;
          width: 100%;
          min-height: 100px;
          background-color: rgba(240,240,240,0.8);
          display: flex;
          align-items: center;
        }

        @media (max-width: 950px) {
          .sidebar {
            display: none;
          }
        }
      `}
    </style>
  </div>
)

export default Sidebar
