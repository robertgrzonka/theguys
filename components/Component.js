import { Title } from './Header'
import design from '../designsystem/designSystem'
import styled from '@emotion/styled'

const Wrapper = styled.div`
      background-color: ${design.color('bright', 'darker')};
      border-radius: 5px;
      padding: 50px 10%;
      margin: 50px 15%;
      border: 2px 0px 5px 0px solid rgb(249, 250, 251);
      width: 70%;
  @media (max-width: 1250px) {
      padding: 5%;
      border: 2px 0px 3px 0px solid rgba(249, 250, 251, 0.8);
    }
    @media (max-width: 1050px) {
      padding: 5%;
      border: 2px 0px 3px 0px solid rgba(249, 250, 251, 1);
    }
  @media (max-width: 850px) {
      margin: 0 auto;
      padding: 15px;
      width: 90%;
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

const Paragraph = styled.p`
    color: ${design.color('dark', 'base')};
    text-align: justify;
`

export const Component = props => (
  <Wrapper id={ props.id }>
    <Title children={ props.text } style={ { color: '#212B35'} }/>
    <Description style={ { color: '#212B35' } }>
      <Paragraph>{ props.children }</Paragraph>
    </Description>
  </Wrapper>
)
