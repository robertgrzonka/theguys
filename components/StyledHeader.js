const StyledHeader = props => (
  <h1 style={props}>
    {props.text}
    <style jsx>{`
    h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2rem;
      color: rgb(20,20,20);
      margin: 10px 0 20px 0;
      }
  `}</style>
  </h1>
)

export default StyledHeader
