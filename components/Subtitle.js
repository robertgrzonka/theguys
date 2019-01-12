const h2 = {
  color: 'black',
  margin: '1% 0px 10% 0px',
  fontWeight: '100',
  letterSpacing: '0.5rem',
  textAlign: 'center',
  fontSize: '1.7rem',
  fontVariantCaps: 'all-small-caps',
  fontVariantPosition: 'super'
}

const Subtitle = props => <h2 style={h2}>{props.text}</h2>

export default Subtitle
