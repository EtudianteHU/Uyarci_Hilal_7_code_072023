import styled from 'styled-components'
import aboutImg from '../../assets/aproposimg.png'
import aboutCollapse from '../../components/aboutCollapse'

const Section = styled.div `
display: flex;
`



const AboutBanner = () => {
  return (
    <Section>
      <aboutImg />
      <aboutCollapse />
    </Section>
  )
}

export default AboutBanner
