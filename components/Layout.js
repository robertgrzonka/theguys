import Body from '../components/Body'
import Head from 'next/head'
import { Title, Subtitle } from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import design from '../designsystem/designSystem'
import styled from '@emotion/styled'

const MainHeader = styled.div`
  padding: 10rem 0 0 0;
  margin: 0 auto;
  text-align: center;
  width: 100%;
`

export default (props) => (
  <div>
    <Head>
      <title>theGuys › design</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href='https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,400,500,600,700&subset=latin-ext' rel='stylesheet' />
    </Head>
    <MainHeader>
      <Title>
          theGuys › Design
      </Title>
      <Subtitle>
          React Components mini–library
      </Subtitle>
    </MainHeader>
    <Body>
      <Sidebar />
      {props.children}
      <Footer />
    </Body>
    <style jsx global>{`
    * {
      box-sizing: border-box;
    }

    body {
      display: flex,
      flex-direction: row;
      justify-content: baseline;
      align-items: stretch;
      align-content: stretch;
      margin: 0 auto;
      max-width: 100%;
      text-rendering: ${design.get('type.textRendering')};
      background: url('static/background.svg');
      background-size: cover;
      background-repeat: no-repeat;
    }

    h1, h2, h3 {
      font-weight: ${design.get('type.fontWeight.headings')};
      line-height: ${design.get('type.lineHeight.headings')};
      font-family: ${design.get('type.fontFamily.serif')};
    }

    h1 {
      font-size: ${design.fontSize('xxl')};
    }

    h2 {
      font-size: ${design.fontSize('xl')};
    }

    h3 {
      font-size: ${design.fontSize('l')};
    }

    h4 {
      font-size: ${design.fontSize('m')};
      font-weight: ${design.get('type.fontWeight.medium')};
    }

    h1, h2, h3, h4, h5, h6  {
      letter-spacing: ${design.get('type.letterSpacing.small')};
    }

    h2, h3, h4, h5, h6 {
      font-family: ${design.get('type.fontFamily.sans')};
    }

    p {
      font-size: ${design.get('type.fontSize.base')};
      font-family: ${design.get('type.fontFamily.sans')};
      line-height: ${design.get('type.lineHeight.paragraph')};
      font-weight: ${design.get('type.fontWeight.normal')};
      letter-spacing: ${design.get('type.letterSpacing.normal')};
    }

    a:link, a:active {
      text-decoration: none;
      cursor: pointer;
      color: ${design.color('primary', 'dark')};
      font-weight: ${design.get('type.fontWeight.normal')};
      transition: all 0.3s ease;
      font-family: ${design.get('type.fontFamily.sans')};
    }

    a:hover, a:visited {
      color: ${design.color('primary', 'light')};
      transition: all 0.3s ease;
    }
  `}</style>
  </div>
)
