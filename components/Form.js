import React from 'react'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      placeholder: 'Write something here.',
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
  handleSubmit (eventSubmit) {
    eventSubmit.preventDefault()
    this.setState({
      value: ''
    })
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
          <input type='submit' value='Submit' onSubmit={this.handleSubmit} />
        </form>
        <p><span>State value:</span>{' '}{this.state.value}</p>
        <style jsx>{`
        form {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px;
          }
        input {
          padding: 10px;
          border: 1px solid slategray;
          border-radius: 5px;
          background-color: white;
          transition: all 0.4s;
          font-size: 1rem;
        }
        input[type='submit'] {
          cursor: pointer;
          font-weight: 300;
          font-size: 1rem;
        }
        input[type='submit']:hover {
          background-color: black;
          color: white;
        }
        p {
          padding: 20px;
          margin: 5px;
          font-size: 1rem;
        }
        span {
          font-weight: 400;
        }
        `}</style>
      </div>
    )
  }
}

export default Input
