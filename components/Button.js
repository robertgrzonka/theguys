const Button = (props) => (
  <button>
    {props.children}
    <style jsx>{`
    button {
      color: ${props.color || 'white'};
      background-color: ${props.backgroundColor || 'black'};
      box-shadow: 0px 0px 3px ${props.backgroundColor || 'black'};
      font-size: ${'large' in props ? '1' : '0.8'}rem;
      font-weight: ${'large' in props ? '600' : 'initial'};
      border: 1px solid ${props.backgroundColor || 'black'};
    }
    button:hover {
        box-shadow: 0px 3px 10px ${props.backgroundColor || 'black'};
      }
    `}</style>
    <style jsx>{`
      button {
        text-shadow: 0px 1px 1px #404040;
        cursor: pointer;
        padding: 7px 15px;
        border-radius: 5px;
        font-weight: 100;
        display: inline-block;
        transition: all 0.4s;
      }
    `}</style>
  </button>
)

export default Button
