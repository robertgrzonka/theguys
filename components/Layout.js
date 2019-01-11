import Body from '../components/Body'
import Head from 'next/head'
import Footer from '../components/Footer'

export default (props) => (
  <div>
    <Head>
      <title>theGuys || design</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' type='text/css' href='/components/style.css' />
    </Head>
    <script src='http://localhost:8097' />
    <Body>
      {props.children}
      <Footer />
    </Body>
    <style jsx global>{`
    @media (min-width: 1200px) {
      body {
        margin: 3vh 10vw;
      }
    }
    @media (max-width: 1200px) {
      body {
        margin: 5vh 5vw;
      }
    }
    @media (max-width: 900px) {
      body {
        margin: 20px 50px;
      }
    }
    body {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      font-size: 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', 'Color Emoji';
    }
    button {
        margin: 10px;
      }
    p {
      line-height: 1.4;
      font-size: 1rem;
      font-weight: 100;
      letter-spacing: 0.0625;
      text-align: justify;
      overflow-wrap: break-word;
    }
  `}</style>
  </div>
)