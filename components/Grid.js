const Grid = (props) => (
  <div className='container'>
    {props.children}
    <div className='row'>
      {props.children}
      {props.col}
      <div className={this.props.col}>
        {props.children}
      </div>
    </div>
  </div>
)

export default Grid
