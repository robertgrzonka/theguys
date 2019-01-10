import StyledHeader from './StyledHeader'

const Hr = () => <hr style={{ border: '0.05em solid rgba(0,0,0,0.1)', margin: '20px 0 50px 0' }} />

const Component = props => (
  <div>
    <div className='component-wrapper'>
      <StyledHeader
        text={props.text}
        fontSize={'2em'}
      />
      <Hr />
      {props.children}
    </div>
    <style jsx>{`
    @media (min-width: 1200px) {
    .component-wrapper {
          margin: 100px 15%;
          padding: 100px;
          border-radius: 5px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
      }
    }

      @media (max-width: 1200px) {
        .component-wrapper {
          margin: 20px 10%;
          padding: 50px;
          border-radius: 5px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        }

      @media (max-width: 900px) {
        .component-wrapper {
          margin: 10px 0;
          padding: 10px 0;
          border: 0;
          box-shadow: none;
        }
      }
    `}</style>
  </div>
)

export default Component
