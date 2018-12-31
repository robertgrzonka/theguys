const StyledHeader = ({ fontWeight, color, fontSize, children }) => (
  <p style={{ fontWeight, color, fontSize }}>
    {children}
    <style jsx>{`
    p {
      font-weight: 100;
      color: #404040;
      font-size: 28px;
      padding-bottom: 10px;
      }
  `}</style>
  </p>
)

export default StyledHeader
