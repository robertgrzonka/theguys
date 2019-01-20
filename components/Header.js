import styled from '@emotion/styled'
import design from '../designsystem/designSystem'

export const Title = styled.h1`
  color: ${design.color('dark')};
  margin: 1rem 0;
  font-weight: ${design.get('type.fontWeight.headings')};
`

export const Subtitle = styled.h3`
  color: ${design.color('primary')};
  margin: 0 0 20 0;
  font-weight: ${design.get('type.fontWeight.extralight')};
`
