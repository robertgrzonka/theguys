import StyledHeader from './StyledHeader'

const Component = props => (
  <div style={{ margin: 20, padding: 100, border: '1px solid rgba(0,0,0,0.2)', borderRadius: 5 }}>
    <StyledHeader text={props.text} padding='0 0 0.5em 0' margin='0' borderBottom='1px solid rgba(0,0,0,0.2)' />
    {props.children}
  </div>
)

export default Component
