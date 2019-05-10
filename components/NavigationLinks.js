import Link from 'next/link'
import design from '../designsystem/designSystem'
import styled from '@emotion/styled'

const LinkStyles = styled.a`
      text-decoration: none;
      cursor: pointer;
      color: ${design.color('primary', 'dark')};
      font-family: ${design.get('type.fontFamily.sans')};
      margin: 20px 10px;
      transition: all 0.4s ease;
      &:hover {
        color: ${design.color('primary', 'light')};
        transition: all 0.4s ease;
      }
`

const ListItem = props => (
  <Link href={props.href}>
    <LinkStyles>{ props.text }</LinkStyles>
  </Link>
)

const ListItems = [
  'Headers', 'Buttons', 'Cards', 'Lists', 'Code', 'Blockquotes', 'Forms'
]

const NavigationLinks = () => ListItems.map(item => {
  return <ListItem
    text={item}
    href={'#' + item.toLowerCase()}
    key={ListItems.findIndex(item => item)}
  />
})

export default NavigationLinks
