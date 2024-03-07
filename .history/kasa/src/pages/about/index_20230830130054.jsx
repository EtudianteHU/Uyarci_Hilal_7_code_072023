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

const AboutImage = styled.div`
width: 100%;
height: 220px;
background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.5)
),
url(${aboutImg});
`



const AboutBanner = () => {
  return (
    <Section>
      <AboutImage />
      <aboutCollapse />
    </Section>
  )
}

export default AboutBanner
