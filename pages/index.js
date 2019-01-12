import Layout from '../components/Layout'
import StyledHeader from '../components/StyledHeader'
import Button from '../components/Button'
import Blockquote from '../components/Blockquote'
import Code from '../components/Code'
import Input from '../components/Form'
import Component from '../components/Component'
import Examples from '../components/Examples'
import Subtitle from '../components/Subtitle'

export default () => (
  <Layout>
    <StyledHeader
      text='theGuys ‣ design'
      fontFamily='Cormorant Garamond'
      textAlign='center'
      fontSize='3rem'
      fontWeight='900'
      color='black'
      margin='5vh 0 0 0'
      letterSpacing='0.2rem'
    />
    <Subtitle
      text='mini UI React library'
      textAlign='center'
    />

    <Component text='Styled headers' p='Lorem ipsum solor domet.'>
      <Blockquote boxShadow='none'>
        StyledHeaders can by styled with <strong>any</strong> CSS value written with specific JS look-a-like <strong>camelCase</strong> (e.g.{' '}
        <Code>fontWeight</Code> or <Code>textAlign</Code> etc.).
      </Blockquote>
      <Examples text='Examples'>
        <StyledHeader text={'Deafault header'} />
        <StyledHeader
          fontWeight='100'
          textAlign='center'
          color='palevioletred'
          text='Lighter, centered and pink.'
        />
        <StyledHeader
          textAlign='right'
          fontWeight='100'
          fontSize='1.4rem'
          fontStyle='oblique'
          text='Aligned to right, oblique, smaller'
        />
      </Examples>
    </Component>

    <Component text='Buttons' p='Lorem ipsum solor domet.'>
      <Examples text='Examples'>
        <Button>Default</Button>
        <Button color={'lightpink'}>Lightpink</Button>
        <Button color={'palevioletred'}>Palevioletred</Button>
        <Button color={'royalblue'}>Royalblue</Button>
        <Button color={'#EEBC1D'}>Gold</Button>
        <Button color={'lightseagreen'}>Lightseagreen</Button>
        <Button color={'crimson'}>Crimson</Button>
        <Button color={'darkcyan'}>Darkcyan</Button>
        <Button large>Large</Button>
      </Examples>

      <Examples text='Outline buttons'>
        <Button outline>Default</Button>
        <Button color='lightpink' outline>Lightpink</Button>
        <Button color='palevioletred' outline>Palevioletred</Button>
        <Button color='royalblue' outline>Royalblue</Button>
        <Button color='#EEBC1D' outline>Gold</Button>
        <Button color='lightseagreen' outline>Lightseagreen</Button>
        <Button color='crimson' outline>Crimson</Button>
        <Button color='darkcyan' outline>Darkcyan</Button>
        <Button large outline>Large</Button>
      </Examples>
    </Component>

    <Component text='Cards' p='Lorem ipsum solor domet.' />

    <Component text='Blockquotes' p='Lorem ipsum solor domet.'>
      <Examples text='Examples'>
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
      </Examples>
    </Component>

    <Component text='Forms' p='Lorem ipsum solor domet.'>
      <Examples text='Examples'>
        <Input name='Input' />
      </Examples>
    </Component>

  </Layout>
)
