import styled from '@emotion/styled'

const BlockquoteStyles = styled.blockquote`
  margin: 25px;
  padding: 15px 40px 20px 40px;
  display: block;
  background-color: white;
  border: 1px solid ${props => props.color ? props.color : 'rgba(0,0,0,0.5)'};
  color: ${props => props.color ? props.color : 'black'};
  box-shadow: 0px 0px 3px ${props => props.color ? props.color : 'rgba(0,0,0,0.5)'};
  border-top: 15px solid ${props => props.color ? props.color : 'rgba(0,0,0,1)'};
`

const QuoteStyles = styled.blockquote`
  margin: 25px;
  padding: 10px;
  padding-left: 25px;
  display: block;
  background-color: #637381;
  color: #DFE4E8;
  box-shadow: none;
  border-left: 5px solid ${props => props.color ? props.color : '#212B35'};
`

export const Mark = styled.code`
  padding: 5px;
  font-family: monospace;
  color: ${props => props.color ? props.color : 'turquoise'};
  background-color: #454F5B;
`

export const Quote = (props) => (
  <QuoteStyles {...props}>
    {props.children}
  </QuoteStyles>
)

export const Blockquote = (props) => (
  <BlockquoteStyles {...props}>
    <h4 style={props.css}>{props.title}</h4>
    <p>{props.children || props.msg}</p>
  </BlockquoteStyles>
)
