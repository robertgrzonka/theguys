const Select = props => (
  <div>
    <label htmlFor={props.name}>{props.name}</label>
    <select name={props.name}>{props.children}</select>
  </div>
)

export default Select
