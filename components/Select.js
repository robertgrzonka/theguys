const Select = ({ name, children }) => (
  <>
    <label htmlFor={name}>{name}</label>
    <select name={name}>{children}</select>
  </>
)

export default Select
