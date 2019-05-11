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
      padding: 1.5rem;
      margin: 2rem 0;
      border-radius: 0.35rem;
      border: 1px solid rgb(249, 250, 251);
      background-color: rgb(249, 250, 251);
      box-shadow: 0 1px 3px rgba(69, 79, 91, 0.5);
      display: ${this.state.isOpen ? 'block' : 'none'};
      transition: all 0.4s ease;
      @media (max-width: 950px) {
        padding: 15px;
      }
    `

    const Header = styled.p`
      color: ${this.state.isOpen ? 'rgb(220,20,60)' : 'rgb(69, 79, 91)'};
      font-weight: 300;
      padding-top: 20px;
      transition: all 0.4s ease;
      &:hover {
        cursor: pointer;
        color: ${this.state.isOpen ? 'rgba(220,20,60, 0.5)' : 'rgba(69, 79, 91, 0.7)'};
      }
    `
    return (
      <Wrapper>
        {/* <Header onClick={this.handleChange}>
          {this.props.text || 'Examples'}{' '}<small>{this.state.isOpen ? '▼' : '▶︎'}</small>
        </Header> */}
        <ExamplesDiv>
          {this.props.children}
        </ExamplesDiv>
      </Wrapper>
    )
  }
}
