const { galleryId } = useParams()
const logement = data.find((product) => product.id === galleryId)

const { title } = logement
const { location } = logement
const {tags} = logement
return (
  <WrapperContainer>
    <SectionLeft>
      <WrapperTitle>
        <Title>{title}</Title>
      </WrapperTitle>
      <Location>{location}</Location>
      <Tag></Tag>{tags}</Tag>
    </SectionLeft>

    <SectionRight></SectionRight>
  </WrapperContainer>
)
