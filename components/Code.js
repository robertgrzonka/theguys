const span = {
  fontFamily: 'monospace',
  backgroundColor: 'rgba(35,35,35,1)',
  color: 'white',
  borderRadius: '3px',
  padding: '3px'
}

const Code = props =>
  <span style={span}>
    {props.children}
  </span>

export default Code
