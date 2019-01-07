const Button = props => (
  <a href={props.href}>
    <button>
      {props.children}
    </button>
    <style jsx>{`
    button {
        cursor: pointer;
        border-radius: 3px;
        color: black;
        background-color: black;
        border: 0.1rem solid black;
        letter-spacing: 0.05rem;
        transition: all 0.4s;
      }
      button {
        color: ${'outline' in props ? props.color : 'white'};
        background-color: ${'outline' in props ? 'white' : props.color};
        box-shadow: 0px 1px 5px ${props.color || 'black'};
        border: 0.1rem solid ${props.color || 'black'};
        font-size: ${'large' in props ? '1.2' : '0.9'}rem;
        padding: ${'large' in props ? '9px 27px' : '7px 21px'};
        font-weight: ${'large' in props ? 100 : 400};
        }
      button:hover {
        background-color: ${'outline' in props ? props.color || 'black' : 'white'};
        box-shadow: 0px 2px 15px ${props.color ? props.color : 'black'};
        color: ${'outline' in props ? 'white' : props.color || 'black'};
      }
      `}</style>
  </a>
)

export default Button
