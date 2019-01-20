import Layout from '../components/Layout'
import Button from '../components/Button'
import Blockquote from '../components/Blockquote'
import Input from '../components/Form'
import { Component } from '../components/Component'
import Examples from '../components/Examples'
import Code from '../components/Code'
import styled from '@emotion/styled'

const ExampleButton = styled(Button)`
  margin: 10px;
`

export default () => (
  <Layout>
    <Component text='Styled headers'>
      Default Header has it's styles already defined. To style it css properties should be defined as an object as <kbd>props.css</kbd> and text has to be put between opening and closing tags as follows:
      <Examples>
        <Code code={`
  const Header = props => (
    <h1 style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '3rem',
      margin: '20px',
      fontWeight: '500',
      letterSpacing: '0.1rem',
      ...props.style
    }}>
      {props.children}
    </h1>
  )

  render(
    <div>
      <Header>
        Default header.
      </Header>
      <Header style={{
        textAlign: 'center',
        color: 'royalblue',
        fontWeight: '900'
      }}>
        Bold, centered, blue.
      </Header>
      <Header style={{
        textAlign: 'right',
        fontSize: '1.5rem',
        fontStyle: 'oblique'
      }}>
        Right-aligned, smaller, oblique.
      </Header>
    </div>
  )
        
        `} />
      </Examples>
    </Component>

    <Component text='Buttons'>
      Lorem ipsum solor domet
      <Examples>
        <ExampleButton>Default</ExampleButton>
        <ExampleButton color={'lightpink'}>Lightpink</ExampleButton>
        <ExampleButton color={'palevioletred'}>Palevioletred</ExampleButton>
        <ExampleButton color={'royalblue'}>Royalblue</ExampleButton>
        <ExampleButton color={'#EEBC1D'}>Gold</ExampleButton>
        <ExampleButton color={'lightseagreen'}>Lightseagreen</ExampleButton>
        <ExampleButton color={'crimson'}>Crimson</ExampleButton>
        <ExampleButton color={'darkcyan'}>Darkcyan</ExampleButton>
      </Examples>

      <Examples text='Outline buttons'>
        <ExampleButton outline>Default</ExampleButton>
        <ExampleButton color='lightpink' outline>Lightpink</ExampleButton>
        <ExampleButton color='palevioletred' outline>Palevioletred</ExampleButton>
        <ExampleButton color='royalblue' outline>Royalblue</ExampleButton>
        <ExampleButton color='#EEBC1D' outline>Gold</ExampleButton>
        <ExampleButton color='lightseagreen' outline>Lightseagreen</ExampleButton>
        <ExampleButton color='crimson' outline>Crimson</ExampleButton>
        <ExampleButton color='darkcyan' outline>Darkcyan</ExampleButton>
      </Examples>

      <Examples text='Large and small'>
        <ExampleButton large>Large</ExampleButton>
        <ExampleButton large outline>Outline</ExampleButton>
      </Examples>
    </Component>

    <Component text='Cards'>
      Lorem ipsum solor domet
    </Component>

    <Component text='Code'>
      Thanks to{' '}<a href='https://github.com/FormidableLabs/react-live'>React Live</a>.
      <Examples>
        <Code code={`
  const Wrapper = (props) => (
    <div style={{
        backgroundColor: 'palevioletred',
        textAlign: 'center',
        verticalAlign: 'top',
        height: '100%', 
        color: 'white'
     }}>
      {props.children}
    </div>
  )

  const Header = props => 
    <h1 style={{marginTop: 0, paddingTop: 30}}>
       {props.text}
    </h1>
  
  render(
    <Wrapper>
      <Header text='Hello, stranger'/>
    </Wrapper>
  )
  `} />
      </Examples>
    </Component>

    <Component text='Blockquotes'>
    Lorem ipsum solor domet
      <Examples>
        <Blockquote
          title='Styling Components'
          msg='This is default Blockquote.'
        />
        <Blockquote
          title='Lorem Ipsum'
          msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
          color='lightpink'
        />
        <Blockquote
          title='Lorem Ipsum'
          msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
          color='palevioletred'
        />
        <Blockquote
          title='Lorem Ipsum'
          msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
          color='royalblue'
        />
        <Blockquote
          title='Lorem Ipsum'
          msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
          color='lightseagreen'
        />
        <Blockquote
          title='Lorem Ipsum'
          msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
          color='#EEBC1D'
        />
        <Blockquote
          title='Lorem Ipsum'
          msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
          color='darkcyan'
        />
      </Examples>
    </Component>

    <Component text='Forms'>
    Lorem ipsum solor domet.
      <Examples>
        <Input name='Input' />
      </Examples>
    </Component>
  </Layout>
)
