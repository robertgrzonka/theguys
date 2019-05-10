import { Title } from './Header'
import design from '../designsystem/designSystem'
import styled from '@emotion/styled'

const Wrapper = styled.div`
      background-color: ${design.color('bright', 'dark')};
      border-radius: 5px;
      padding: 50px 10%;
      margin: 50px 15%;
      border: 2px 0px 5px 0px solid rgba(0, 0, 0, 1);
      width: 70%;
  @media (max-width: 1250px) {
      padding: 5%;
      border: 2px 0px 3px 0px solid rgba(255,255,255,0.8);
    }
    @media (max-width: 1050px) {
      padding: 5%;
      border: 2px 0px 3px 0px solid rgba(255,255,255,0.8);
    }
  @media (max-width: 850px) {
      margin: 0 auto;
      padding: 10px;
      width: 90%;
      background-color: inherit;
    }
`

export const Description = (props) => (
  <p style={ {
    fontSize: '1rem',
    ...props.style
  } }>
    { props.children }
  </p>
)

export const Component = props => (
  <Wrapper id={ props.id }>
    <Title children={ props.text } />
    <Description children={ props.children }>
      { props.children }
    </Description>
  </Wrapper>
)
