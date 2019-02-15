import styled from '@emotion/styled'
import { css } from '@emotion/core'
import design from '../designsystem/designSystem'

const white = design.color('bright')
const dark = design.color('dark')

const hover = props => css`
    background-color: ${props.outline ? props.color || dark : white};
    box-shadow: 0px 6px 15px ${props.color ? props.color : dark};
    color: ${props.outline ? white : props.color || dark};
    border: 1px solid ${props.outline ? props.color || dark : props.color};
`

const outline = props => css`
    color: ${props.color || dark};
    background-color: white;
    border: 1px solid ${props.color || dark};
`

const large = css`
  font-size: 1em;
  min-height: 45px;
  width: 160px;
  font-weight: 900;
`

const Button = styled.button`
  color: white;
  background-color: ${props => props.color || dark};
  box-shadow: 0px 2px 7px rgba(0,0,0,0.3);
  border: 1px solid ${props => props.color || dark};
  letter-spacing: ${design.get('type.letterSpacing.small')};
  font-size: 0.8em;
  min-height: 35px;
  max-width: 150px;
  font-weight: 300;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
<<<<<<< HEAD
  border-radius: 3px;
  transition: all 0.3s;
  &:hover {
    ${hover}
  }
  &.outline {
    ${outline}
  }
  &.large {
    ${large}
  }
=======
  border-radius: 5px;
  background: black;
  ${dynamicStyle};
  transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
>>>>>>> b6a6812463966130f1ec241e8c43cd3ae9a35291
`

export default (props) => (
  <Button href={props.href} {...props}>
    {props.children}
  </Button>
)
