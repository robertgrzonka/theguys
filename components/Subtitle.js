const h2 = {
  color: 'indianred',
  margin: '1% 0px 10% 0px',
  fontWeight: '100',
  letterSpacing: '0.1rem',
  textAlign: 'center'
  // fontVariantPosition: 'super'
  // fontVariantCaps: 'all-small-caps',
}

const Subtitle = props => <h2 style={h2}>{props.text}</h2>

export default Subtitle
