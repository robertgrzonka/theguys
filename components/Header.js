import styled from '@emotion/styled'
import design from '../designsystem/designSystem'

export const Title = styled.h1`
  color: ${design.color('dark', 'base')};
  font-weight: ${design.get('type.fontWeight.bold')};
`

export const Subtitle = styled.h3`
  color: ${design.color('dark', 'base')};
  font-weight: ${design.get('type.fontWeight.light')};
  font-family: ${design.get('type.fontFamily.serif')};
`
