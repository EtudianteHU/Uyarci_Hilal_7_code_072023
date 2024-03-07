import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const WrapperName = styled.div`
margin-top:0;
`
const Host = () => {
  return (
    <WrapperHost>
      <WrapperName>
        <WrapperPicture></WrapperPicture>
      </WrapperName>
    </WrapperHost>
  )
}
