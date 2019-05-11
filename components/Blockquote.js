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
  padding: 2rem;
  display: inline-block;
  border-radius: 3px;
  background-color: ${design.color('dark', 'base')};
  color: ${design.color('bright', 'dark')};
  box-shadow: 0px 2px 5px 'rgba(33, 43, 53, 0.5)';
  border-left: 1rem solid ${props => props.color ? props.color : design.color('dark', 'base')};
  font-size: ${design.get('type.fontSize.regular')};
  font-weight: ${design.get('type.fontWeight.light')};
  line-height: ${design.get('type.lineHeight.regular')};
  position: relative;
`

export const Quote = props => (
  <QuoteStyles color={props.color} style={{borderLeft: 0}}>
    <p>{props.quote || props.children}</p>
    <p style={ { textAlign: 'right', fontStyle: 'oblique', fontWeight: 200, fontSize: '1rem' } }>— { props.author }</p>
  </QuoteStyles>
)

const InfoText = styled.p`
  font-size: 1.1rem;
  font-variant-caps: all-small-caps;
  margin-top: 0;
  letter-spacing: 0.2em;
  line-height: 0.5em;
  color: ${props => props.color ? props.color : design.color('bright', 'darker')};
  font-weight: 900;
`

export const Info = props => (
  <QuoteStyles color={props.color}>
    <InfoText color={props.color}>{props.header || 'Note'}</InfoText>
    {props.children}
  </QuoteStyles>
)

const BlockquoteStyles = styled.blockquote`
  margin: 0 auto;
  padding: 5px 40px 15px 40px;
  display: block;
  background-color: ${props => props.color ? props.color : design.color('dark', 'base')};
  color: ${props => props.color ? design.color('dark', 'base') : design.color('bright', 'dark')};
  line-height: ${design.get('type.lineHeight.normal')};
  border-radius: 0px 0px 3px 3px;
  font-weight: ${design.get('type.fontWeight.regular')};
`

const BorderTop = styled.div`
  border-top: 20px solid ${props => props.color ? props.color : design.color('dark', 'base')};
  margin-top: 25px;
  border-radius: 3px 3px 0px 0px;
  padding: 0;
  filter: contrast(150%);
`

const Wrapper = styled.div`
  box-shadow: 0px 1px 3px ${props => props.color ? props.color : 'rgba(33, 43, 53, 0.5)'};
  border-radius: 3px;
  margin: 10px;
`

export const Blockquote = (props) => (
  <Wrapper>
    <BorderTop color={ props.color }/>
    <BlockquoteStyles color={ props.color }>
    <p style={ { margin: '20px 0px 0px 0px', fontWeight: 500, fontSize: '1.05em' } }>{props.title}</p>
    <p style={ { fontWeight: 300, textAlign: 'justify' } }>{props.children}</p>
    </BlockquoteStyles>
  </Wrapper>
)
