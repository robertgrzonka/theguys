const ListItem = props => (
  <div>
    <li>
      <a href={`#${props.text.toLowerCase()}`}>{props.text}</a>
    </li>
    <style jsx>
      {`
        li {
          margin-left: 30px;
        }
    `}
    </style>
  </div>
)

export default ListItem
