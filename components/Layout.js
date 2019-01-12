import Body from '../components/Body'
import Head from 'next/head'
import Footer from '../components/Footer'

export default (props) => (
  <div>
    <Head>
      <title>theGuys › design</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style>@import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,400,500,600,700&subset=latin-ext');
      </style>
    </Head>
    {/* <script src='http://localhost:8097' /> */}
    {/* react-devtools | development only */}
    <Body>
      {props.children}
      <Footer />
    </Body>
    <style jsx global>{`
    body {
      background-color: rgb(245,245,245);
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      font-size: 14px;
      margin: 10%;
      text-rendering: optimizeLegibility;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', 'Color Emoji';
    }
    button {
        margin: 10px;
      }
    p {
      line-height: 1.4;
      font-weight: 300;
      letter-spacing: 0.0625rem;
      text-align: justify;
      overflow-wrap: break-word;
    }
  `}</style>
  </div>
)
