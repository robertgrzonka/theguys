const Blockquote = (props, color) => (
  <div>
    <blockquote>
      <p style={{ fontSize: '1.5em', fontWeight: 100 }}>{props.header}</p>
      <p style={{ fontSize: '1em', fontWeight: 100 }}>{props.msg}</p>
    </blockquote>
    <style jsx>{`
  blockquote {
    margin: 30px 0px 30px 0px;
    padding: 5px 20px 10px 20px;
    display: block;
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
