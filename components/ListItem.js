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
)

export default ListItem
