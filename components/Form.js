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
  }

  render () {
    return (
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
        <p>
         State value: {this.state.value}
        </p>
        <style jsx>{`
        input {
          padding: 7px 10px;
          margin: 5px;
          border: 1px solid black;
          border-radius: 5px;
          font-size: 0.9rem;
          background-color: white;
          transition: all 0.4s;
        }
        input[type='submit'] {
          cursor: pointer;
          font-weight: 300;
          font-size: 0.9rem;
        }
        input[type='submit']:hover {
          background-color: black;
          color: white;
        }
        `}</style>
      </form>
    )
  }
}

export default Input
