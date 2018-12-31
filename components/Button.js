const Button = props => (
  <a href={props.href}>
    <button>
      {props.children}
      <style jsx>{`
    button {
      color: ${props.color || 'white'};
      background-color: ${props.backgroundColor || 'black'};
      box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
      border: 1px solid ${props.backgroundColor || 'black'};
      font-size: ${'large' in props ? '1.3' : '1'}rem;
      padding: ${'large' in props ? '9px 27px' : '7px 21px'};
      font-weight: ${'large' in props ? 600 : 400};
      font-feature-settings: "c2sc", "smcp";
      text-shadow: 0px 1px 5px rgba(0,0,0,0.85);
    }
    button:hover {
      background-color: white;
      text-shadow: none;
      box-shadow: 0px 2px 15px ${props.backgroundColor || 'black'};
      color: ${props.backgroundColor || 'black'};
    }
    `}</style>
      <style jsx>{`
      button {
        cursor: pointer;
        border-radius: 5px;
        display: inline-block;
        margin: 0px 5px;
        transition: all 0.7s;
      }
    `}</style>
    </button>
  </a>
)

export default Button
