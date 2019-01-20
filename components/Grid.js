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

export const Container = (props) => (
  <div>
    {props.children}
    <style jsx>
      {`
      max-width: 100%,
      height: auto,
      margin: ${'fluid' in props ? '0xp' : '25px'},
      padding: ${'fluid' in props ? '0xp' : '25px'}
      `}
    </style>
  </div>
)
