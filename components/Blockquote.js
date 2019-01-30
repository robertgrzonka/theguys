import styled from '@emotion/styled'
import design from '../designsystem/designSystem'

const MarkStyles = styled.code`
  padding: 5px;
  font-family: monospace;
  color: ${props =>
    props.color
      ? props.color
      : design.color('bright', 'darker')};
  background: ${design.color('dark', 'light')};
  border-radius: 3px;
`

export const Mark = (props) => (
  <MarkStyles color={props.color}>
    {props.children}
  </MarkStyles>
)

const QuoteStyles = styled.blockquote`
  margin: 25px;
  padding: 20px;
  padding-left: 25px;
  display: block;
  background-color: ${design.color('dark', 'lighter')};
  color: ${design.color('bright', 'dark')};
  box-shadow: none;
  border-left: 10px solid ${props => props.color ? props.color : design.color('dark', 'base')};
`

export const Quote = (props) => (
  <QuoteStyles color={props.color}>
    {props.children}
  </QuoteStyles>
)

const BlockquoteStyles = styled.blockquote`
  margin: 25px;
  padding: 15px 40px 20px 40px;
  display: block;
  background-color: white;
  border: 1px solid ${props => props.color ? props.color : design.color('dark', 'lighter')};
  border-top: 15px solid ${props => props.color ? props.color : design.color('dark', 'lighter')};
  color: ${props => props.color ? props.color : design.color('dark', 'base')};
  box-shadow: 0px 0px 3px ${props => props.color ? props.color : design.color('dark', 'base')};
`

export const Blockquote = (props) => (
  <BlockquoteStyles color={props.color}>
    <h4>{props.title}</h4>
    <p>{props.children}</p>
  </BlockquoteStyles>
)
