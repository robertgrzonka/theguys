import Link from 'next/link'
import styled from '@emotion/styled'
import design from '../designsystem/designSystem'

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 10rem 0;
  color: #F9FAFB;
`

const Logo = styled.img`
  min-width: 150px;
  max-width: 15%;
  margin: 0px;
`

const Footer = () => (
  <Wrapper>
    <Logo src='/static/theguysdesign.svg' />
    <p style={{
      fontSize: design.fontSize('s'),
      textAlign: 'center',
      marginBottom: 0
    }}>2018 ©{' '}
      <Link href='https://theguys.design'>
        <a>theGuys by Robert Grzonka</a>
      </Link>
    </p>
  </Wrapper>
)

export default Footer
