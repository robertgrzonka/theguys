import styled from '@emotion/styled'
import design from '../designsystem/designSystem'

export const Title = styled.h1`
  color: ${props => props.dark ? design.color('dark', 'base') : design.color('bright', 'dark')};
  font-weight: ${design.get('type.fontWeight.headings')};
`

export const Subtitle = styled.h3`
  color: ${props => props.dark ? design.color('dark', 'base') : design.color('bright', 'dark')};
  font-weight: ${design.get('type.fontWeight.light')};
  font-family: ${design.get('type.fontFamily.sans')};
`
