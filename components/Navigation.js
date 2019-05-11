import Link from 'next/link'
import design from '../designsystem/designSystem'
import styled from '@emotion/styled'
import Button from './Button'
import Modal from 'react-modal'
import React from 'react'

const Logo = styled.h3`
  margin-left: 100px;
  color: ${design.color('bright', 'dark')};
  font-family: ${design.get('type.fontFamily.serif')};
`

const ModalList = styled.ul`
  list-style-type: none;
  display: grid;
  margin: 0 auto;
  padding: 0;
`

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  max-height: 75px;
  top: 0;
  left: 0;
  background: rgba(33, 43, 53, 0.95);
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
  z-index: 100;
  transition: all 0.4s ease;
  &:hover {
    background: ${design.color('dark','base')};
  }
`

const modalStyle = {
  padding: '10px 30px',
  marginRight: '50px',
  width: '150px'
}

const LinkStyles = styled.li`
      text-decoration: none;
      cursor: pointer;
      color: ${design.color('primary', 'dark')};
      font-family: ${design.get('type.fontFamily.sans')};
      margin: 20px 10px;
      transition: all 0.4s ease;
      &:hover {
        color: ${design.color('primary', 'light')};
        transition: all 0.4s ease;
      }
`

const ListItem = props => (
  <Link href={ props.href }>
    <LinkStyles { ...props }>{ props.text }</LinkStyles>
  </Link>
)

const ListItems = [
  'Headers', 'Buttons', 'Cards', 'Lists', 'Code', 'Blockquotes', 'Forms'
]

export class NavigationTest extends React.Component {
  constructor () {
    super()
    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal () {
    this.setState({
      showModal: true
    })
  }

  handleCloseModal () {
    this.setState({
      showModal: false
    })
  }

  render () {
    const showModal = this.state.showModal
    let button
    { showModal ? (
      button = <Button onClick={ this.handleCloseModal } color={ 'palevioletred' } style={ modalStyle }>Close menu</Button>
    ): (
      button = <Button onClick={ this.handleOpenModal } style={ modalStyle } color={ 'rgb(249, 250, 251)' } darkText>Open menu</Button>
      )
    }
    

    const NavigationLinks = () => ListItems.map(item => {
      return <ListItem
        text={ item }
        href={ '#' + item.toLowerCase() }
        key={ ListItems.findIndex(item => item) }
        onClick={ this.handleCloseModal }
      />
    })

    return (
      <Wrapper>
        <Logo>theGuys › design</Logo>
          {button}
        <Modal
          isOpen={showModal}
          contentLabel='Modal'
          shouldCloseOnOverlayClick={ true }
          onRequestClose={this.handleCloseModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(69, 79, 91, 0.9)',
            },
            content: {
              backgroundColor: 'rgb(249, 250, 251)',
              top: '90px',
              right: '50px',
              left: 'auto',
              bottom: 'auto',
              textAlign: 'center'
            }
          }}
        >
          <ModalList>
            <NavigationLinks/>
          </ModalList>
        </Modal>
      </Wrapper>
    )
  }
}
