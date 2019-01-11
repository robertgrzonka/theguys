import React from 'react'

export default class Title extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <div>
        <h2 onClick={this.handleChange}>
          {this.props.text}
          <span>{this.state.isOpen ? '▼' : '▶︎'}</span>
        </h2>
        <div className='examples'>
          {this.props.children}
        </div>
        <style jsx>{`

    h2 {
      font-variant-caps: all-small-caps;
      color: ${this.state.isOpen
        ? 'rgb(216, 112, 147)'
        : 'rgba(112, 128, 144, 1)'
      };
      padding: 10px 20px;
      margin: 30px 0px;
      font-weight: 200;
      transition: all 0.3s;
    }

    span {
      padding-left: 20px;
      font-variant-caps: 'normal';
    }

    h2:hover {
      cursor: pointer;
      color: ${this.state.isOpen
        ? 'rgba(216, 112, 147, 0.7)'
        : 'rgba(112, 128, 144, 0.7)'
      };
    }

    .examples {
      padding: 10px;
      border: 1px solid slategray;
      border-radius: 5px;
      background-color: whitesmoke;
      display: ${this.state.isOpen ? 'block' : 'none'};
      transition: all 0.4s;
    }
    `}</style>
      </div>
    )
  }
}
