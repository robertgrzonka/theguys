const Blockquote = props => (
  <blockquote>
    <h2 style={props.css}>{props.title}</h2>
    <p>{props.msg || props.children}</p>
    <style jsx>{`

    h2 {
      font-weight: 300;
      letter-spacing: 0.1rem;
      font-variant-caps: all-small-caps;
    }

    p {
      font-size: 1rem;
    }
    
    blockquote {
      margin: 25px;
      padding: 15px 40px 20px 40px;
      display: block;
      border-radius: 3px;
      background-color: rgba(255,255,255,1);
      border: 1px solid ${props.color ? props.color : 'rgba(0,0,0,0.5)'};
    }

    blockquote {
      color: ${props.color ? props.color : 'black'};
      box-shadow: 0px 0px 3px ${props.color ? props.color : 'rgba(0,0,0,0.5)'};
      border-top: 15px solid ${props.color ? props.color : 'rgba(0,0,0,1)'};
    }

  `}</style>
  </blockquote>
)

export default Blockquote
