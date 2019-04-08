import React from 'react'
import styled from '@emotion/styled'


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
    const Wrapper = styled.div`
      max-width: 100vw;
      margin: 0 auto;
    `

    const ExamplesDiv = styled.div`
      padding: 1rem;
      border-radius: 0.35rem;
      border: 1px solid rgba(0,0,0,0.2);
      background-color: rgb(255,255,255);
      box-shadow: 0 0 5px rgba(0,0,0,0.2);
      display: ${this.state.isOpen ? 'block' : 'none'};
      @media (max-width: 950px) {
        padding: 15px;
      }
    `

    const Header = styled.h4`
      color: ${this.state.isOpen ? 'rgb(220,20,60)': 'rgba(112, 128, 144, 1)'};
      padding: 20px;
      font-weight: 300;
      transition: all 0.4s;
      &:hover {
        cursor: pointer;
        color: ${this.state.isOpen ? 'rgba(220,20,60, 0.5)' : 'rgba(112, 128, 144, 0.5)'};
      }
    `
    return (
      <Wrapper>
        <Header onClick={this.handleChange}>
          {this.props.text || 'Examples'}{' '}{this.state.isOpen ? '▼' : '▶︎'}
        </Header>
        <ExamplesDiv>
          {this.props.children}
        </ExamplesDiv>
      </Wrapper>
    )
  }
}
