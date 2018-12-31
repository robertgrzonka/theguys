const Blockquote = props => (
  <div>
    <blockquote>
      <p style={{ fontSize: '1.5em', fontWeight: 500 }}>{props.header}</p>
      <p style={{ fontSize: '0.9em', fontWeight: 100 }}>{props.msg || props.children}</p>
    </blockquote>
    <style jsx>{`
  blockquote {
    margin: 30px 0px;
    padding: 0px 50px 10px 50px;
    display: inline-block;
    border-radius: 5px;
    background-color: whitesmoke;
  }
  blockquote {
    color: ${props.color ? props.color : '#404040'};
    box-shadow: 0px 0px 5px ${props.color ? props.color : '#404040'};
    border: 0.01em solid ${props.color ? props.color : '#404040'};
    border-left: 20px solid ${props.color ? props.color : '#404040'};
  }
  `}</style>
  </div>
)

export default Blockquote
