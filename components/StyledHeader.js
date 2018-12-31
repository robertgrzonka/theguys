const StyledHeader = props => (
  <p style={props}>
    {props.text}
    {props.children}
    <style jsx>{`
    p {
      font-weight: 100;
      color: black;
      font-size: 2em;
      }
  `}</style>
  </p>
)

export default StyledHeader
