import React from 'react'

export default class Image extends React.Component {
  render () {
    return (
      <div style={this.props.style}>
        <img src={this.props.src} style={this.props.svgStyle} />
      </div>
    )
  }
}
