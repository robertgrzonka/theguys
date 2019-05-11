import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

const Body = (props) => (
  <Wrapper>
    <div {...props}>
      {props.children}
    </div>
  </Wrapper>
)

export default Body
