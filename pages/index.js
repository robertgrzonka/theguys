import Layout from '../components/Layout'
import Button from '../components/Button'
import { Blockquote, Quote, Mark, Info } from '../components/Blockquote'
import Input from '../components/Form'
import { Component } from '../components/Component'
import Examples from '../components/Examples'
import Code from '../components/Code'
import styled from '@emotion/styled'
import { Title, Subtitle } from '../components/Header'

const ButtonWrapper = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  align-content: space-around;
  & button {
    width: 30%
  }
`

export default () => (
  <Layout>
    <Component text='Styled headers' id='headers'>
      Default Header has it's styles already defined. To style it css properties should be defined as an object as <Mark>props.css</Mark> and text has to be put between opening and closing tags as follows:
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
      <Quote>Buttons below are wrapped by <Mark>ButtonWrapper</Mark> which tells them to be more wide. In default they've got paddings and are not much bigger.</Quote>
      <Examples>
        <ButtonWrapper>
          <Button>Default</Button>
          <Button color='lightpink'>
          Lightpink
          </Button>
          <Button color='palevioletred'>
          Palevioletred
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button color='Turquoise'>
          Turqoise
          </Button>
          <Button color='royalblue'>
          Royalblue
          </Button>
          <Button color='#EEBC1D'>
          Gold
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button color='Seagreen'>
          Seagreen
          </Button>
          <Button color='crimson'>
          Crimson
          </Button>
          <Button color='darkcyan'>
          Darkcyan
          </Button>
        </ButtonWrapper>
      </Examples>

      <Examples text='Outline buttons'>
        <ButtonWrapper>
          <Button
            className='outline'>
          Default
          </Button>
          <Button
            color='lightpink'
            className='outline'>
          Lightpink
          </Button>
          <Button
            color='palevioletred'
            className='outline'>
          Palevioletred
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            color='turquoise'
            className='outline'>
          Turqoise
          </Button>
          <Button
            color='royalblue'
            className='outline'>
          Royalblue</Button>
          <Button
            color='#EEBC1D'
            className='outline'>
          Gold
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            color='seagreen'
            className='outline'>
          Seagreen
          </Button>
          <Button
            color='crimson'
            className='outline'>
          Crimson
          </Button>
          <Button
            color='darkcyan'
            className='outline'>
          Darkcyan
          </Button>
        </ButtonWrapper>
      </Examples>

      <Examples text='Large and small'>
        <ButtonWrapper>
          <Button className='large'>Large</Button>
          <Button className='outline large'>Outline</Button>
        </ButtonWrapper>
      </Examples>
    </Component>

    <Component text='Cards' id='cards'>
      TODO
    </Component>

    <Component text='Lists' id='lists'>
      TODO
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
    
  const Input = props => 
    <input 
      name='name' 
      placeholder='What is your name?' 
      onChange={this.handleChange}
    />
    
  const Form = props => (
    <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type='text'
              placeholder='What is your name?'
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
          <Header text={ Input.value ? Input.value : 'Hello, Stranger!' } />
    </form>
  )
  
  render(
    <Wrapper>
      <Form />
    </Wrapper>
  )
  `} />
      </Examples>
    </Component>

    <Component text='Blockquotes' id='blockquotes'>
    Lorem ipsum solor domet
      <Examples>
        <Subtitle>› Info/Note</Subtitle>
        Props:
        <ul>
          <li>
            <Mark>header</Mark> defines header
          </li>
          <li>
            <Mark>color</Mark> defines color
          </li>
        </ul>
        <Info header='Info'>
        If not specified, <Mark>props.header</Mark> would be <Mark>Note</Mark> as default.
        </Info>
        <Info header='Note' color='lightblue'>
        If <Mark>props.color</Mark> was specified in <Mark>Info</Mark> component, header would be the same color as left border. But <Mark color='palevioletred'>Marks</Mark> needs to be defined separately.
        </Info>
        <Info header='Warning!' color='crimson'>
          Another note blockquote.
        </Info>
        
        <Subtitle>› Quotes</Subtitle>
        Props:
        <ul>
          <li><Mark>quote</Mark> defines content</li>
          <li><Mark>author</Mark> defines author</li>
        </ul>
        <Quote author='Yennefer z Vengerbergu'>
          Bo w każdym z nas jest Chaos i Ład, Dobro i Zło. Ale nad tym można i trzeba zapanować. Trzeba się tego nauczyć.
        </Quote>
        
        <Subtitle>› Blockquotes</Subtitle>
        Props:
        <ul>
          <li><Mark>title</Mark> defines title</li>
          <li><Mark>color</Mark> defines color</li>
        </ul>
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
