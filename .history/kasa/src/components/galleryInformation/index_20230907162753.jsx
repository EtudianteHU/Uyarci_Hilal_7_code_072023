const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { title } = logement
  const { location } = logement

  return (
    <WrapperContainer>
        <SectionLeft>

        </SectionLeft>

        <SectionRight>
            
        </SectionRight>


    </WrapperContainer>
  )