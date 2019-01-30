import styled from '@emotion/styled'
import design from '../designsystem/designSystem'

export const Title = styled.h1`
  color: ${design.color('dark')};
  font-weight: ${design.get('type.fontWeight.headings')};
`

export const Subtitle = styled.h3`
  color: ${design.color('primary')};
  font-weight: ${design.get('type.fontWeight.extralight')};
`
