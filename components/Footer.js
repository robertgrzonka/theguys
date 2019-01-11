import Link from 'next/link'

const Footer = () => (
  <div style={{ margin: '7% 0 7% 0', textAlign: 'center' }}>
    <img src='/static/theguysdesign.svg' style={{ minWidth: '10%', maxWidth: '15%', marginBottom: 0 }} />
    <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: 0 }}>2018 ©{' '}
      <Link href='https://theguys.design'>
        <a>theGuys by Robert Grzonka</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: palevioletred;
          transition: 0.4s color;
        }
        a:hover {
          color: 'rgba(216, 112, 147, 0.7)';
        }
        `}</style>
    </p>
  </div>
)

export default Footer
