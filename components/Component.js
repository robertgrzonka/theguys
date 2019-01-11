import StyledHeader from './StyledHeader'

const Component = props => (
  <div className='component-wrapper'>
    <div>
      <StyledHeader
        text={props.text}
      />
      <p>{props.p}</p>
      <div>
        {props.children}
      </div>
    </div>
    <style jsx>{`
    @media (min-width: 1200px) {
    .component-wrapper {
          margin: 5% 15%;
          padding: 10%;
          border-radius: 5px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
      }
    }

      @media (max-width: 1200px) {
        .component-wrapper {
          margin: 3% 10%;
          padding: 10%;
          border-radius: 5px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        }

      @media (max-width: 900px) {
        .component-wrapper {
          margin: 5%;
          padding: 5%;
          border: 0;
          box-shadow: none;
        }
      }
    `}</style>
  </div>
)

export default Component
