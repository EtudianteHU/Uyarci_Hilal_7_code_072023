import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const WrapperHost = styled.div`
  display: flex;
`
const WrapperName = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  margin-block: 0;
`

const WrapperPicture = styled.div`
  flex-grow: 1;
  border-radius:50%
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
export default Host
