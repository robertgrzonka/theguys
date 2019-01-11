import Link from 'next/link'

const wrapperStyles = {
  margin: '7% 0 7% 0',
  textAlign: 'center'
}

const imgStyles = {
  minWidth: '150px',
  maxWidth: '15%',
  marginBottom: 0
}

const pStyles = {
  fontSize: '0.9rem',
  textAlign: 'center',
  marginBottom: 0
}

const Footer = () => (
  <div style={wrapperStyles}>
    <img src='/static/theguysdesign.svg' style={imgStyles} />
    <p style={pStyles}>2018 ©{' '}
      <Link href='https://theguys.design'>
        <a>theGuys by Robert Grzonka</a>
      </Link>
      <style jsx>{`
        a:link, a:visited {
          text-decoration: none;
          color: rgba(216, 112, 147, 0.7);
          transition: 0.4s color;
        }
        a:hover {
          color: palevioletred;
        }
        a:active {
          color: deeppink;
        }
        `}</style>
    </p>
  </div>
)

export default Footer
