const span = {
  fontFamily: '"Fira Mono", Inconsolata, monospace',
  fontSize: '0.8em',
  fontWeight: 100,
  backgroundColor: 'rgba(60,60,60,1)',
  color: 'whitesmoke',
  borderRadius: 0,
  padding: '3px 5px'
}

const Code = props =>
  <span style={span}>
    {props.children}
  </span>

export default Code
