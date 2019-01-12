const span = {
  fontFamily: '"Fira Mono", Menlo, Inconsolata, monospace',
  fontSize: '0.7rem',
  fontWeight: 100,
  backgroundColor: 'rgba(35,35,35,1)',
  color: 'white',
  borderRadius: 3,
  padding: '2px 5px'
}

const Code = props =>
  <span style={span}>
    {props.children}
  </span>

export default Code
