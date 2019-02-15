<<<<<<< HEAD
import Link from 'next/link'
import styled from '@emotion/styled'

const Point = styled.li`
  margin-left: 30px;
`

const ListItem = props => (
  <Point>
    <Link href={props.href}>
      <a>{props.text}</a>
    </Link>
  </Point>
=======
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
>>>>>>> b6a6812463966130f1ec241e8c43cd3ae9a35291
)

export default ListItem
