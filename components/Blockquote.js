const Blockquote = props => (
  <div>
    <blockquote>
      <p style={{ fontSize: '1.5em', fontWeight: 400 }}>{props.header}</p>
      <p style={{ fontSize: '1em', fontWeight: 100 }}>{props.msg || props.children}</p>
    </blockquote>
    <style jsx>{`
  blockquote {
    margin: 30px 0px;
    padding: 0px 50px 10px 50px;
    display: inline-block;
    border-radius: 3px;
    background-color: whitesmoke
  }
  blockquote {
    color: ${props.color ? props.color : 'rgba(80,80,80,1)'};
    box-shadow: 0px 0px 3px ${props.color ? props.color : 'rgba(40,40,40,1)'};
    border: 0.01em solid ${props.color ? props.color : 'rgba(40,40,40,1)'};
    border-left: 20px solid ${props.color ? props.color : 'rgba(40,40,40,1)'};
  }
  `}</style>
  </div>
)

export default Blockquote
