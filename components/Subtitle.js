const Subtitle = props => (
  <div>
    <h2>{props.text}</h2>
    <style jsx>{`
    h2 {
      color: black;
      margin: 2% 0px 10% 0px;
      font-weight: 100;
      letter-spacing: 0.08rem;
      text-align: center;
      font-variant-caps: all-small-caps;
      font-size: 1.5rem;
    }
  `}</style>
  </div>
)

export default Subtitle
