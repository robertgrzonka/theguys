const Blockquote = props => (
  <blockquote>
    <h2>{props.header}</h2>
    <p>{props.msg || props.children}</p>
    <style jsx>{`

  blockquote {
    margin: 5%;
    padding: 10px 30px 20px 30px;
    display: block;
    border-radius: 5px;
    background-color: whitesmoke;
  }

  blockquote {
    color: ${props.color ? props.color : 'black'};
    box-shadow: 0px 2px 5px ${props.color ? props.color : 'black'};
    border-top: 15px solid ${props.color ? props.color : 'black'};
  }

  `}</style>
  </blockquote>
)

export default Blockquote
