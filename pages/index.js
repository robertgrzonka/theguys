import StyledHeader from '../components/StyledHeader'
import Head from '../components/Head'
import Button from '../components/Button'
import Blockquote from '../components/Blockquote'
import Code from '../components/Code'
import Separator from '../components/Separator'
import Span from '../components/Span'

export default () => (
  <div>
    <Head />
    <StyledHeader text={'StyledHeader'} />

    <Blockquote boxShadow={'none'}>
  StyledHeaders can by styled with <strong>any</strong> CSS value written with specific JS look-a-like <strong>camelCase</strong> (e.g. <Code>fontWeight</Code>). In examples below we set margin and padding to 0 with <Code>props.margin</Code> and <Code>props.padding</Code>.
    </Blockquote>

    <StyledHeader fontWeight={100} color={'crimson'} fontSize={'1.3em'} margin={0} padding={0} text={'Hey, I am styled!'} />
    <StyledHeader fontWeight={500} color={'darkcyan'} fontSize={'1em'} margin={0} padding={0} textAlign={'center'} text={'I am styled too'} />
    <StyledHeader fontWeight={800} color={'royalblue'} fontSize={'1.1em'} margin={0} padding={0} textAlign={'right'} text={'So do I.'} />

    <hr />

    <StyledHeader children='Buttons' />

    <StyledHeader text='Examples:' fontSize='1em' />
    <Button backgroundColor={'lightpink'} href='https://theguys.design'>Lightpink</Button>
    <Button backgroundColor={'palevioletred'}>Palevioletred</Button>
    <Button backgroundColor={'royalblue'}>Royalblue</Button>
    <Button backgroundColor={'lightseagreen'}>Lightseagreen</Button>
    <Button backgroundColor={'#EEBC1D'}>Gold</Button>
    <Button backgroundColor={'crimson'}>Crimson</Button>
    <Button backgroundColor={'darkcyan'}>Darkcyan</Button>

    <hr />

    <StyledHeader>
      Cards.
    </StyledHeader>

    <hr />

    <StyledHeader>
      Blockquotes.
    </StyledHeader>
    <StyledHeader text='Examples:' fontSize='1em' />
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
      Others
    </StyledHeader>
    <Blockquote>
      Word <Span color={'red'}>blabla</Span> was styled with Span which takes only color as a props.
    </Blockquote>
    <Separator />
    <style jsx global>{`
      body {
        margin: 5% 10%;
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
          font-size: 0.9em;
          letter-spacing: 0.0625em;
          text-align: justify;
        }
        hr {
          margin: 50px 0 50px 0;
          border: 0.05em dashed rgba(0,0,0,0.5);
        }
        `}
    </style>
  </div>
)
