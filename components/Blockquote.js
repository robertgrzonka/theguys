import styled from '@emotion/styled'

const Blockquote = styled.blockquote`
  margin: 25px;
  padding: 15px 40px 20px 40px;
  display: block;
  border-radius: 3px;
  background-color: white;
  border: 1px solid ${props => props.color ? props.color : 'rgba(0,0,0,0.5)'};
  color: ${props => props.color ? props.color : 'black'};
  box-shadow: 0px 0px 3px ${props => props.color ? props.color : 'rgba(0,0,0,0.5)'};
  border-top: 15px solid ${props => props.color ? props.color : 'rgba(0,0,0,1)'};
`

export default (props) => (
  <Blockquote {...props}>
    <h4 style={props.css}>{props.title}</h4>
    <p>{props.children || props.msg}</p>
  </Blockquote>
)
