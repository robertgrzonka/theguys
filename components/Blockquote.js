const Blockquote = props => (
  <blockquote>
    <h2>{props.header}</h2>
    <p>{props.msg || props.children}</p>
    <style jsx>{`

  blockquote {
    margin: 50px 0px;
    padding: 10px 20px 20px 20px;
    display: block;
    border-radius: 5px;
    background-color: white;
  }

  blockquote {
    color: ${props.color ? props.color : 'black'};
    box-shadow: 0px 1px 5px ${props.color ? props.color : 'black'};
    border-top: 15px solid ${props.color ? props.color : 'black'};
  }

  `}</style>
  </blockquote>
)

export default Blockquote
