import Layout from '../components/Layout'
import StyledHeader from '../components/StyledHeader'
import Button from '../components/Button'
import Blockquote from '../components/Blockquote'
import Code from '../components/Code'
import Separator from '../components/Separator'
import Input from '../components/Form'
import Component from '../components/Component'

const Example = () => <StyledHeader
  text='Examples:'
  fontSize='1rem'
  fontWeight='100'
  color='slategray'
  borderLeft='5px solid slategray'
  padding='10px 15px'
  backgroundColor='whitesmoke'
/>

export default () => (
  <Layout>

    <StyledHeader
      text='theGuys.design'
      fontFamily='"Cormorant Garamond", serif'
      textAlign='center'
      fontSize='3.5rem'
      fontWeight='100'
      color='black'
      margin='10vh 0 0 0'
    />

    <StyledHeader
      text='mini UI React library'
      fontVariantCaps='all-small-caps'
      textAlign='center'
      fontWeight='100'
      color='rgba(0,0,0,1)'
      margin='0 0 20vh 0'
    />

    <Component text='StyledHeaders'>
      <Blockquote boxShadow='none'>
        StyledHeaders can by styled with <strong>any</strong> CSS value written with specific JS look-a-like <strong>camelCase</strong> (e.g.{' '}
        <Code>fontWeight</Code> or <Code>textAlign</Code> etc.).
      </Blockquote>

      <Example />
      <StyledHeader text={'This header is default.'} />
      <StyledHeader
        fontWeight='500'
        color='blue'
        text='This one is bolder and blue.'
      />
      <StyledHeader
        fontSize='1.1rem'
        textAlign='right'
        text='This one is smaller and aligned to right.'
      />
    </Component>

    <Component text='Buttons'>
      <Example />
      <Button>Default</Button>
      <Button color={'lightpink'}>Lightpink</Button>
      <Button color={'palevioletred'}>Palevioletred</Button>
      <Button color={'royalblue'}>Royalblue</Button>
      <Button color={'#EEBC1D'}>Gold</Button>
      <Button color={'lightseagreen'}>Lightseagreen</Button>
      <Button color={'crimson'}>Crimson</Button>
      <Button color={'darkcyan'}>Darkcyan</Button>

      <Separator />
      <StyledHeader text='Outline buttons:' fontSize='1em' />
      <Button outline>Default</Button>
      <Button color='lightpink' outline>
    Lightpink
      </Button>
      <Button color='palevioletred' outline>
    Palevioletred
      </Button>
      <Button color='royalblue' outline>
    Royalblue
      </Button>
      <Button color='#EEBC1D' outline>
    Gold
      </Button>
      <Button color='lightseagreen' outline>
    Lightseagreen
      </Button>
      <Button color='crimson' outline>
    Crimson
      </Button>
      <Button color='darkcyan' outline>
    Darkcyan
      </Button>
    </Component>

    <Component text='Cards'>
      <p>Nothing's here for now.</p>
    </Component>

    <Component text='Blockquotes'>
      <Example />
      <Blockquote
        header='Lorem Ipsum'
        msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
        color='lightpink'
      />
      <Blockquote
        header='Lorem Ipsum'
        msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
        color='palevioletred'
      />
      <Blockquote
        header='Lorem Ipsum'
        msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
        color='royalblue'
      />
      <Blockquote
        header='Lorem Ipsum'
        msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
        color='lightseagreen'
      />
      <Blockquote
        header='Lorem Ipsum'
        msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
        color='#EEBC1D'
      />
      <Blockquote
        header='Lorem Ipsum'
        msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque.'
        color='darkcyan'
      />
    </Component>

    <Component text='Forms'>
      <Example />
      <Input name='Input' />
    </Component>

  </Layout>
)
