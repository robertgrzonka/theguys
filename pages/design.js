import React from 'react'
import design from '../designsystem/designSystem'
import styled from '@emotion/styled'
import Layout from '../components/Layout'

const Header = styled.h1`
  color: ${design.color('primary')};
  font-size: ${design.fontSize('xl')};
  font-family: ${design.get('type.fontFamilyHeadings')};
  font-weight: ${design.get('type.fontWeight.headings')};
`

const Paragraph = styled.p`
  color: ${design.color('dark')};
  font-size: ${design.fontSize('regular')};
  font-family: ${design.get('type.fontFamily.system')};
  font-weight: ${design.get('type.fontWeight.light')};
`

const DesignSystemPage = () => (
  <Layout>
    <Header>Is it styled well?</Header>
    <Paragraph>How about this one?</Paragraph>
  </Layout>
)

export default DesignSystemPage
