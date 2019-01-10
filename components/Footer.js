import Link from 'next/link'

const Footer = () => (
  <div style={{ margin: '150px 0 50px 0', textAlign: 'center' }}>
    <img src='/static/theguysdesign.svg' style={{ maxWidth: 150, marginBottom: 0 }} />
    <p style={{ textAlign: 'center', fontVariantCaps: 'all-petite-caps', marginBottom: 0 }}>2018 ©{' '}
      <Link href='https://theguys.design'>
        <a>theGuys by Robert Grzonka</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: palevioletred;
          transition: 0.3s color;
        }
        a:hover {
          color: deeppink;
        }
        `}</style>
    </p>
  </div>
)

export default Footer
