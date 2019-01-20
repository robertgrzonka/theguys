import React from 'react'

export default class Examples extends React.Component {
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
      <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        <h4 onClick={this.handleChange}>
          {this.props.text || 'Examples'}{' '}{this.state.isOpen ? '▼' : '▶︎'}
        </h4>
        <div className='examples'>
          {this.props.children}
        </div>
        <style jsx>{`

    .examples {
      padding: 2rem;
      border-radius: 0.35rem;
      border: 1px solid rgba(0,0,0,0.1);
      background-color: rgb(255,255,255);
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
      display: ${this.state.isOpen ? 'block' : 'none'};
    }

    @media (max-width: 900px) {
      .examples {
        padding: 10px;
      }
    }
    h4 {
      color: 
      ${this.state.isOpen
        ? 'rgb(220,20,60)'
        : 'rgba(112, 128, 144, 1)'
      };
      padding: 20px;
      font-weight: 300;
      transition: all 0.4s;
    }

    h4:hover {
      cursor: pointer;
      color: 
      ${this.state.isOpen
        ? 'rgba(220,20,60, 0.7)'
        : 'rgba(112, 128, 144, 0.7)'
      };
    }

    `}</style>
      </div>
    )
  }
}
