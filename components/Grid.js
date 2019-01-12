const col = {
  height: 'auto',
  display: 'flex',
  margin: 5,
  width: '100%'
}

export const Col = (props) => (
  <div style={col}>
    {props.children}
  </div>
)

const row = {
  height: 'auto',
  display: 'flex',
  margin: 10
}

export const Row = (props) => (
  <div style={row}>
    {props.children}
  </div>
)

const container = {
  maxWidth: '100%',
  height: 'auto',
  margin: '50px',
  padding: '50px',
  display: 'grid'
}

export const Container = ({ children }) => (
  <div style={container}>
    {children}
  </div>
)

export const Grid = (props) => (
  <Container>
    <Row>
      {props.children}
    </Row>
  </Container>
)
