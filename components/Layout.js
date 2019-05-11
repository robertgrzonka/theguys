import Body from '../components/Body'
import Head from 'next/head'
import { Title, Subtitle } from '../components/Header'
import Footer from '../components/Footer'
import { NavigationTest } from './Navigation'
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
      <Title style={{ marginBottom: 0 }}>
        theGuys › Design
      </Title>
      <Subtitle style={{marginTop: 10 }}>
        React Components mini–library
      </Subtitle>
    </MainHeader>
    <hr/>
    <Body>
      <NavigationTest />
      { props.children }
      <Footer />
    </Body>
    <style jsx global>{ `
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
      max-width: 100vw;
      overflow-x: hidden;
      text-rendering: ${design.get('type.textRendering')};
      background-color: ${design.color('dark', 'base')};
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
      font-family: ${design.get('type.fontFamily.sans')};
      transition: all 0.4s ease;
    }

    a:hover, a:visited {
      color: ${design.color('primary', 'light')};
      transition: all 0.4s ease;
    }

    hr {
      margin-top: 150px;
      opacity: 0.2;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    
    .ReactModal__Overlay {
      opacity: 0;
      transition: all 0.4s ease;
    }

    .ReactModal__Overlay--after-open{
      opacity: 1;
    }
    
    .ReactModal__Overlay--before-close{
      opacity: 0;
      transition: all 0.4s ease;
    }
    
    .blockquotes {
      padding: 30px 0px 10px 0px;
      border-bottom: 1px solid rgba(33, 43, 53, 0.3);
    }
  `}</style>
  </div>
)
