const StyledHeader = props => (
  <h1 style={props}>
    {props.text}
    <span>
      {props.children}
    </span>
    <style jsx>{`
    h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2rem;
      color: black;
      margin: 10px 0 20px 0;
      font-weight: 900;
      letter-spacing: 0.1rem;
      }
  `}</style>
  </h1>
)

export default StyledHeader
