import Head from '../components/Head'
import StyledHeader from '../components/StyledHeader'
import Button from '../components/Button'
import Blockquote from '../components/Blockquote'

export default () => (
  <div>
    <Head />
    <Blockquote
      header='Lorem Ipsum'
      msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque. Condimentum vitae sapien pellentesque habitant. Dolor purus non enim praesent. Odio ut sem nulla pharetra diam sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id. Pretium aenean pharetra magna ac. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Libero volutpat sed cras ornare arcu dui. Ultrices eros in cursus turpis. Vel turpis nunc eget lorem dolor sed. Maecenas accumsan lacus vel facilisis volutpat est velit. Vestibulum morbi blandit cursus risus at ultrices mi.'
      color='lightpink'
    />
    <Blockquote
      header='Lorem Ipsum'
      msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque. Condimentum vitae sapien pellentesque habitant. Dolor purus non enim praesent. Odio ut sem nulla pharetra diam sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id. Pretium aenean pharetra magna ac. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Libero volutpat sed cras ornare arcu dui. Ultrices eros in cursus turpis. Vel turpis nunc eget lorem dolor sed. Maecenas accumsan lacus vel facilisis volutpat est velit. Vestibulum morbi blandit cursus risus at ultrices mi.'
      color='palevioletred'
    />
    <Blockquote
      header='Lorem Ipsum'
      msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque. Condimentum vitae sapien pellentesque habitant. Dolor purus non enim praesent. Odio ut sem nulla pharetra diam sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id. Pretium aenean pharetra magna ac. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Libero volutpat sed cras ornare arcu dui. Ultrices eros in cursus turpis. Vel turpis nunc eget lorem dolor sed. Maecenas accumsan lacus vel facilisis volutpat est velit. Vestibulum morbi blandit cursus risus at ultrices mi.'
      color='royalblue'
    />
    <Blockquote
      header='Lorem Ipsum'
      msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque. Condimentum vitae sapien pellentesque habitant. Dolor purus non enim praesent. Odio ut sem nulla pharetra diam sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id. Pretium aenean pharetra magna ac. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Libero volutpat sed cras ornare arcu dui. Ultrices eros in cursus turpis. Vel turpis nunc eget lorem dolor sed. Maecenas accumsan lacus vel facilisis volutpat est velit. Vestibulum morbi blandit cursus risus at ultrices mi.'
      color='lightseagreen'
    />
    <Blockquote
      header='Lorem Ipsum'
      msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque. Condimentum vitae sapien pellentesque habitant. Dolor purus non enim praesent. Odio ut sem nulla pharetra diam sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id. Pretium aenean pharetra magna ac. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Libero volutpat sed cras ornare arcu dui. Ultrices eros in cursus turpis. Vel turpis nunc eget lorem dolor sed. Maecenas accumsan lacus vel facilisis volutpat est velit. Vestibulum morbi blandit cursus risus at ultrices mi.'
      color='#EEBC1D'
    />
    <Blockquote
      header='Lorem Ipsum'
      msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque. Condimentum vitae sapien pellentesque habitant. Dolor purus non enim praesent. Odio ut sem nulla pharetra diam sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id. Pretium aenean pharetra magna ac. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Libero volutpat sed cras ornare arcu dui. Ultrices eros in cursus turpis. Vel turpis nunc eget lorem dolor sed. Maecenas accumsan lacus vel facilisis volutpat est velit. Vestibulum morbi blandit cursus risus at ultrices mi.'
      color='darkcyan'
    />
    <StyledHeader>
    StyledHeaders.
    </StyledHeader>

    <StyledHeader>
    Buttons.
    </StyledHeader>

    <p>
      <Blockquote
        header='Default'
        msg='This is default Blockquote'
      />
      <Button>Default</Button>
      <Button large>Large</Button>
    </p>

    <p>
      <Blockquote
        header='Background colors'
        msg='Endless options'
        color='royalblue' />
      <Button backgroundColor={'lightpink'}>Lightpink</Button>
      <Button backgroundColor={'palevioletred'}>Palevioletred</Button>
      <Button backgroundColor={'royalblue'}>Royalblue</Button>
      <Button backgroundColor={'lightseagreen'}>Lightseagreen</Button>
      <Button backgroundColor={'#EEBC1D'}>Gold</Button>
      <Button backgroundColor={'crimson'}>Crimson</Button>
      <Button backgroundColor={'darkcyan'}>Darkcyan</Button>
    </p>

    <StyledHeader>
Cards.
    </StyledHeader>

    <StyledHeader>
Blockquotes.
    </StyledHeader>

    <style jsx global>{`
body {
margin: 50px;
display: flex;
flex-direction: row;
font-size: 16px;
font-family: Lato, sans-serif;
}
`}</style>
  </div>
)
