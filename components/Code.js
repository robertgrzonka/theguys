const span = {
  fontFamily: '"Fira Mono", Inconsolata, monospace',
  fontSize: '0.8rem',
  fontWeight: 100,
  backgroundColor: 'rgba(30,30,30,1)',
  color: 'white',
  borderRadius: 0,
  padding: '3px 7px'
}

const Code = props =>
  <span style={span}>
    {props.children}
  </span>

export default Code
