const StyledHeader = props => (
  <p style={props}>
    {props.text}
    {props.children}
    <style jsx>{`
    p {
      font-weight: 100;
      color: rgb(20,20,20);
      font-size: 1.5rem;
      }
  `}</style>
  </p>
)

export default StyledHeader
