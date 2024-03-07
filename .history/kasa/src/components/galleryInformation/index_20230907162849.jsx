const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { title } = logement
  const { location } = logement

  return (
    <WrapperContainer>
        <SectionLeft>
    <WrapperTitle>
        <Title>{]}</Title>
    </WrapperTitle>
        </SectionLeft>

        <SectionRight>

        </SectionRight>


    </WrapperContainer>
  )