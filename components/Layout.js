import Body from '../components/Body'
import Head from 'next/head'
import { Title, Subtitle } from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import design from '../designsystem/designSystem'
<<<<<<< HEAD
import styled from '@emotion/styled'

const MainHeader = styled.div`
  padding: 10rem 0 0 0;
  margin: 0 auto;
  text-align: center;
  width: 100%;
`
=======
>>>>>>> b6a6812463966130f1ec241e8c43cd3ae9a35291

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
<<<<<<< HEAD
    </MainHeader>
=======
    </div>
>>>>>>> b6a6812463966130f1ec241e8c43cd3ae9a35291
    <Body>
      <Sidebar />
      {props.children}
      <Footer />
    </Body>
    <style jsx global>{`
    *, body, html {
      box-sizing: border-box;
    }

    *:hover {
      transition: all 0.3s linear;
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
      font-family: ${design.get('type.fontFamily.sans')};
      background: url('static/background.svg');
      background-size: cover;
      background-repeat: no-repeat;
    }

    h1, h2, h3 {
      font-weight: ${design.get('type.fontWeight.headings')};
      line-height: ${design.get('type.lineHeight.headings')};
    }

    h1 {
      font-size: ${design.fontSize('xxl')};
      font-family: ${design.get('type.fontFamily.serif')};
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

    h1, h2, h3, h4, h5, h6 {
      letter-spacing: ${design.get('type.letterSpacing.small')};
    }

    h2, h3, h4, h5, h6 {
      font-family: ${design.get('type.fontFamily.sans')};
    }

    p {
      font-family: ${design.get('type.fontFamily.sans')};
      line-height: ${design.get('type.lineHeight.paragraph')};
      font-weight: ${design.get('type.fontWeight.normal')};
      letter-spacing: ${design.get('type.letterSpacing.large')};
    }

    a:link, a:active {
      text-decoration: none;
      cursor: pointer;
      color: ${design.color('link', 'base')};
      font-weight: ${design.get('type.fontWeight.bold')};
      transition: all 0.3s linear;
    }

    a:hover, a:visited {
      color: ${design.color('link', 'over')};
      transition: all 0.3s linear;
    }
  `}</style>
  </div>
)
