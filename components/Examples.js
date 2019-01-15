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
        ? 'rgb(237, 20, 61)'
        : 'rgba(112, 128, 144, 1)'
      };
      padding: 10px 20px;
      margin: 30px 0px;
      font-weight: 300;
      transition: all 0.4s;
    }

    span {
      padding-left: 20px;
      font-variant-caps: 'normal';
    }

    h2:hover {
      cursor: pointer;
      color: ${this.state.isOpen
        ? 'rgba(237, 20, 61, 0.7)'
        : 'rgba(112, 128, 144, 0.7)'
      };
    }

    .examples {
      padding: 50px;
      border-radius: 5px;
      border: 1px solid rgba(0,0,0,0.1);
      background-color: rgb(255,255,255);
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
      display: ${this.state.isOpen ? 'block' : 'none'};
    }

    @media (max-width: 900px) {
      .examples {
        padding: 20px;
        margin: 0;
        background-color: rgb(245,245,245);
      }
    }

    `}</style>
      </div>
    )
  }
}
