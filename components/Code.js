const span = {
  fontFamily: 'Menlo, monospace',
  fontSize: '0.7em',
  fontWeight: 100,
  backgroundColor: 'rgba(40,40,40,1)',
  color: 'whitesmoke',
  borderRadius: 3,
  padding: '3px 5px'
}

const Code = props =>
  <span style={span}>
    {props.children}
  </span>

export default Code
