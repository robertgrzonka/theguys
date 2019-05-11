import styled from '@emotion/styled'
import { css } from '@emotion/core'
import design from '../designsystem/designSystem'

const bright = design.color('bright', 'base')
const dark = design.color('dark', 'base')

const hover = props => css`
    box-shadow: 0px 5px 15px ${props.color ? props.color : dark};
    color: ${props => {
  if(props.outline) {
    if(!props.darkText) {
      return bright
    }
    return dark
  }}};
`

const outline = props => css`
    color: ${props.color ? props.color : dark};
    background-color: ${bright};
    border: 1px solid ${props.color ? props.color : dark};
`

const large = css`
  font-size: ${design.fontSize('regular')};
  min-height: 45px;
  width: 160px;
  font-weight: ${design.get('type.fontWeight.bold')};
`

const Button = styled.button`
  color: ${props => props.darkText ? dark : bright};
  background-color: ${props => !props.outline && props.color ? props.color : dark};
  box-shadow: 0px 2px 5px rgba(0,0,0,0.35);
  border: 1px solid ${props => props.color ? props.color : dark};
  letter-spacing: ${design.get('type.letterSpacing.small')};
  font-size: ${design.fontSize('s')};
  min-height: 35px;
  min-width: 100px;
  font-weight: ${design.get('type.fontWeight.medium')};
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.4s ease;
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
