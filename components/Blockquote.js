import styled from '@emotion/styled'
import design from '../designsystem/designSystem'

const MarkStyles = styled.code`
  padding: 2px 5px;
  font-family: monospace;
  color: ${props => props.color ? props.color : design.color('bright', 'dark')};
  background: ${design.color('dark', 'light')};
  border-radius: 3px;
  font-size: 1rem;
`

export const Mark = (props) => (
  <MarkStyles color={props.color}>
    {props.children}
  </MarkStyles>
)

const QuoteStyles = styled.blockquote`
  width: 100%;
  margin: 30px 0;
  padding: 20px;
  padding-left: 25px;
  display: block;
  border-radius: 3px;
  background-color: ${design.color('dark', 'base')};
  color: ${design.color('bright', 'dark')};
  box-shadow: 0px 3px 5px ${props => props.color ? props.color : design.color('dark', 'base')};
  border-left: 1em solid ${props => props.color ? props.color : design.color('dark', 'base')};
  font-size: ${design.get('type.fontSize.regular')};
  font-weight: ${design.get('type.fontWeight.normal')};
  line-height: ${design.get('type.lineHeight.regular')};
  position: relative;
`

export const Quote = (props) => (
  <QuoteStyles color={props.color}>
    <p style={ { fontFamily: 'serif', fontWeight: 200 } }>{props.quote || props.children}</p>
    <p style={ { textAlign: 'right', fontStyle: 'oblique', fontWeight: 200, fontSize: '1em' } }>{ props.author }</p>
  </QuoteStyles>
)

const InfoText = styled.p`
  font-size: 1em;
  font-variant-caps: all-small-caps;
  margin-top: 0;
  letter-spacing: 0.2em;
  line-height: 0.5em;
  color: ${props => props.color ? props.color : design.color('bright', 'darker')};
  font-weight: 900;
`

export const Info = (props) => (
  <QuoteStyles color={props.color}>
    <InfoText color={props.color}>{props.header || 'Note'}</InfoText>
    {props.children}
  </QuoteStyles>
)

const BlockquoteStyles = styled.blockquote`
  margin: 25px 0;
  padding: 5px 40px 15px 40px;
  display: block;
  background-color: ${props => props.color ? props.color : design.color('dark', 'base')};
  border-top: 20px solid ${props => props.color ? props.color : design.color('dark', 'light')};
  color: ${props => props.color ? design.color('dark', 'base') : design.color('bright', 'dark')};
  box-shadow: 0px 1px 3px ${props => props.color ? props.color : design.color('dark', 'light')};
  line-height: ${design.get('type.lineHeight.normal')};
`

export const Blockquote = (props) => (
  <BlockquoteStyles color={props.color}>
    <h4 style={ { marginBottom: 10} }>{props.title}</h4>
    <p>{props.children}</p>
  </BlockquoteStyles>
)
