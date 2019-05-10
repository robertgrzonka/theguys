import styled from '@emotion/styled'
import { css } from '@emotion/core'
import design from '../designsystem/designSystem'

const white = design.color('bright')
const dark = design.color('dark')

const hover = props => css`
    box-shadow: 0px 5px 15px ${props.color ? props.color : dark};
    color: ${props.outline ? props.color : white || dark};
`

const outline = props => css`
    color: ${props.color || dark};
    background-color: white;
    border: 1px solid ${props.color || dark};
`

const large = css`
  font-size: ${design.fontSize('regular')};
  min-height: 45px;
  width: 160px;
  font-weight: ${design.get('type.fontWeight.bold')};
`

const Button = styled.button`
  color: white;
  background-color: ${props => props.color || dark};
  box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
  border: 1px solid ${props => props.color || dark};
  letter-spacing: ${design.get('type.letterSpacing.small')};
  font-size: ${design.fontSize('s')};
  min-height: 35px;
  min-width: 100px;
  font-weight: ${design.get('type.fontWeight.normal')};
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s ease;
  &:hover {
    ${hover}
  }
  &.outline {
    ${outline}
  }
  &.large {
    ${large}
  }
`

export default (props) => (
  <Button href={props.href} {...props}>
    {props.children}
  </Button>
)
