import { Title } from './Header'
import design from '../designsystem/designSystem'
import styled from '@emotion/styled'

const Wrapper = styled.div`
      background-color: ${design.color('bright', 'dark')};
      box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.3);
      padding: 50px 25%;
      margin-top: 50px;
      border: 2px 0px 3px 0px solid rgba(0, 0, 0, 0.3);
  @media (max-width: 1350px) {
      padding: 50px;
      border: 2px 0px 3px 0px solid rgba(255,255,255,0.8);
    }
  @media (max-width: 900px) {
      margin: 50px;
      padding: 0;
      border: 0;
      box-shadow: none;
      background-color: inherit;
    }
`

export const Description = (props) => (
  <p style={{
    fontSize: '1.1rem',
    ...props.style
  }}>
    {props.children}
  </p>
)

export const Component = props => (
  <Wrapper id={props.id}>
    <Title children={props.text} />
    <Description children={props.children}>
      {props.children}
    </Description>
  </Wrapper>
)
