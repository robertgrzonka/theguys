const Blockquote = props => (
  <div>
    <blockquote>
      <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>{props.header}</p>
      <p style={{ fontSize: '1rem', fontWeight: 300 }}>{props.msg || props.children}</p>
    </blockquote>
    <style jsx>{`

  blockquote {
    font-size: 1rem;
    lineHeight: 2rem;
    margin: 20px 0px;
    padding: 10px 50px;
    display: inline-block;
    border-radius: 3px;
    background-color: whitesmoke
  }

  blockquote {
    color: ${props.color ? props.color : 'black'};
    box-shadow: 0px 1px 5px ${props.color ? props.color : 'black'};
    border-top: 15px solid ${props.color ? props.color : 'black'};
  }

  `}</style>
  </div>
)

export default Blockquote
