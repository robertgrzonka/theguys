import { Title } from './Header'

export const Description = (props) => (
  <p style={{
    fontSize: '1.1rem',
    padding: 20,
    ...props.style
  }}>
    {props.children}
  </p>
)

export const Component = props => (
  <div className='component-wrapper'>
    <div>
      <Title children={props.text} />
      <Description children={props.children}>
        {props.children}
      </Description>
    </div>
    <style jsx>{`
    .component-wrapper {
      background-color: rgba(250,250,250,1);
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
    @media (min-width: 1350px) {
      .component-wrapper {
        padding: 10%;
        margin-top: 5%;
        border: 1px 0px 5px 0px solid rgba(0, 0, 0, 0.1);
      }
    }
    @media (max-width: 1350px) {
      .component-wrapper {
        padding: 50px;
        margin-top: 3%;
        border: 2px 0px 10px 0px solid rgba(230,230,230,1);
      }
    }
    @media (max-width: 900px) {
      .component-wrapper {
        margin: 50px;
        padding: 0;
        border: 0;
        box-shadow: none;
        background-color: inherit;
      }
    }
  `}</style>
  </div>
)
