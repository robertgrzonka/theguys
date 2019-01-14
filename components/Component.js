import Header from './Header'

const Component = props => (
  <div className='component-wrapper'>
    <div>
      <Header
        text={props.text}
      />
      <p>{props.p}</p>
      <div>
        {props.children}
      </div>
    </div>
    <style jsx>{`
      p {
        font-size: 1rem;
      }
    @media (min-width: 1350px) {
    .component-wrapper {
          padding: 10% 20%;
          margin-bottom: 5%;
          border: 1px 0px 5px 0px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
          background-color: rgba(250,250,250,1);
      }
    }

      @media (max-width: 1350px) {
        .component-wrapper {
          padding: 15%;
          margin-bottom: 3%;
          border: 1px 0px 5px 0px solid rgba(230,230,230,1);
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        }

      @media (max-width: 900px) {
        .component-wrapper {
          margin: 50px;
          padding: 5%;
          border: 0;
          box-shadow: none;
        }
      }
    `}</style>
  </div>
)

export default Component
