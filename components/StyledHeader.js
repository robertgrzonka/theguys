const StyledHeader = props => (
  <p style={props}>
    {props.text}
    {props.children}
    <style jsx>{`
    p {
      font-weight: 100;
      color: rgb(40,40,40);
      font-size: 2.5em;
      }
  `}</style>
  </p>
)

export default StyledHeader
