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

        a:link, a:active{
          text-decoration: none;
          color: rgb(237, 20, 61);
        }
        a:hover, a:visited {
          color: rgba(237, 20, 61,0.7)
        }
    `}
    </style>
  </div>
)

export default ListItem
