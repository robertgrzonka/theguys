const Button = props => (
  <a href={props.href}>
    <button>
      {props.children}
    </button>
    <style jsx>{`
    button {
        cursor: pointer;
        border-radius: 5px;
        background-color: black;
        letter-spacing: 0.0625rem;
        transition: all 0.5s;
      }

      button {
        color: ${'outline' in props ? props.color : 'white'};
        background-color: ${'outline' in props ? 'white' : props.color};
        box-shadow: 0px 2px 3px rgba(0,0,0,0.3);
        border: 1px solid ${props.color || 'black'};
        font-size: ${'large' in props ? '1.2' : '0.8'}rem;
        padding: ${'large' in props ? '10px 50px' : '10px 25px'};
        font-weight: ${'large' in props ? 400 || 'medium' : 100 || 'regular'};
        }

      button:hover {
        background-color: ${'outline' in props ? props.color || 'black' : 'white'};
        box-shadow: 0px 6px 18px ${props.color ? props.color : 'black'};
        color: ${'outline' in props ? 'white' : props.color || 'black'};
      }
      `}</style>
  </a>
)

export default Button
