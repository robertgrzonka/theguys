const h2 = {
  color: 'crimson',
  margin: '1% 0px 10% 0px',
  fontWeight: '100',
  letterSpacing: '0.1rem',
  textAlign: 'center'
}

const Subtitle = props => <h2 style={h2}>{props.text}</h2>

export default Subtitle
