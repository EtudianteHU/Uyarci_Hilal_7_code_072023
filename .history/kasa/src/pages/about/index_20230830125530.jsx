import styled from 'styled-components'
import aboutImg from '../../assets/aproposimg.png'
import aboutCollapse from '../../components/aboutCollapse'

const Section = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 2rem;
`

const aboutImg = styled.div`
width: 100%
height: 220px

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
