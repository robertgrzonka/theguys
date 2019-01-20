import styled from '@emotion/styled'
import { css } from '@emotion/core'
import design from '../designsystem/designSystem'

const dynamicStyle = props => css`
  color: ${props.outline ? props.color : 'white'};
  background: ${props.outline ? 'white' : props.color};
  box-shadow: 0px 2px 5px rgba(0,0,0,0.3);
  border: 1px solid ${props.outline ? props.color : 'rgba(0, 0, 0, 0.1)'};
  font-size: ${props.large ? '1em' : '0.8em'};
  padding: ${props.large ? '10px 42px' : '10px 25px'};
  font-weight: ${props.large ? 600 : 400};
  letter-spacing: ${design.get('type.letterSpacing.small')};
  &:hover {
    background-color: ${props.outline ? props.color || 'black' : 'white'};
    box-shadow: 0px 6px 18px ${props.color ? props.color : 'black'};
    color: ${props.outline ? 'white' : props.color || 'black'};
    border: 1px solid ${props.outline ? 'rgba(0,0,0,0.1)' : props.color};
  }
`

const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  background: black;
  ${dynamicStyle};
  transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
`

export default (props) => (
  <Button href={props.href} {...props}>
    {props.children}
  </Button>
)
