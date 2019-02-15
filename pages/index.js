import Layout from '../components/Layout'
import Button from '../components/Button'
import { Blockquote, Quote, Mark } from '../components/Blockquote'
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
    <Component text='Styled headers' id='headers'>
      Default Header has it's styles already defined. To style it css properties should be defined as an object as <kbd>props.css</kbd> and text has to be put between opening and closing tags as follows:
      <Examples>
        <Code code={
          `
  const Header = props => (
    <div style={{margin: '20px'}}>
      {props.children}
    </div>
  )
  
  const HeaderText = props => (
    <h1 style={{
      fontFamily: 'serif',
      fontSize: '32px',
      fontWeight: '100',
      ...props.style
    }}>
      {props.children}
    </h1>
  )
  render(
    <Header>
      <HeaderText>
        Default header.
      </HeaderText>
      <HeaderText style={{
        textAlign: 'center',
        color: 'mediumturquoise',
        fontWeight: '900'
      }}>
        Bold, centered, turquoise.
      </HeaderText>
      <HeaderText style={{
        textAlign: 'right',
        fontSize: '1.5rem',
        fontStyle: 'oblique'
      }}>
        Right-aligned, smaller, oblique.
      </HeaderText>
    </Header>
  )
  `} />
      </Examples>
    </Component>

    <Component text='Buttons' id='buttons'>
      Lorem ipsum solor domet
      <Examples>
        <ExampleButton>Default</ExampleButton>
        <ExampleButton color='lightpink'>
          Lightpink
        </ExampleButton>
        <ExampleButton color='palevioletred'>
          Palevioletred
        </ExampleButton>
        <ExampleButton color='mediumturquoise'>
          Mediumturqoise
        </ExampleButton>
        <ExampleButton color='royalblue'>
          Royalblue
        </ExampleButton>
        <ExampleButton color='#EEBC1D'>
          Gold
        </ExampleButton>
        <ExampleButton color='lightseagreen'>
          Lightseagreen
        </ExampleButton>
        <ExampleButton color='crimson'>
          Crimson
        </ExampleButton>
        <ExampleButton color='darkcyan'>
          Darkcyan
        </ExampleButton>
      </Examples>

      <Examples text='Outline buttons'>
        <ExampleButton
          className='outline'>
          Default
        </ExampleButton>
        <ExampleButton
          color='lightpink'
          className='outline'>
          Lightpink
        </ExampleButton>
        <ExampleButton
          color='palevioletred'
          className='outline'>
          Palevioletred
        </ExampleButton>
        <ExampleButton
          color={'mediumturquoise'}
          className='outline'>
          Mediumturqoise
        </ExampleButton>
        <ExampleButton
          color='royalblue'
          className='outline'>
          Royalblue</ExampleButton>
        <ExampleButton
          color='#EEBC1D'
          className='outline'>
          Gold
        </ExampleButton>
        <ExampleButton
          color='lightseagreen'
          className='outline'>
          Lightseagreen
        </ExampleButton>
        <ExampleButton
          color='crimson'
          className='outline'>
          Crimson
        </ExampleButton>
        <ExampleButton
          color='darkcyan'
          className='outline'>
          Darkcyan
        </ExampleButton>
      </Examples>

      <Examples text='Large and small'>
        <ExampleButton className='large'>Large</ExampleButton>
        <ExampleButton className='outline large'>Outline</ExampleButton>
      </Examples>
    </Component>

    <Component text='Cards' id='cards'>
      Lorem ipsum solor domet
    </Component>

    <Component text='Code' id='code'>
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

    <Component text='Blockquotes' id='blockquotes'>
    Lorem ipsum solor domet
      <Examples>
        <Quote>
       Simply testing <Mark>Quotes</Mark> and <Mark>Marks</Mark>.
        </Quote>
        <Quote color='turquoise'>
        Simply testing <Mark color='turquoise'>Quotes</Mark> and <Mark color='turquoise'>Marks</Mark>.
        </Quote>
        <Blockquote title='Styling Components'>
          This is default Blockquote.
        </Blockquote>
        <Blockquote title='Lorem Ipsum' color='lightpink'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
        </Blockquote>
        <Blockquote title='Lorem Ipsum' color='mediumturquoise'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
        </Blockquote>
        <Blockquote title='Lorem Ipsum' color='slateblue'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
        </Blockquote>
        <Blockquote title='Lorem Ipsum' color='slategray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
        </Blockquote>
        <Blockquote title='Lorem Ipsum' color='crimson'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
        </Blockquote>
      </Examples>
    </Component>

    <Component text='Forms' id='forms'>
    Lorem ipsum solor domet.
      <Examples>
        <Input name='Input' />
      </Examples>
    </Component>
  </Layout>
)
