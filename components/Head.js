import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>development environment</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' type='text/css' href='/components/style.css' />
    </Head>
    <script src='http://localhost:8097' />
  </div>
)
