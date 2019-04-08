import React from 'react'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      placeholder: 'Hi! What is your name?',
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({
      placeholder: '',
      value: event.target.value
    })
  }
  handleSubmit (event) {
    this.props.submit = this.state.value
    event.preventDefault()
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type='text'
              placeholder={this.state.placeholder}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <p><strong>State value: </strong>{this.state.value ? `Hello, ${this.state.value}` : 'Hello, Stranger'}</p>
        <style jsx>{`
        form {
          display: flex;
          justify-content: baseline;
          align-items: center;
          margin: 20px;
          }
        input {
          padding: 10px;
          border: 1px solid slategray;
          border-radius: 3px;
          background-color: white;
          transition: all 0.4s;
          font-size: 1rem;
        }
        input:focus {
          box-shadow: 0px 0px 3px #212B35;
        }
        input[type='submit'] {
          cursor: pointer;
          font-weight: 300;
          font-size: 1rem;
          margin-left: 20px;
        }
        input[type='submit']:hover {
          background-color: #212B35;
          color: white;
        }
        p {
          padding: 20px;
          margin: 5px;
          font-size: 1rem;
        }
        span {
          font-weight: 600;
        }
        `}</style>
      </div>
    )
  }
}

export default Input
