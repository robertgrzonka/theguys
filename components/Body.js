const Body = (props) => (
  <div className='wrapper'>
    <div style={props.css}>
      {props.children}
    </div>
    <style jsx>{`
      div.wrapper {
        display: flex;
        width: 100%;
        justify-content: center;
      }
      `}</style>
  </div>
)

export default Body
