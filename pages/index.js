import Body from '../components/Body'
import StyledHeader from '../components/StyledHeader'
import Head from '../components/Head'
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
  <Body>

    <StyledHeader
      text={'theGuys.design'}
      fontFamily={'"Playfair Display", "Cormorant Garamond", "Times", serif'}
      textAlign={'center'}
      fontSize={'3.5rem'}
      fontWeight={100}
      color={'darkcyan'}
      margin={'20vh 0 0 0'}
      lineHeight={'50px'}
    />

    <StyledHeader
      text={'mini UI React library'}
      margin={'0 0 20vh 0'}
      fontVariantCaps={'all-small-caps'}
      textAlign={'center'}
      fontSize={'2rem'}
      fontWeight={100}
      color={'rgba(0,0,0,1)'}
    />

    <Head />

    <Component text='StyledHeaders'>

      <Blockquote boxShadow='none'>
        StyledHeaders can by styled with <strong>any</strong> CSS value written with specific JS look-a-like <strong>camelCase</strong> (e.g. <Code>fontWeight</Code>). In examples below we set margin and padding to 10px with <Code>props.margin</Code> and <Code>props.padding</Code>.
      </Blockquote>

      <Example />
      <StyledHeader text={'This header is default.'} />
      <StyledHeader fontWeight='500' color='blue' text='This one is bolder and blue.' />
      <StyledHeader fontSize='1.1rem' textAlign='right' text={'This one is smaller and aligned to right.'} />
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
      <StyledHeader text='Outline buttons:' fontSize={'1em'} />
      <Button outline>Default</Button>
      <Button color={'lightpink'} outline>Lightpink</Button>
      <Button color={'palevioletred'} outline>Palevioletred</Button>
      <Button color={'royalblue'} outline>Royalblue</Button>
    <Button color={'#EEBC1D'} outline>Gold</Button>
      <Button color={'lightseagreen'} outline>Lightseagreen</Button>
      <Button color={'crimson'} outline>Crimson</Button>
      <Button color={'darkcyan'} outline>Darkcyan</Button>
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

    <style jsx global>{`
    @media (min-width: 750px) {
      body {
        margin: 5vh 15vw;
        }
      button {
        margin: 10px;
      }
    }
    @media (max-width: 750px) {
      body {
        margin: 20px 50px;
      }
    }
    body {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
        Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Color Emoji";
    }
        p {
          line-height: 1.45;
          font-size: 1rem;
          letter-spacing: 0.0625rem;
          text-align: justify;
          overflow-wrap: break-word;
        }
        `}
    </style>
  </Body>
)
