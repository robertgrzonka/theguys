const Code = (props) => (
  <div>
    <div>
      {props.children}
    </div>
    <style jsx>{`
        div {
          font-family: Menlo, monospace;
          font-size: 0.8rem;
          font-weight: 100;
          background-color: rgb(0,0,0);
          margin: 10px 20px;
          color: white;
          border-radius: 10px;
          padding: 10px;
          line-height: 1.6;
          box-shadow: 0px 0px 15px rgba(0,0,0, 0.85);
        }
      `}</style>
  </div>
)

export default Code
