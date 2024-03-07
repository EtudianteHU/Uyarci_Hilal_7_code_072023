const { galleryId } = useParams()
const logement = data.find((product) => product.id === galleryId)

const { title } = logement
const { location } = logement

return (
  <WrapperContainer>
    <SectionLeft>
      <WrapperTitle>
        <Title>{title}</Title>
      </WrapperTitle>
      <Location>{location}</Location>
      <Tag></Tag>
    </SectionLeft>

    <SectionRight></SectionRight>
  </WrapperContainer>
)
